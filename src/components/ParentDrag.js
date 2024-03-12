import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ParentDrag = () => {
  const [data, setdata] = useState('');
  const [items, setItems] = useState(['item 1']);

  const handleDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list
    const newItems = [...items];
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
  };

  const submit = () => {
    setItems([...items, data]);
    setdata('');
  };

  return (
    <div className='m-auto text-center mt-14 border bg-gray-700' style={{ width: '300px', margin: 'auto', marginTop: '30px' }}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='unique-droppable-id'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h1>Drag and drop</h1>
              <br />
              <input
                type='text'
                placeholder='enter items'
                id=''
                className='border'
                value={data}
                onChange={(e) => setdata(e.target.value)}
              />
              <br />
              <br />
              {items.map((value, index) => (
                <Draggable key={index} draggableId={`item-${index}`} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div className='border'>
                        <p>{value}</p>
                        <br />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <br />
              <br />
              <button onClick={submit} className='border bg-black text-white'>
                Submit
              </button>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ParentDrag;
