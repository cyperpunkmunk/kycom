
import './App.css';
import React from 'react';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink } from 'react-router-dom';
import Home from "./Home/home.js";
import NftPage from './NFT/NFT.js';
import Wav from './Wav/Wav.js';
import Etc from './Etc/etc';


const App  = () => {
  
  
  const closeNav = () => {
    let cb = document.getElementById("active");
    if(cb.checked){
      cb.checked = false;
    }
  }
  
  
  return(
    <>

      {/** mobile nav */}
          
      <input className="menu-btn" id="active" type="checkbox"  ></input>
          
          
        <div className="wrapper">
          <ul className = "menu">
            <NavLink onClick={closeNav} to="/" end> <li className="menuItem"> Home </li> </NavLink>
            <NavLink onClick={closeNav} to="nftPage" end> <li className="menuItem"> NFT </li> </NavLink>
            <NavLink onClick={closeNav} to="wav" end> <li className="menuItem"> .Wav </li> </NavLink>
            <NavLink onClick={closeNav} to="etc" end> <li className="menuItem"> Etc </li> </NavLink>
          </ul>
        </div>
    

      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="nftPage" element={<NftPage />} />
        <Route path="wav" element={<Wav />} />
        <Route path="etc" element={<Etc />} />
      </SlideRoutes>
    
    </>
  );
};

export default App;




