import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {useLocation,useParams} from 'react-router-dom'
import { addToCart,removeFromCart } from '../actions/cardActions'
//Style
import '../Style/cart.scss'


const Cart =()=> {
  //PROPS Hooks
  let {search} = useLocation()
  let {id} = useParams()
  //Get Quantity
  const qty = search ? Number(search.split("=")[1]) : 1;
  //Remove item from cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }
  //Select Cart
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch()
  useEffect(() => {
    //
    if(id){
      dispatch(addToCart(id,qty))
    }
    //Scroll to the top after refresh
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
    }, [dispatch,id,qty]);
    
    if(cartItems.length !== 0){
  return (
    <section className='cart'>
      <h2>BASKET</h2>
      <div className="cart-group">
      <div className="items-group">
        {cartItems.map(item=>{
          return(
            <div className='item' key={item.product}>

           <img src={item.image} alt={item.title}/>
            <div className='item-info'>
            <h4>{item.title}</h4>
            <hr></hr>
            <p>Qty: <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                                {[...Array(item.count).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                 )}
                                                </select> </p>
            <p>£ {item.price}</p>
            </div>
            <button onClick={()=>removeFromCartHandler(item.product)}>X</button>

            </div>
          )
        })}
      </div>
        <div className="cart-info">
        <h3>Total</h3>
        <hr></hr>
        <h4> Sub-total: £ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</h4>
        <h4>Delivery: <select>
                        <option value="standart">Standart £ 5</option>
                        <option value="express">Express £ 7</option>
                        </select> </h4>
        </div>
       
        </div>
    </section>
  );
}
else{return(
  <section className='cart'>
      <h2>BASKET</h2>
      <div className="cart-group">
      Your basket is empty</div>
</section>
)}

}
export default Cart