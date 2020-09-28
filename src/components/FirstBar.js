import React from 'react';
import '../Style/firstBar.scss'

export default function FirstBar() {
  return (
    <div className='firstBar'>
    <ul>
    <li><i className="im im-truck"/>
        Free shipping on all orders up to 100£</li>
    <li><i className="im im-timer"/>
        Fast Delivery</li>
    <li><i className="fas fa-exchange-alt"/>
               Easy Return</li>
    </ul>
    </div>
  );
}
