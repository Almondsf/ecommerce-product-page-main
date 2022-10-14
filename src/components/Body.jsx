import React from 'react'
import Product from './Product'
import { AddCart } from './AddCart'

export const Body = () => {
  return (
    <div className='md:flex self-center justify-center md:mt-20 h-96'>
        <div className='md:mr-12 mb-4'>
            <Product/>
        </div>
        <div className='md:w-96 w-72 mx-auto md:mx-12 '>
            <h3 className='text-orange-500 font-black text-sm'>SNEAKER COMPANY</h3>
            <h1 className='font-extrabold text-3xl mt-2'>Fall Limited Edition <br /> Sneakers</h1>
            <p className='mt-3 text-xs mb-4 text-gray-500 font-bold tracking-wide leading-5 '>These low-profile sneakers are your perfect casual wear compansion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='mb-5 flex'>
                <h1 className='font-black text-xl'>$125.00<span className='ml-2 text-orange-600 bg-orange-100 p-1.5 rounded text-sm font-black'>50%</span>
                </h1>
                <small className='text-gray-400 ml-auto line-through'>$250.00</small>
            </div>
            <div className=''><AddCart/></div>
        </div>
        
    </div>
  )
}
