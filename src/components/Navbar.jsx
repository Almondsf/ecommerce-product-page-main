import {React, useContext} from 'react'
import { AddCart } from './AddCart'
import Cartcon from './cartcon'
import Manimg from './Manimg.png'
import Logo from './logo'
import { ProductContext } from '../ProductContext'


export const Navbar = () => {
  const [counta, setCounta, count] = useContext(ProductContext)

  return (
    <div className='flex items-center md:ml-20 ml-5 md:mr-14 mr-8  md:border-b md:border-gray-200 justify-center self-center'>
        <div className='flex items-center '>
            <h2 className=' mr-10  h-14 flex items-center justify-center self-center ml-6'><Logo/></h2>
            <ul className='md:flex hidden text-gray-400 mt-4 md:pt-2'>
                <li className='mx-4 hover:border-orange-500 hover:border-b-4 h-14 '><button>Collections</button></li>
                <li className='mx-4 h-14 hover:border-orange-500 hover:border-b-4'><button>Men</button></li>
                <li className='mx-4 h-14 hover:border-orange-500 hover:border-b-4'><button>Women</button></li>
                <li className='mx-4 h-14 hover:border-orange-500 hover:border-b-4'><button>About</button></li>
                <li className='mx-4 h-14 hover:border-orange-500 hover:border-b-4'><button>Contact</button></li>
            </ul>
        </div>
        <div className='flex ml-auto self-center justify-center mt-4 h-14 '>
           <span className='h-1 w-1 mt-1 cursor-pointer fill-gray-500'><Cartcon/></span>
          {counta && counta > 0 ?  
          <span className='text-white text-xs bg-orange-500 h-4 w-5 absolute mr-12 top-4 rounded-xl text-center'>{counta}</span> : ''}
           <img className='h-9 w-9 ml-12 hover:border-2 hover:border-orange-500 rounded-full' src={Manimg} alt="" />
        </div>
    </div>
  )
}
