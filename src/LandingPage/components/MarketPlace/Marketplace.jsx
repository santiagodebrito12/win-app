import React,{useEffect} from 'react';
import './Marketplace.scss';
import imgjugador from '../../../assets/barrientos.png';
import config from '../../../assets/config.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
import backgrounMarket from '../../../assets/BG.png';

const Marketplace = () => {
    useEffect(()=>{
        Aos.init({duration:'2000'});
     },[])
    return (
 
        
    <div className="contenedor-marketplace container" id="marketplace">
        {/* <div className="contenedor-background-market">
         <img src={backgrounMarket}/>
         </div> */}
        <h2 data-aos="fade-up titulo-seccion">WIN MARKETPLACE</h2>
        <div className="contenedor-info-marketplace">
            <div className="contenedor-text-marketplace" data-aos="fade-right">
                <h3>COMING SOON</h3>
                <p>A secure NFT marketplace platform where sports organisations and athletes will be able to launch tokens backed by real world assets. 
                Investors will now be able to buy and sell athlete tokens and participate in entertainment's biggest industry. </p>
            </div>
            <div className="contenedor-card-marketplace " data-aos="fade-left">
                <div className="contenedor-img-card">
                <img src={imgjugador} alt="jugador-futbol"/>
                </div>
                <div className="contenedor-text-card">
                   <div className="puntuacion-jugador">1/100 Ultra Rare</div> 
                    <p className="jugador-name">Pablo “Pitu” Barrientos</p>
                    <div className="contenedor-buttons">
                    <button>Detalles</button>
                    <button>Player History</button>
                    </div>
                    <p>Pablo Cesar Barrientos is a retired Argentine footballer who was known for his great dribbling and ball control.</p>
                    <div className="contenedor-price-buynow">
                        <div className="contendor-price">
                            <h3> 40 WIN </h3>
                            <h4>$3975.05</h4>
                        </div>
                        <div className="contenedor-buy">
                            <button>BUY NOW</button>
                        </div>
                        <div className="contenedor-button-config">
                            <button><img src={config} alt="config"/></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
       
    </div>
   
    
  )
}

export default Marketplace