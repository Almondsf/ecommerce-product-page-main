import React, { useContext, useState} from 'react'
import Cartcon from './cartcon'
import { ProductContext } from '../ProductContext';

export const AddCart = () => {
  const [count, setCount, AddCart, RemoveCart, counta, setCounta] = useContext(ProductContext) 
  
  return (
    <div className='md:flex items-center self-center pb-8'>
        <div className='md:mr-2 bg-gray-200 rounded-r-md md:mb-0 mb-3 rounded-l-md py-1  flex justify-between px-1'>
            <span onClick={RemoveCart} className=' pl-2  text-orange-500 font-extrabold cursor-pointer'>-</span>
            <span className=' px-6 pt-1.5 pb-1 text-sm font-black text-gray-800'>{count}</span>
            <span onClick={AddCart} className=' pr-2  text-orange-500 font-extrabold cursor-pointer'>+</span>        </div>
        <div className='text-white shadow-xl flex items-center justify-center self-center'>
            <button onClick={() => setCounta(count)} className='flex bg-orange-500 px-12 py-2 justify-center md:w-64 w-80  rounded text-white text-sm'>
              <span className='text-white fill-white pr-3'><Cartcon/></span > Add to cart</button>
              
        </div>
        <span>{counta}</span>
    </div>
  )
}
