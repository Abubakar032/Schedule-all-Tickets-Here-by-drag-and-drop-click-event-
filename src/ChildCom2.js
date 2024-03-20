import React, {useState} from 'react'
import { DataProvider } from './Context';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Box2 = () => {
    

    const [click, setclick]=useState({

    })

    const {option_box3,handle_box2_d2, handeled_item_box3}=DataProvider();
    
    const length= option_box3.length + handle_box2_d2.length;
  return (
    <div className=' bg-white shadow-gray-500 rounded-2xl overflow-y-scroll shadow 'style={{height:"500px"}}>
    <div className='flex justify-between font-bold mx-3'>    <h1 className='text-gray-500 font-bold mt-1 text-center'>Box 3 data</h1>
    <h1>({length})</h1>
    </div>

    <Droppable droppableId='box3'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>

              {
                option_box3.map((currentItem, index) => {
                  return (<Draggable key={currentItem} draggableId={currentItem.code.toString()} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className='bg-white shadow  shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index} onClick={() => setclick({
                        add_data: "Add data",
                        option1: "box1",
                        option2: "box2",
                        option3: "box3",
                      })}>
                        <div className='flex justify-between'>
                          <h1 className='font-bold'>{currentItem.label}</h1>
                          <h1>{currentItem.ticketId}</h1>
                        </div>
                        <p><span className='font-bold'>visitFee</span>: {currentItem.visitFee}</p>
                        <div className='flex justify-between'>
                          <div>                        <p><span className='font-bold'>code: </span> {currentItem.code}</p></div>

                          <div>
                            <select name="" id="" className='bg-gray-400' onChange={(e) => handeled_item_box3(currentItem, index, e.target.value)} >
                              <option value="Add data">{click.add_data}</option>
                              <option value="box1">{click.option1}</option>
                              <option value="box2">{click.option2}</option>
                              {/* <option value="box3">{click.option3}</option> */}
                            </select>

                          </div>

                        </div>
                        
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                  )
                })
              }
            </div>

          )}
        </Droppable>
                

        
    </div>
    
  )
}

export default Box2
