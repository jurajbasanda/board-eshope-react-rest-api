import React,{useState,createContext,useEffect} from "react"

const GlobalCartContext = createContext();
const GlobalProductsContext = createContext()

const GlobalProvider = ({children}) => {
  const [Products, setProducts] = useState([]);
  const [Cart,setCart]= useState([])
  const initialCart = ()=> window.localStorage.getItem('order' || [])
  const setLocalStorage = ()=> window.localStorage.setItem('order',JSON.stringify(Cart))
  const removeProduct = (id) =>{
    Cart.forEach((item,index)=>{
      if(item.id === id){
        console.log(index)
        Cart.splice(index,1)
      }
    })
    setCart(Cart)
  }
  
useEffect(()=>{
  setLocalStorage()
  

},[Cart])
  
  return (
    <GlobalCartContext.Provider value={[Cart,setCart]}>
    <GlobalProductsContext.Provider value={[Products,setProducts]}>
  {children}
  </GlobalProductsContext.Provider>
  </GlobalCartContext.Provider>
  )
}
export {GlobalProvider,GlobalCartContext,GlobalProductsContext};

