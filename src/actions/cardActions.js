import { CART_ADD_ITEM,CART_REMOVE_ITEM} from "../constants/cartConstants";
import axios from 'axios';
import Cookie from 'js-cookie'

const addToCart=(productId,qty) => async (dispatch)=>{
    try{
        const {data} = await axios.get(`https://admin.jurajbasanda.com/wp-json/wp/v2/skate/${productId}/`);
        dispatch({ type: CART_ADD_ITEM, payload:{ 
                                        product:data.id,
                                        title:data.acf.title,
                                        image:data.acf.image,
                                        price:Number(data.acf.price),
                                        count:Number(data.acf.countinstock),
                                        qty }});
          
    }
    catch(error){

    }
    
}
const removeFromCart = (productId) => (dispatch,) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    

}


export {addToCart,removeFromCart};