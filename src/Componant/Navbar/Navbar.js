import React from "react";
import "./../../Componant/Navbar/Navbar.css"
import search from "./../../Componant/assets/search-w.png"
import toogleicon from "./../../Componant/assets/day.png"
import logo from "./../../Componant/assets/k2.png"



function Navbar() {
    return (
      <div className="navbar">
        <img src= {logo} alt="" className="logo"/>
      <ul>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product & Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Organic And Bio Product</a></li>
            <li><a class="dropdown-item" href="#">Crop Specification</a></li>
            <li><a class="dropdown-item" href="#">Other Product</a></li>
          </ul>
        </li> <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Crops
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Cottan</a></li>
            <li><a class="dropdown-item" href="#">Wheat</a></li>
            <li><a class="dropdown-item" href="#">Soyabin</a></li>
          </ul>
        </li> <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Company Owerview</a></li>
            <li><a class="dropdown-item" href="#">History</a></li>
            <li><a class="dropdown-item" href="#">Milestone</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact 
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Watsapp</a></li>
            <li><a class="dropdown-item" href="#">Mail</a></li>
            <li><a class="dropdown-item" href="#">contact</a></li>
          </ul>
        </li>
       
      </ul>
      <div className="searchbox">
     <input type="text" placeholder="search"/>
     <img src={search} alt="" className="search"/>
      </div>
      
        </div>
      
    )
  }
  
  export default Navbar