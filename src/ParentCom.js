import React from "react";
import Box1 from "./ChildCom";
import Box2 from "./ChildCom2";
import CompleteData from "./CompleteData";
import { DataProvider } from "./Context";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ParentCom = () => {
  const { show_data, enter_func, option_data, option_box2, option_box3, enter, handle_box2_d1, handle_box3_d1, handleDrag } = DataProvider();

  console.log(show_data, "show data..........")

  const length = show_data.length + handle_box2_d1.length + handle_box3_d1.length;


  return (
    <div className="bg-gray-100">
      
        <div className="mx-5">
          <h1>Tickets Schedule</h1>
          <p className="text-green-500">Schedule all Tickets Here by drag and drop & click event </p>
          <DragDropContext onDragEnd={handleDrag}>
          <div className="mt-16 grid lg:grid-cols-4">
            <div className="bg-white shadow-gray-500 rounded-2xl overflow-y-scroll shadow" style={{ height: "500px" }}>
              <div className="lg:flex justify-between mx-1 mt-1">
                <div>

                  <h1 className="font-bold text-gray-500">Box1 data</h1>
                </div>
                <div>
                  <h1 className="font-bold">({length})</h1>
                </div>
              </div>
              <Droppable droppableId="box1">
                {(provided) => (
                  <div ref={provided.innerRef} 
            
                  {...provided.droppableProps}>
                    {show_data.map((currentItem, index) => (
                      <Draggable draggableId={currentItem.code.toString()} index={index}>
                      {/* ########## provided parameter ka mtlb , jo drag-and-drop library se aaye huye props he us  ko contain karta hai ############################ */}
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            key={index}
                            className="mx-4 h-28 my-3 hover:p-1  bg-gray-50 rounded-2xl border shadow shadow-zinc-400 cursor-pointer"
                            onMouseEnter={enter_func}
                          >
                            <div className="flex justify-between mx-3 mt-1">
                              <h1>
                                <span className="font-bold">TicketId:</span> {currentItem.ticketId}
                              </h1>
                              <p>
                                <span className="font-bold">Code:</span> {currentItem.code}
                              </p>
                            </div>

                            <h1 className="mx-3 my-2">
                              <span className="font-bold">Label:</span> {currentItem.label}
                            </h1>
                            <div className="flex justify-between">
                              <div>
                                <p className="mx-3">
                                  <span className="font-bold">Visit Fee:</span> {currentItem.visitFee}
                                </p>
                              </div>
                              <div className="mr-2">
                                <select
                                  onChange={(e) => option_data(currentItem, index, e.target.value)}
                                  className="border shadow bg-gray-400"
                                >
                                  <option value="Add data">{enter.add_data}</option>
                                  {/* <option value="box1">{enter.box1}</option> */}
                                  <option value="box2">{enter.box2}</option>p
                                  <option value="box3">{enter.box3}</option>
                                </select>
                              </div>
                            </div>
                            {provided.placeholder}
                          </div>
                         
                        )}
                      </Draggable>

                    ))}
                  </div>
                

                )}
              </Droppable>

  

              

            </div>

            <div>
              <Box1  />
            </div>
            <div>
              <Box2  />
            </div>
            <div>
              <CompleteData value1={option_box2} value2={option_box3} />
            </div>
          </div>
          </DragDropContext>
        </div>
    
    </div>
  );
};

export default ParentCom;