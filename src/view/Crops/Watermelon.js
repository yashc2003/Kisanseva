import React from "react"
import "./../Crops/Sugercane.css"
import Navbar from '../../Componant/Navbar/Navbar';
import Footer from '../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Product15 from "../../Componant/Crops Product/Product15";

 function Sugercane()  {
    return(
        <div>
            <Navbar/>
            <div class="bannerhed">
    <img class="sugercaneimg" src="https://media.gettyimages.com/id/1399390336/photo/high-angle-view-of-watermelon-on-wooden-table.jpg?s=612x612&w=0&k=20&c=cC52fNjA9v8IOLEDPHEY3nlqPodBbeKft0Hhxg9K-Og=" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">WATERMELON</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>
            <Product15/>
            <Banner2/>
            <Footer/>
        </div>
    )
    
}
export default Sugercane