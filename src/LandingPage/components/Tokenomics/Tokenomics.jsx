import React from 'react'
import './Tokenomics.scss';
import frame from '../../../assets/section3.png';
const Tokenomics = () => {
  return (
    <div className=" contenedor-tokenomics" id="tokenomics">
        <h2 className="titulo-seccion">Win Token</h2>
        <div className="contenedor-tokenomics-text">
            <h3 >Financial solutions, powered by blockchain</h3>
            <p>WIN sports ecosystem is set to facilitate change and reshape the sports industry by bringing clubs, fans and athletes closer together. Powered by Blockchain’s novel infrastructure and leveraging the benefits of smart contract capacities WIN aims to <span>reshape </span>, <span>revolutionise</span> and <span>disrupt</span> the multi-billion sport industry.</p>
        </div>
        <div className="contenedor-tokenomics-frame">
            
            <img src={frame}/>  
                      
        </div>
    </div>
  )
}

export default Tokenomics