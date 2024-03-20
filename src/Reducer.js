export const Reducer=(state, action )=>{
  

  // ################action.type = action dsipatch##################
  
switch(action.type){

    

        case "ENTER":
            return {
                ...state,
                enter:{...action.payload}
            }


            case "OPTION_DATA":
              let result =action.payload;
            
              const filter_data=state.show_data.filter((currentVal)=>{
                return result!==currentVal;
                
               }) 
              //  ###########action.payload2 = option###############
                if (action.payload2 === "box2") {
                  
                  return {
                    ...state,
                    
                   show_data:filter_data,
                    option_box2: [
                      ...state.option_box2,
                      {
                        ticketId: result.ticketId,
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
                        ticketId: result.ticketId,
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
                        
                        show_data: [
                          ...state.show_data,
                          ...state.handle_box2_d1,
                          {
                            ticketId: result1.ticketId,
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
                       
                        option_box3: [
                          ...state.option_box3,
                          ...state.handle_box2_d2,
                          {
                            ticketId: result1.ticketId,
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
                        show_data: [
                          ...state.show_data,
                          ...state.handle_box3_d1,
                          {
                            ticketId: result2.ticketId,
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
                        option_box2: [
                          ...state.option_box2, 
                          ...state.handle_box3_d2,
                          {
                            ticketId: result2.ticketId,
                            code: result2.code,
                            visitFee: result2.visitFee,
                            label: result2.label,
                          },
                        ],
                        option_box3:filter2,
                      };
                    }
                  
                    return state;


                    case "HANDLE_DRAG":
                      const { source, destination } = action.payload;
                      if (!destination) return state;
                    if (source.droppableId === destination.droppableId && source.index === destination.index) {
                        return state;
                      }
                    
                      const getItemAndSetter = (id) => {

                        // ############id matlb scourec.droppableId && destination.droppableId##########
                        
                        switch (id) {
                          case 'box1':
                            return [state.show_data, (newList) => ({ ...state, show_data: newList })];
                          case 'box2':
                            return [state.option_box2, (newList) => ({ ...state, option_box2: newList })];
                          case 'box3':
                            return [state.option_box3, (newList) => ({ ...state, option_box3: newList })];
                          default:
                            return [];
                        }
                      };
                    
                      const [sourceList, setSourceList] = getItemAndSetter(source.droppableId);
                      const [destinationList, setDestinationList] = getItemAndSetter(destination.droppableId);
                      const [removed] = sourceList.splice(source.index, 1);
                      destinationList.splice(destination.index, 0, removed);
                    
                      setSourceList([...sourceList]);
                      setDestinationList([...destinationList]);
                    
                      return { ...state };
                    

                  
              

                  
              

    default :
    return state
}

}