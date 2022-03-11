import React from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Marketplace from './components/MarketPlace/Marketplace';
import Mision from './components/Mision/Mision';
import Roadmap from './components/Roadmap/Roadmap';
import Tokenomics from './components/Tokenomics/Tokenomics';


import video from '../assets/video.mp4';
import Footer from './components/Footer/Footer';
import back from '../assets/background-tokenomics.png';

const LandingPage = () => {
  
  return (
    <div className="contenedor-app">
        <div className="contenedor-background">
        
      <video   autoPlay loop muted className="video-background"> 
      <source src={video} type="video/mp4" ></source>
      </video>
        
        <Header/>  
        <Main/>
        </div>

        <Mision/>
        <div className="contenedor-background-marketplace">

        </div>
        <Marketplace/>
        <div className="contenedor-background-tokenomics">
          <img src={back}/>
        </div>
        <div className="container">
          <Tokenomics/>
        </div>
        <div className="contenedor-background-roadmap">
        <div className="container">
          <Roadmap/>
        </div>
        </div>
        <div className="container">
        <Footer/>
        </div>
      </div>
  )
}

export default LandingPage


