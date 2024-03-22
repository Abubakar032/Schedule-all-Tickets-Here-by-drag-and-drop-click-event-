import React, { useEffect, useState } from 'react'
import { DataProvider } from './Context';

const CompleteData = () => {
  
    const {option_box2,option_box3,handle_box2_d1, handle_box2_d2, handle_box3_d1, handle_box3_d2}=DataProvider()
    const length=option_box2.length + option_box3.length + handle_box2_d1.length + handle_box3_d1.length + handle_box3_d2.length;


    
   const data=[ ...option_box2, ...option_box3, ...handle_box2_d1,...handle_box2_d2, ...handle_box3_d2, ...handle_box3_d1]

  return (
    <div>
    <div className=' bg-white   shadow-gray-500 rounded-2xl overflow-y-scroll shadow ml-3 'style={{height:"500px"}}>
    <div className='flex justify-between mx-3 font-bold'>
    <h1 className='text-gray-500 font-bold mt-1 text-center'>Complete Add data</h1>
    <h1>({length})</h1>
    </div>
    {
        data.map((currentItem, index)=>{
            return <div className='bg-white shadow shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index}>
            <div className='flex justify-between'>
            <h1 className='font-bold'>{currentItem.label}</h1>
            <h1>{currentItem.ticketId}</h1>
            </div>
            <p><span className='font-bold'>visitFee</span>: {currentItem.visitFee}</p>
            <p><span className='font-bold'>code: </span> {currentItem.code}</p>
        <p></p>
    </div>
        })
    }

        
    </div>
 
      
    </div>
  )
}

export default CompleteData
