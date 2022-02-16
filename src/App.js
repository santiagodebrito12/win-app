import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Routes} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage';
import MarketPlaceApp from './MarketplaceApp/MarketPlaceApp';

function App() {
  return (
    <BrowserRouter>
     
     
      <Routes>
      
       <Route exact path="/" element={<LandingPage/>}/>
       <Route exact path="/marketplace" element={<MarketPlaceApp/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
