import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {
  GlobalContext,
  GlobalContext,
} from '../context/GlobalContext';
import './item.scss';
//Star Review Image
import stars from '../../images/stars.jpg';

const ProductSkate = () => {
  //States
  const [Product, setProduct] = useState ();
  const [QtyOfProduct, setQtyOfProduct] = useState (0);
  const [qty, setQty] = useState ();
  const [Loading, setLoading] = useState (true);
  const [Cart, setCart] = useContext (GlobalContext);
  const [Products, setProducts] = useContext (GlobalContext);

  let {id} = useParams ();
  const getProduct = () => {
    const data = Products.filter (item => item.id == id);
    setProduct (data);
    setLoading (false);
  };
  const stopLoading = () => {
    if (Products.length == 0) {
      setLoading (true);
    } else {
      setLoading (false);
    }
  };
  //Handle Add To Cart
  const handleAddCart = () => {
    const check = Cart.every (item => {
      return item.id !== id;
    });
    if (check) {
      let item = {
        title: Product.acf.title,
        price: Product.acf.price,
        quantity: qty,
        id: Product.acf.id,
      };
      setCart (current => [...Cart, item]);
    } else {
      Cart.map (item => {
        if (item.id == id) {
          setCart ([...Cart]);
        }
      });
    }
  };

  useEffect (() => {
    window.scrollTo ({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    getProduct ();
    stopLoading ();
  }, []);

  if (Loading) {
    return (
      <main>
        <section className="item-template">
          <Link className="backLink" to="/skate">
            <i className="fas fa-chevron-left" /> Go back
          </Link>
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
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <section className="item-template">
          <Link className="backLink" to="/skate">
            <i className="fas fa-chevron-left" /> Go back
          </Link>

          {Product.map (item => (
            <div className="item-group" key={item.id}>
              <img src={item.acf.image} alt={item.acf.title} />
              <div className="item-info">
                <div className="item-title">
                  <h2>{item.acf.title}</h2>
                  <p>Brand by Skate </p>
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
                      {item.acf.InStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </span>
                    {' '}
                    and ready to deliver
                  </p>
                  <div className="addTo">
                    <p className="price">£ {item.acf.price}</p>
                    {/* -------------SELECT QTY---------- */}
                    <select
                      value={qty}
                      onChange={e => {
                        setQty (e.target.value);
                      }}
                    >
                      {[...Array (6).keys ()].map (x => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      ))}
                    </select>
                    {/*-------ADD TO CART-------*/}
                    <button onClick={handleAddCart}>ADD TO CART</button>
                  </div>
                </div>
                <div className="item-dsc">
                  <h3>PRODUCT DETAILS</h3>
                  <p>{item.acf.content}</p>
                </div>
              </div>
            </div>
          ))}

        </section>
      </main>
    );
  }
};
export default ProductSkate;
