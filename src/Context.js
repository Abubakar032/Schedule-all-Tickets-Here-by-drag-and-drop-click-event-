import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Reducer } from './Reducer';
import data from './Data';

const createcontext = createContext();

const initialState = {
  show_data: [],
  enter: {},
  option_box2: [{id: 10, label: "abubakar", code: 85, visitFee: 2000}],
  option_box3: [{id: 10, label: "abubakar", code: 85, visitFee: 2000 }],
  handle_box2_d1:[],
  handle_box2_d2:[],
  handle_box3_d1:[],
  handle_box3_d2:[]
};

const Context = ({ children }) => {
  const result = data[0].tickets;
  console.log(result, "data.....");

  const [state, dispatch] = useReducer(Reducer, initialState);

  console.log(state.box2, "box2 data.....");
  console.log(state.box3, "box3 data.....");

  const show_all_data = () => {
    return dispatch({
      type: "SHOW_ALL_DATA",
      payload: result,
    });
  };

  const enter_func = () => {
    return dispatch({
      type: "ENTER",
      payload: { add_data: "Add data", box1: "box1", box2: "box2", box3: "box3" },
    });
  };

  const option_data = (currentItem, index, option) => {
    return dispatch({
      type: "BOX2_DATA",
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
  useEffect(() => {
    show_all_data();
  },[result]);

  return (
    <div>
      <createcontext.Provider value={{ ...state, enter_func, option_data,handeled_item_box2, handeled_item_box3 }}>
        {children}
      </createcontext.Provider>
    </div>
  );
};

const DataProvider = () => {
  return useContext(createcontext);
};

export { createcontext, DataProvider };
export default Context