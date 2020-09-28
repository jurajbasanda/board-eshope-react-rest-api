import React, { useState,} from 'react';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import '../Style/menu.scss'

export default function Nav() {
  //States
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
const [Menu, setMenu] = useState("");
//Open Mobile Menu
  const mobilMenu = () =>{ (Menu === '') ? setMenu(' open') :  setMenu('')}
//Show Cart Quantity
  return (
    <>
    <nav>
    <div role='button' tabIndex='0' onClick={mobilMenu} onKeyDown={mobilMenu} className='burger'><i className="fas fa-bars"/></div>
  <div className='logo'><Link to='/'><h1>Board</h1></Link></div>

      <ul className='desktop'>
     <li><Link  to='/' >HOME</Link></li>
     <li><Link  to='/skate'>SKATE</Link></li>
     <li><Link to='/snow'>SNOW</Link></li>
     <li><Link to='/surf'>SURF</Link></li>
     <li><Link to='/contact'>CONTACT US</Link></li>
     <Link to='/Cart'><span className='basket-length'>{cartItems.length}</span><i className="fas fa-shopping-basket basket"></i></Link>
      </ul>
        <ul className={`mobil ${Menu}`}>
    <li><Link onClick={mobilMenu} to='/'>HOME</Link></li>
    <li><Link onClick={mobilMenu} to='/skate'>SKATE</Link></li>
    <li><Link onClick={mobilMenu} to='/snow'>SNOW</Link></li>
    <li><Link onClick={mobilMenu} to='/surf'>SURF</Link></li>
    <li><Link onClick={mobilMenu} to='/contact'>CONTACT US</Link></li>
       </ul>
       <Link to='/Cart' className={`basket-button ${Menu}`}><span className='basket-length'>{cartItems.reduce((a, c) => (a + c.qty), 0)}</span><i className="fas fa-shopping-basket basket"></i></Link>

        </nav>
        </>
  );
}
