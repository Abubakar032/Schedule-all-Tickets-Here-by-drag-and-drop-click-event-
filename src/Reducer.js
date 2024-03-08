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
            
                if (action.payload2 === "box2") {
                  return {
                    ...state,
                    box2: [
                      ...state.box2,
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
                    box3: [
                      ...state.box3,
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
                      };
                    }
                  
                    return state;

                    
                case "HANDLE_DATA_BOX3":
                  let result2 =action.payload;
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
                      };
                    }
                  
                    return state;
                  
              

                  
              

    default :
    return state
}

}