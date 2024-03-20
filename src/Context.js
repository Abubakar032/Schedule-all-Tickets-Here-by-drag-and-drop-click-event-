import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Reducer } from './Reducer';
import data from './Data';

const createcontext = createContext();

const result = data[0].tickets;
console.log(result, "data.....");

const initialState = {
  show_data: result,
  enter: {},
  option_box2: [{ticketId: 10, label: "Muhammad Abubakar", code: 85, visitFee: 2000},
                {ticketId: 11, label: "Bilal", code: 95, visitFee: 5000}],
  option_box3: [{ticketId: 20, label: "zain", code: 86, visitFee: 3000 }],
  handle_box2_d1:[],
  handle_box2_d2:[],
  handle_box3_d1:[],
  handle_box3_d2:[]
};

// ###########childer hamra parent  component ha ###########################

const Context = ({ children }) => {


//  ###############use reducer use #######################
// ############3dispatch trigglr karta he action ko#################

  const [state, dispatch] = useReducer(Reducer, initialState);


  
// ############# click to show the options ####################

  const enter_func = () => {
    return dispatch({
      type: "ENTER",
      payload: { add_data: "Add data", box1: "box1", box2: "box2", box3: "box3" },
    });
  };


// #3#####show data box2 & box 3#####################
  const option_data = (currentItem, index, option) => {
    return dispatch({
      type: "OPTION_DATA",
      payload: currentItem,
      payload2: option,
      payload3:result,
      
    
    });
  };


  const handeled_item_box2=(currentItem, index, option)=>{
    return dispatch({
      type:"HANDLE_DATA_BOX2",
      payload:currentItem,
      payload2: option
    })
  }
  const handeled_item_box3=(currentItem, index, option)=>{
    return dispatch({
      type:"HANDLE_DATA_BOX3",
      payload:currentItem,
      payload2: option
    })
  }

  const handleDrag=(results)=>{
    return dispatch({
      type:"HANDLE_DRAG",
      payload:results
    })
  }



  return (
    <div>

      <createcontext.Provider value={{ ...state, enter_func, option_data,handeled_item_box2, handeled_item_box3, handleDrag }}>
      {/* ################# parent component############## */}
        {children}
      </createcontext.Provider>
    </div>
  );
};

// ####################ye ek cutom hook he jo humy context component sy state or fun extract karny me madad karta he######

const DataProvider = () => {
  return useContext(createcontext);
};

export { createcontext, DataProvider };
export default Context