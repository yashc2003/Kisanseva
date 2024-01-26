import React from "react";
import "./../../Componant/Banner/Banner2.css"
import Bannerimg from "./../assets/bannerlogo.png"
function Banner2() {
    return (
    <div class="banner2">
   <div class="banner2-text">
       <h1 class="banner2-text-h1">Subscribe to get information and latest news.</h1>
       <input class="banner2-text-input" type="location" placeholder="Enter email address" aria-label="email"/>
   </div>
   <button class="banner2-button">SUBSCRIBE</button>
   <div class="banner2-logo">
       <img class="banner2-img" src={Bannerimg} alt=""/>
   </div>
  </div>

)
}

export default Banner2