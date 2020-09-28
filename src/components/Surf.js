import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {listProducts} from '../actions/productActions'
//Style
import '../Style/boards.scss'

//Background Image
import background from '../img/surfing01.jpg'

const Surf = () => {
  //States
  const productList = useSelector(state => state.productList)
  const {surf,loading,error} = productList;
  const dispatch =  useDispatch()
  
  useEffect(() => {
    //get products
    dispatch(listProducts())
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    
  }, [dispatch])
  
    return( loading ? 
      <main>
        <section className="boards">
          <div
            className="head-background"
            style={{ backgroundImage: `url(${background})` }}
          >
            <h2>Snowboard</h2>
          </div>
          <Link className="backLink" to="/">
            <i className="fas fa-chevron-left" /> Go back{' '}
          </Link>
          <h3 className="title">Latest products</h3>
          <div className="boards-group">
            <div
              style={{
                width: '100%',
                height: '50vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="loader"></div>
            </div>
          </div>
        </section>
      </main>
    : error? <div>{error}</div> :

    <main>
      <section className="boards">
        <div
          className="head-background"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h2>Surfboard</h2>
        </div>
        <Link className="backLink" to="/">
          <i className="fas fa-chevron-left" /> Go back{' '}
        </Link>
        <h3 className="title">Latest products</h3>
        <div className="boards-group">
        {/* Show Products----------- */}
        {surf.map((item) => (
          <div className="board-item" key={item.id}>
            <Link to={`/surf/${item.id}`}>
              <img src={item.acf.image} alt={item.acf.title} />
            </Link>

            <Link to={`/surf/${item.id}`}>
              <h4>{item.acf.title}</h4>
              <p className="price">£ {item.acf.price}</p>
            </Link>
          </div>
        ))}        </div>
      </section>
    </main>
    
  
    )
}
export default Surf;
