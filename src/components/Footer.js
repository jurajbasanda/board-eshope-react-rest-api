import React from 'react';
import {Link} from 'react-router-dom';
import '../Style/footer.scss'


const Footer=()=> {
  return (
    <footer>
    
    <div className='footer-group'>
    <ul className='socialNetworks'>
    <li><a href='/'><i className="fab fa-twitter"></i></a></li>
    <li><a href='/'><i className="fab fa-instagram"></i></a></li>
    <li><a href='/'><i className="fab fa-facebook-f"></i></a></li>
    </ul>
    <div className='sub'>
    <label htmlFor='email'>Join our Newsletter</label>
    <input type="emial" id='email' name='email'  placeholder='Email Adress'/>
    <button>Join</button>
    </div>
    </div>
    <br/>
    <ul className='footer-list'>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/'>FAQ's</Link></li>
    <li><Link to='/'>Returns</Link></li>
    <li><Link to='/'>Terms and Condidtions</Link></li>
    </ul>
    <br/>
    <section className='madeBy'>
    © {new Date().getFullYear()}, Made by
          {` `}
          <a href="https://www.jurajbasanda.com">Juraj Basanda</a>
    </section>
    </footer>
  );
}
export default Footer