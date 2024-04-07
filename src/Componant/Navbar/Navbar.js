import React from "react";
import "./../../Componant/Navbar/Navbar.css"
import Login from "./../../Componant/assets/login.png";
import Translater from "./../../Componant/Google translater/TanslaterComponent"
import Navbarimag from "./../../Componant/assets/kpng1.png";


function Navbar() {
    return (
      
  <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
       <img class="navbar-img" src={Navbarimag} alt=".."/>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 ">
        <li class="nav-item">
          <a class="nav-link text-black ms-2 me-2 " aria-disabled="true" href="..">Crops</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-black" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product & Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/micronutrients">Micronutrients</a></li>
            <li><a class="dropdown-item" href="/watersoluble">Water Soluble NPK</a></li>
            <li><a class="dropdown-item" href="/organicproduct">Organic & Bio Product</a></li>
            <li><a class="dropdown-item" href="/cropspecific">Crop Specific</a></li>
            <li><a class="dropdown-item" href="/fertilizer">Slow Release Fertilizers Pastilles</a></li>
            <li><a class="dropdown-item" href="/plantprotection">Plant Protectoin</a></li>
          </ul>
        </li>
        
       <li class="nav-item">
          <a class="nav-link text-black ms-2" aria-disabled="true" href="/equipment">Equipment</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-black ms-2" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul class="dropdown-menu text-black">
            <li><a class="dropdown-item" href="/infrastracture">Infrastracture</a></li>
            <li><a class="dropdown-item" href="/hydroponic">Hydroponic & Consultancy</a></li>
            <li><a class="dropdown-item" href="/blogsvideo">Blogs & Video</a></li>
          </ul>
        </li>  
    
        <li class="nav-item">
          <a class="nav-link text-black ms-2" aria-disabled="true" href="/contactus">Contact us</a>
        </li>

       
      </ul>
      <Translater/>
     <a href="/login"><img class="login-img" src={Login}/></a>
    </div>
  </div>
</nav>
    )
  }
  
  export default Navbar;