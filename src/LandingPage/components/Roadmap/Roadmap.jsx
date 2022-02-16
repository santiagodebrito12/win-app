import React from 'react'
import './Roadmap.scss';
import 'animate.css';
import pelota from '../../../assets/ball.webm';
import check from '../../../assets/doble-check.svg';
import seeds from '../../../assets/seeds.svg';
import uncheck from '../../../assets/uncheck.svg';
import bag from '../../../assets/bag.svg';
import ticket from '../../../assets/ticket.svg';

const Roadmap = () => {
    
  return (
    <div className="contenedor-seccion-roadmap " id="roadmap">
        <h2 className="titulo-seccion">ROADMAP</h2>
        <div className="contenedor-roadmap">
            <div className="contenedor-roadmap-imagen">
            <video autoPlay loop muted className="imagen-pelota">
                <source src={pelota} type="video/webm"/>
                
            </video>
                {/* <img src={pelota} alt="pelota" className="imagen-pelota"/> */}
            </div>
            <div className="contenedor-roadmap-text">
                  
                <div className="contenedor-steps">
                    <h4>Q3 2021</h4>
                    <div className="contenedor-check">
                        <img src={check} alt="check"/>
                        <div className="line-middle"></div>
                        </div>
                    <div className="contenedor-steps-text "> 
                        <h5>First Steps</h5>
                        <ul>
                            <li>Legal Study</li>
                            <li>Partner CriptoKuantico</li>
                            <li>Whitepaper</li>
                        </ul>
                      </div>   
                </div>
                <div className="contenedor-steps">
                    <h4>Q4 2021</h4>
                    <div className="contenedor-check">
                        <img src={check} alt="check"/>
                        <div className="line-middle"></div>
                        </div>
                    <div className="contenedor-steps-text">
                        <h5>WIN Structure</h5>
                        <ul>
                            <li>1st Ambassor: </li>
                            <li>Pablo "Pitu" Barrientos</li>
                            
                        </ul>
                      </div>   
                </div>
                <div className="contenedor-steps">
                    <h4>Q1 2022</h4>
                    <div className="contenedor-check">
                        <img src={seeds} alt="check"/>
                        <div className="line-middle-check"></div>
                        </div>
                    <div className="contenedor-steps-text">
                        <h5>Seeds</h5>
                        <ul>
                            <li>Seed Round</li>
                            <li>Landing Site</li>
                           
                        </ul>
                      </div>   
                </div>
                <div className="contenedor-steps">
                    <h4>Q2 2022</h4>
                    <div className="contenedor-check">
                        <img src={uncheck} alt="check"/>
                        <div className="line-middle-check"></div>
                        </div>
                    <div className="contenedor-steps-text">
                        <h5>$WIN IDO</h5>
                        <ul>
                            <li>Legal Study</li>
                            <li>Partner CriptoKuantico</li>
                            <li>Whitepaper</li>
                        </ul>
                      </div>   
                </div>
                
                <div className="contenedor-steps">
                    <h4>Q3 2022</h4>
                    <div className="contenedor-check">
                        <img src={bag} alt="check"/>
                        <div className="line-middle-check"></div>    
                        </div>
                    <div className="contenedor-steps-text">
                        <h5>WIN Marketplace</h5>
                        <ul>
                            <li>Launch WIN Marketplace and </li>
                            <li>first Athlete's tokens</li>
                            <li>WIN Wallet</li>
                        </ul>
                      </div>   
                </div>
                <div className="contenedor-steps">
                    <h4>Q4 2022</h4>
                    <div className="contenedor-check">
                        <img src={ticket} alt="check"/>
                        
                        </div>
                    <div className="contenedor-steps-text">
                        <h5>$WIN Public Sale</h5>
                        <ul>
                            <li>Public sale of WIN Token</li>
                            <li>Brand Partnerships</li>
                            
                        </ul>
                      </div>   
                </div>

            </div>
        </div>
    </div>
  )
}

export default Roadmap;