import React from "react";
import "./../../Componant/Navbar/Navbar.css"
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
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll --bs-scroll-height: 100px;">
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-black" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product & Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="..">Micronutrients</a></li>
            <li><a class="dropdown-item" href="..">Water Soluble NPK</a></li>
            <li><a class="dropdown-item" href="..">Organic & Bio Product</a></li>
            <li><a class="dropdown-item" href="..">Crop Specific</a></li>
            <li><a class="dropdown-item" href="..">Slow Release Fertilizers Pastilles</a></li>
            <li><a class="dropdown-item" href="..">Plant Protectoin</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-black ms-2" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Crops
          </a>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="..">Sugercane</a></li>
            <li><a class="dropdown-item" href="..">Grape</a></li>
            <li><a class="dropdown-item" href="..">Coffee</a></li>
            <li><a class="dropdown-item" href="..">Cotton</a></li>
            <li><a class="dropdown-item" href="..">Wheat</a></li>
            <li><a class="dropdown-item" href="..">Paddy</a></li>
            <li><a class="dropdown-item" href="..">Maize</a></li>
            <li><a class="dropdown-item" href="..">Groundnut</a></li>
            <li><a class="dropdown-item" href="..">Orange</a></li>
            <li><a class="dropdown-item" href="..">Citrus</a></li>
            <li><a class="dropdown-item" href="..">Mango</a></li>
            <li><a class="dropdown-item" href="..">Pomegranate</a></li>
            <li><a class="dropdown-item" href="..">Banana</a></li>
            <li><a class="dropdown-item" href="..">Papaya</a></li>
            <li><a class="dropdown-item" href="..">Watermelon</a></li>
            <li><a class="dropdown-item" href="..">Cocoa</a></li>
            <li><a class="dropdown-item" href="..">Onion</a></li>
            <li><a class="dropdown-item" href="..">Tomato</a></li>
            <li><a class="dropdown-item" href="..">Potato</a></li>
            <li><a class="dropdown-item" href="..">Cauliflower</a></li>
            <li><a class="dropdown-item" href="..">Chilli</a></li>
            <li><a class="dropdown-item" href="..">Turmeric</a></li>
            <li><a class="dropdown-item" href="..">Ginger</a></li>
           </ul>
       </li>
       <li class="nav-item">
          <a class="nav-link text-black ms-2" aria-disabled="true" href="..">Equipment</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-black ms-2" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul class="dropdown-menu text-black">
            <li><a class="dropdown-item" href="..">Infrastracture</a></li>
            <li><a class="dropdown-item" href="..">Hydroponic & Consultancy</a></li>
            <li><a class="dropdown-item" href="..">Blogs & Video</a></li>
          </ul>
        </li>  
    
        <li class="nav-item">
          <a class="nav-link text-black ms-2" aria-disabled="true" href="..">Contact us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
  }
  
  export default Navbar