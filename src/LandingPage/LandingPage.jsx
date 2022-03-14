import React, { useEffect, useState } from 'react'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Marketplace from './components/MarketPlace/Marketplace';
import Mision from './components/Mision/Mision';
import Roadmap from './components/Roadmap/Roadmap';
import Tokenomics from './components/Tokenomics/Tokenomics';


import video from '../assets/background-win.mp4';
import videoMobile from '../assets/mobile-video.mp4'
import Footer from './components/Footer/Footer';
import backmision from '../assets/abstract.png';
const LandingPage = () => {
  
  const [isMobile,setIsMobile]=useState(false)
  const [screen,setScreen] = useState(window.screen.width);
  
  const setMobile = () =>{
    setIsMobile(window.screen.width)
    
  
  }

  useEffect(()=>{
    window.addEventListener('resize',setMobile)  ;
    setMobile()
  },[])


  return (
    <div className="contenedor-app" >
        <div className="contenedor-background">
        {isMobile < 600
         && <video   autoPlay loop muted className="video-background">
           <source src= {videoMobile } type="video/mp4" ></source> 
           </video>
        }
          {isMobile>600 && <video   autoPlay loop muted className="video-background">
           <source src= {video } type="video/mp4" ></source> 
           </video>}
     
         
        <Header/>  
        <Main/>
        </div>
        <div className="contenedor-background-mision"></div>
        <Mision/>
        <div className="contenedor-background-marketplace">
        <img src={backmision}/>
        </div>
        <Marketplace/>
        <div className="contenedor-background-tokenomics">
        <img src={backmision}/>

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


