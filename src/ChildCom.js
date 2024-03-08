import React, { useState } from 'react'
import { DataProvider } from './Context';

const Box1 = ({value}) => {
    const data=value;
    console.log(data,"select_data")
    
    const [click, setclick]=useState({

    })


    const {handeled_item_box2, handle_box3_d2}=DataProvider();

    const length=data.length + handle_box3_d2.length; 

  return (
    <>
    <div className=' bg-white  shadow-gray-500 rounded-2xl overflow-y-scroll shadow 'style={{height:"500px"}}>
    <div className='flex font-bold justify-between mx-3'>
    <h1 className='text-gray-500  mt-1 text-center'>Box 2 data</h1>
    <h1>({length})</h1>
    </div>
    
    {
        data.map((currentItem, index)=>{
            return <div className='bg-white shadow  shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index} onClick={()=>setclick({
              add_data:"Add data",
              option1:"box1",
              option2:"box2",
              option3:"box3",
            })}>
            <div className='flex justify-between'>
            <h1 className='font-bold'>{currentItem.label}</h1>
            <h1>{currentItem.id}</h1>
            </div>
            <p><span className='font-bold'>visitFee</span>: {currentItem.visitFee}</p>
            <div className='flex justify-between'>
            <div>                        <p><span className='font-bold'>code: </span> {currentItem.code}</p></div>

                        <div>
                          <select name="" id="" className='bg-gray-400' onChange={(e)=>handeled_item_box2(currentItem, index, e.target.value)} >
                            <option value="Add data">{click.add_data}</option>
                            <option value="box1">{click.option1}</option>
                            <option value="box2">{click.option2}</option>
                            <option value="box3">{click.option3}</option>
                          </select>

                        </div>

            </div>
        <p></p>
    </div>
        })
    }


    {
      handle_box3_d2.map((currentItem, index)=>{
            return <div className='bg-white shadow  shadow-zinc-400 rounded-2xl p-2 mx-2 mt-3' key={index} onClick={()=>setclick({
              add_data:"Add data",
              option1:"box1",
              option2:"box2",
              option3:"box3",
            })}>
            <div className='flex justify-between'>
            <h1 className='font-bold'>{currentItem.label}</h1>
            <h1>{currentItem.id}</h1>
            </div>
            <p><span className='font-bold'>visitFee</span>: {currentItem.visitFee}</p>
            <div className='flex justify-between'>
            <div>                        <p><span className='font-bold'>code: </span> {currentItem.code}</p></div>

                        <div>
                          <select name="" id="" className='bg-gray-400' onChange={(e)=>handeled_item_box2(currentItem, index, e.target.value)} >
                            <option value="Add data">{click.add_data}</option>
                            <option value="box1">{click.option1}</option>
                            <option value="box2">{click.option2}</option>
                            <option value="box3">{click.option3}</option>
                          </select>

                        </div>

            </div>
        <p></p>
    </div>
        })
    }


        
    </div>
      
    </>
  )
}

export default Box1
