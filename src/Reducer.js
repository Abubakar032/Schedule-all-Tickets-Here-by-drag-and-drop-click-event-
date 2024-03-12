export const Reducer=(state, action )=>{

switch(action.type){

    case "SHOW_ALL_DATA":
        return{
            ...state,
            show_data:action.payload
        }

        case "ENTER":
            return {
                ...state,
                enter:{...action.payload}
            }


            case "BOX2_DATA":
              let result =action.payload;
            
              const filter_data=state.show_data.filter((currentVal)=>{
                return result!==currentVal;
                
               }) 
                if (action.payload2 === "box2") {
                  
                  return {
                    ...state,
                    
                   show_data:filter_data,
                    option_box2: [
                      ...state.option_box2,
                      {
                        id: result.ticketId,
                        code: result.code,
                        visitFee: result.visitFee,
                        label: result.label,
                      },
                    ],
                    
                  };
                }
              
                if (action.payload2 === "box3") {
                  return {
                    ...state,
                  
                    show_data:filter_data,
                    option_box3: [
                      ...state.option_box3,
                      {
                        id: result.ticketId,
                        code: result.code,
                        visitFee: result.visitFee,
                        label: result.label,
                      },
                    ],
                  };
                }
              
                return state;


                case "HANDLE_DATA_BOX2":
                  let result1 =action.payload;
                  const filter=state.option_box2.filter((currentVal, index)=>{
                    return result1!==currentVal
                  })
                    if (action.payload2 === "box1") {
                      return {
                        ...state,
                        
                        handle_box2_d1: [
                          ...state.handle_box2_d1,
                          {
                            id: result1.ticketId,
                            code: result1.code,
                            visitFee: result1.visitFee,
                            label: result1.label,
                          },
                        ],
                        option_box2:filter
                      };
                    }
                  
                    if (action.payload2 === "box3") {
                      
                      return {
                        ...state,
                       
                        handle_box2_d2: [
                          ...state.handle_box2_d2,
                          {
                            id: result1.ticketId,
                            code: result1.code,
                            visitFee: result1.visitFee,
                            label: result1.label,
                          },
                        ],
                        option_box2:filter,
                      };
                    }
                  
                    return state;

                    
                case "HANDLE_DATA_BOX3":
                  let result2 =action.payload;
                  const  filter2=state.option_box3.filter((currentVal, index)=>{
                    return currentVal!==result2;
                  })
                    if (action.payload2 === "box1") {
                      return {
                        ...state,
                        handle_box3_d1: [
                          ...state.handle_box3_d1,
                          {
                            id: result2.ticketId,
                            code: result2.code,
                            visitFee: result2.visitFee,
                            label: result2.label,
                          },
                        ],
                        option_box3:filter2,
                      };
                    }
                  
                    if (action.payload2 === "box2") {
                      return {
                        ...state,
                        handle_box3_d2: [
                          ...state.handle_box3_d2,
                          {
                            id: result2.ticketId,
                            code: result2.code,
                            visitFee: result2.visitFee,
                            label: result2.label,
                          },
                        ],
                        option_box3:filter2,
                      };
                    }
                  
                    return state;
                  
              

                  
              

    default :
    return state
}

}