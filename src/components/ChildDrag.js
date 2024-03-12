import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const ChildDrag = ({value, submit, index}) => {
  return (
    <Draggable draggableId={value} index={index}>
    {
        (provided)=>(
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      <p className='border '>{value}</p><br />
    </div>
        )
    }
    
    </Draggable>
  )
}

export default ChildDrag
