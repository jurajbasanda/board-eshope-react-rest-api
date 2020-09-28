import React, {useState, useEffect} from 'react';
import {useParams,useHistory,Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {detailsProduct} from '../../actions/productActions'
import '../../Style/item.scss';
//Star Review Image
import stars from '../../images/stars.jpg';

const ProductSkate = props => {
  //PROPS Hooks
  let {id} = useParams ();
  let {push} = useHistory()
  //Quantity of Product
  const [qty, setQty] = useState (1);
  //Product Details
  const productDetails = useSelector(state => state.productDetails);
  const {product,loading,error} = productDetails;
  const dispatch = useDispatch()
  useEffect (() => {
    //get item
    dispatch(detailsProduct(id))
    //Scroll to the top after refresh
    window.scrollTo ({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });    
  }, []);
  //Add To Cart
  const handleAddToCart = () => { push('/cart/' + id + '?qty=' + qty) }
  if (loading) {
    return (
      <div
        style={{
          width: '100%',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <div className="loader" />
      </div>
    );
  } 
  if(error){
    return <div>{error}</div>
  }
  else {
    return (
      <main>
        <section className="item-template">
          <Link className="backLink" to="/skate">
            <i className="fas fa-chevron-left" /> Go back
          </Link>

          <div className="item-group">
            <img src={product.image} alt={product.title} />
            <div className="item-info">
              <div className="item-title">
                <h2>{product.title}</h2>
                <p>Brand by {product.brand} </p>
              </div>
              <div className="reviews-group">
                <img src={stars} alt="Stars Reviews" />
                <small> 3 Customers Reviews</small>
              </div>
              <div className="addTo-group">
                <p>
                  Availability:
                  {' '}
                  <span>
                    {product.count > 0 ? 'In Stock' : 'Out Of Stock'}
                  </span>
                  {' '}
                  and ready to deliver
                </p>
                <div className="addTo">
                  <p className="price">£ {product.price}</p>
                  {/* -------------SELECT QTY---------- */}
                  <select
                    value={qty}
                    onChange={e => {
                      setQty (e.target.value);
                    }}
                  >
                    {[...Array (product.count).keys ()].map (x => (
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                  </select>
                  {/*-------ADD TO CART-------*/}
                  {product.count>0?<button onClick={handleAddToCart}>ADD TO CART</button> : <button disabled>ADD TO CART</button>}
                </div>
              </div>
              <div className="item-dsc">
                <h3>PRODUCT DETAILS</h3>
                <p>{product.content}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
};
export default ProductSkate;