import React from 'react'
import { DataProvider } from './Context';

const CompleteData = ({value1, value2}) => {
    const data1=value1;
    const data2=value2;
    const {handle_box2_d1, handle_box2_d2, handle_box3_d1, handle_box3_d2}=DataProvider()
    const length=data1.length + data2.length + handle_box2_d1.length + handle_box3_d1.length + handle_box3_d2.length;

  return (
    <div>
    <div className=' bg-white   shadow-gray-500 rounded-2xl overflow-y-scroll shadow ml-3 'style={{height:"500px"}}>
    <div className='flex justify-between mx-3 font-bold'>
    <h1 className='text-gray-500 font-bold mt-1 text-center'>Complete Add data</h1>
    <h1>({length})</h1>
    </div>
    {
        data1.map((currentItem, index)=>{
            return <div className='bg-white shadow shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index}>
            <div className='flex justify-between'>
            <h1 className='font-bold'>{currentItem.label}</h1>
            <h1>{currentItem.id}</h1>
            </div>
            <p><span className='font-bold'>visitFee</span>: {currentItem.visitFee}</p>
            <p><span className='font-bold'>code: </span> {currentItem.code}</p>
        <p></p>
    </div>
        })
    }
    {
        data2.map((currentItem, index)=>{
            return <div className='bg-white shadow shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index}>
            <div className='flex justify-between'>
            <h1 className='font-bold'>{currentItem.label}</h1>
            <h1>{currentItem.id}</h1>
            </div>
            <p><span className='font-bold'>visitFee</span>: {currentItem.visitFee}</p>
            <p><span className='font-bold'>code: </span> {currentItem.code}</p>
        <p></p>
    </div>
        })
    }

    {
        handle_box2_d1.map((currentItem, index)=>{
            return <div className='bg-white shadow shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index}>
            <div className='flex justify-between'>
            <h1 className='font-bold'>{currentItem.label}</h1>
            <h1>{currentItem.id}</h1>
            </div>
            <p><span className='font-bold'>visitFee</span>: {currentItem.visitFee}</p>
            <p><span className='font-bold'>code: </span> {currentItem.code}</p>
        <p></p>
    </div>
        })
    }
    {
        handle_box2_d2.map((currentItem, index)=>{
            return <div className='bg-white shadow shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index}>
            <div className='flex justify-between'>
            <h1 className='font-bold'>{currentItem.label}</h1>
            <h1>{currentItem.id}</h1>
            </div>
            <p><span className='font-bold'>visitFee</span>: {currentItem.visitFee}</p>
            <p><span className='font-bold'>code: </span> {currentItem.code}</p>
        <p></p>
    </div>
        })
    }
    {
        handle_box3_d1.map((currentItem, index)=>{
            return <div className='bg-white shadow shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index}>
            <div className='flex justify-between'>
            <h1 className='font-bold'>{currentItem.label}</h1>
            <h1>{currentItem.id}</h1>
            </div>
            <p><span className='font-bold'>visitFee</span>: {currentItem.visitFee}</p>
            <p><span className='font-bold'>code: </span> {currentItem.code}</p>
        <p></p>
    </div>
        })
    }
    {
        handle_box3_d2.map((currentItem, index)=>{
            return <div className='bg-white shadow shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index}>
            <div className='flex justify-between'>
            <h1 className='font-bold'>{currentItem.label}</h1>
            <h1>{currentItem.id}</h1>
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
