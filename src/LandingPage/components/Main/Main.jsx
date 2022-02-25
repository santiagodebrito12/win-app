import React from 'react';
import './Main.scss';
import whitepaper from '../../../assets/Win.pdf';

const Main = () => {
  return (
  
   <div className="container contenedor-main" id="home">
    <h1>SPORTS INVESTMENTS AND CROWDFUNDING PLATFORM </h1>
    <h2>Powered by blockchain</h2>
    <a href={whitepaper} className="btn btn-whitepapper btn-grad" id="whitepaper">WHITEPAPER</a>
    </div>
  )
  ;
};

export default Main;
