import {PRODUCT_LIST_FAIL,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL} from '../constants/productsConstants'

function productListReducer( state= {products: [],skate:[],snow:[],surf:[] }, action ){

    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{loading:true};
        case PRODUCT_LIST_SUCCESS:
            const snowItem = action.payload.filter(item=> item.acf.category === 'snow')
            const skateItem = action.payload.filter(item=> item.acf.category === 'skate')
            const surfItem = action.payload.filter(item=> item.acf.category === 'surf')
            return{loading:false, products: action.payload,snow:snowItem,surf:surfItem,skate:skateItem};
        case PRODUCT_LIST_FAIL:
            return{loading:false, error: action.payload}
        default:
            return state
    }
}

function productDetailsReducer( state= {product: {} }, action ){

switch(action.type){
    case PRODUCT_DETAILS_REQUEST:
        return{loading:true};
    case PRODUCT_DETAILS_SUCCESS:
        return{loading:false, product: {id:action.payload.id,
            title:action.payload.acf.title,
            price:Number(action.payload.acf.price),
            content:action.payload.acf.content,
            image:action.payload.acf.image,
            count:Number(action.payload.acf.countinstock)
        }};
    case PRODUCT_DETAILS_FAIL:
        return{loading:false, error: action.payload}
    default:
        return state
}
}

export { productListReducer,productDetailsReducer };