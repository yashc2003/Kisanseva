import React from "react";
import "./../../Componant/Navbar/Navbar.css"

import Translater from "./../../Componant/Google translater/TanslaterComponent"
import Navbarimag from "./../../Componant/assets/kpng1.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img className="navbar-img" src={Navbarimag} alt=".." />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 text-white">
            <li className="nav-item text-white">
              <a className="nav-link text-black ms-2 me-2 text-bold" aria-disabled="true" href="..">Crops</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-black" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product & Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/micronutrients">Micronutrients</a></li>
                <li><a className="dropdown-item" href="/watersoluble">Water Soluble NPK</a></li>
                <li><a className="dropdown-item" href="/organicproduct">Organic & Bio Product</a></li>
                <li><a className="dropdown-item" href="/cropspecific">Crop Specific</a></li>
                <li><a className="dropdown-item" href="/fertilizer">Slow Release Fertilizers Pastilles</a></li>
                <li><a className="dropdown-item" href="/plantprotection">Plant Protection</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black ms-2" aria-disabled="true" href="/equipment">Equipment</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-black ms-2" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About us
              </a>
              <ul className="dropdown-menu text-black">
                <li><a className="dropdown-item" href="/infrastracture">Infrastructure</a></li>
                <li><a className="dropdown-item" href="/hydroponic">Hydroponic & Consultancy</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black ms-2" aria-disabled="true" href="/contactus">Contact us</a>
            </li>
          </ul>
          <Translater />
          <div>
            <a href="/login">
              <button className="btn6">Login </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
