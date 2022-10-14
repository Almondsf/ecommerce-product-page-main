import React, {useState} from 'react'
import Menu from './Menu'
import Close from './Close'


export const Sidebar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='flex absolute  h-screen top-0 w-screen md:hidden'>
        <div onClick={() => setOpen(true)} className='absolute right-auto left-3 top-7 h-max text-xl'> <Menu/></div>
        
        <div className={`${open ? ' bg-white w-2/3 z-10': 'hidden'}`}>
        <span onClick={() => setOpen(false)} className=' absolute top-6 left-6 text-xl'><Close/></span> 
            <ul className=' text-gray-900 mt-24 ml-5 font-extrabold'>
                <li className='mx-4 h-14 '><button className='text-xl font-extrabold'>Collections</button></li>
                <li className='mx-4 h-14 '><button className='text-xl font-extrabold'>Men</button></li>
                <li className='mx-4 h-14 '><button className='text-xl font-extrabold'>Women</button></li>
                <li className='mx-4 h-14 '><button className='text-xl font-extrabold'>About</button></li>
                <li className='mx-4 h-14 '><button className='text-xl font-extrabold'>Contact</button></li>
            </ul>
        </div>
        <div className={`${open ? 'w-1/3 bg-tranblack z-10' : 'hidden'}`}></div>
    </div>
  )
}
