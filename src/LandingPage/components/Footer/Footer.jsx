import React from 'react';
import './Footer.scss';
import logo from '../../../assets/win-logo-footer.svg' ;

const Footer = () => {
  return (
    <footer>
        <div className="contenedor-footer-logo">
            <img src={logo}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aperiam.</p>
        </div>
    </footer>
  )
}

export default Footer