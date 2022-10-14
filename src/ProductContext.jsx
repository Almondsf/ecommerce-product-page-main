import {React, useState, createContext} from 'react'

export const ProductContext = createContext();

export const ProductProvider = props =>{
    const [count, setCount] = useState(0);

    function AddCart(){
      setCount(count + 1)
    }
    function RemoveCart(){
      setCount(count => Math.max(count - 1, 0))
    };
    const [counta, setCounta] = useState();
    return(
      <ProductContext.Provider value={[count, setCount, AddCart, RemoveCart, counta, setCounta]}>
         {props.children}
      </ProductContext.Provider> 
    )

}