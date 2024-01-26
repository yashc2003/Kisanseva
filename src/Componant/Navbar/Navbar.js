import React from "react";
import "./../../Componant/Navbar/Navbar.css"
import search from "./../../Componant/assets/search-w.png"
import toogleicon from "./../../Componant/assets/day.png"
import logo from "./../../Componant/assets/kpng.png"



function Navbar() {
    return (
      <div className="navbar">
        <img src= {logo} alt="" className="logo"/>
      <ul>
        <li>crop</li>
        <li>product & services </li>
        <li>Deparmental help</li>
        <li>contact us</li>
      </ul>
      <div className="searchbox">
     <input type="text" placeholder="search"/>
     <img src={search} alt="" className="search"/>
      </div>
      
      <img src={toogleicon} alt="" className="toogle-icon"/>
        </div>
      
    )
  }
  
  export default Navbar