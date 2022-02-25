import React from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Marketplace from './components/MarketPlace/Marketplace';
import Mision from './components/Mision/Mision';
import Roadmap from './components/Roadmap/Roadmap';
import Tokenomics from './components/Tokenomics/Tokenomics';


import video from '../assets/video.mp4';

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
        
        <div className="container">
          <Tokenomics/>
        </div>
        <div className="contenedor-background-roadmap">
        <div className="container">
          <Roadmap/>
        </div>
        </div>
      </div>
  )
}

export default LandingPage


