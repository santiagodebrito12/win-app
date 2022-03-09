import React from 'react';
import { useState } from 'react';
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/winLogo.png';
import world from '../../../assets/world.png';
import wallet from '../../../assets/wallet.png';
import Metamask from '../../../assets/metamask.svg'
import CoinBase from '../../../assets/coinbase.svg'
import WalletConnect from '../../../assets/walletConnect.svg'

import './header.scss'

function getModalStyle () {
    const top=50;
    const left = 50;

    return{
      top:`${top}%`,
      left:`${left}%`,
      transform:`translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    width: 400,
    height:600,
    // backgroundImage: ' linear-gradient(to right, #1D976C 0%, #93F9B9  51%, #1D976C  100%)',
    backgroundColor: 'black',
    border: '2px solid #312f2f',
    borderRadius:'2Opx',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color:'white',
    
  },
  
}));

const Header = (props) => {
    const classes = useStyles();
    const [modalStyle]=React.useState(getModalStyle);
    const [open,setOpen] =React.useState(false);
    const[burguerOpen,setBurguerOpen]=useState(false)
    
    const handleOpen = () =>{
      setOpen(true);
    }

    const handleClose = () =>{
      setOpen(false);
    }

    return (
      <header className="container contenedor-header">
          <div className="contenedor-logo">
            <img src={logo}/>
          </div>
        
          <nav  className={burguerOpen ? 'contenedor-nav open' : 'contenedor-nav'}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#mision">Mision</a></li>
                <li><a href="#marketplace">Market place</a></li>
                <li><a href="#tokenomics">Win token</a></li>
                <li><a href="#roadmap">Road map</a></li>

            </ul>
          </nav>
          <div className="contendor-language-wallet">
             
             <div className="contenedor-wallet btn-grad" onClick={()=>{
               handleOpen();
             }}>
               Conect your wallet
             </div>
            
             
             
             {open && <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            className="contenedor-modal"
                          >
                           <div style={modalStyle} className={classes.paper} >
                                
                                <div className="contenedor-header-modal p-2 " >
                                <h2 id="simple-modal-title" className="info-modal mt-2 titulo-connect-wallet titulo-modal">Connect Wallet</h2>
                                <p className="parrafo-modal">By connecting a wallet, you agree to Win Terms of Service and acknowledge that you have read and understand the WinCoin protocol disclaimer.</p>
                                
                                </div>
                              
                                  <h3 className="titulo-comming">Comming Soon </h3>
                                  <div className=" btn-grad-wallet contenedor-wallets">
                                  <p id="simple-modal-description" className="info-modal mt-4">Metamask</p>
                                  <img src={Metamask} alt="metamask"/>
                                  </div>
                                  <div className="   btn-grad-wallet contenedor-wallets">
                                  <p id="simple-modal-description" className="info-modal mt-4">Coin Base</p>
                                  <img src={CoinBase} alt="metamask"/>
                                  </div>
                                  <div className="btn-grad-wallet contenedor-wallets" >
                                  <p id="simple-modal-description" className="info-modal mt-4">Wallet Connect</p>
                                  <img src={WalletConnect} alt="metamask"/>
                                  </div>
                                

                            
      
                      </div>
                        </Modal>}
                       
          </div>
          <div className="contenedor-burguer-menu" onClick={()=>{
            burguerOpen ? setBurguerOpen(false) : setBurguerOpen(true)}}>
                          <span></span>
                          <span></span>
                          <span></span>
          </div>
      </header>

        
    )
}

export default Header;
