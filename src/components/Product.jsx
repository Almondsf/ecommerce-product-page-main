import useState from 'react'
import shoe from '../image-product-1.jpg'
import shoe1 from '../image-product-1-thumbnail.jpg'
import shoe2 from '../image-product-2-thumbnail.jpg'
import shoe3 from '../image-product-2.jpg'
import shoe4 from '../image-product-3.jpg'

const Product = () => {
    return ( 
        <div>
            <img className='md:h-60 h-64 md:w-72 w-screen md:rounded-md' src={shoe} alt="" />
            <div className='md:flex hidden mt-4 justify-center'>
                <div><img className='h-14 w-14 mr-2 rounded-md hover:border-2 hover:border-orange-500 hover:opacity-70' src={shoe1} alt="" /></div>
                <div><img className='h-14 w-14 mx-2 rounded-md hover:border-2 hover:border-orange-500 hover:opacity-70' src={shoe2} alt="" /></div>
                <div><img className='h-14 w-14 mx-2 rounded-md hover:border-2 hover:border-orange-500 hover:opacity-70' src={shoe3} alt="" /></div>
                <div><img className='h-14 w-14 ml-2 rounded-md hover:border-2 hover:border-orange-500 hover:opacity-70' src={shoe4} alt="" /></div>
            </div>
        </div>
     ); 
}
export default Product;