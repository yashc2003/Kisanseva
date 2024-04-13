import React from "react"
import "./../Crops/Sugercane.css"
import Navbar from '../../Componant/Navbar/Navbar';
import Footer from '../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Product23 from "../../Componant/Crops Product/Product23";

 function Sugercane()  {
    return(
        <div>
            <Navbar/>
            <div class="bannerhed">
    <img class="sugercaneimg" src="https://media.gettyimages.com/id/128112512/photo/pile-of-ginger-root-on-green-placemat.jpg?s=612x612&w=0&k=20&c=r7sOP1xBe-eo3hgaWl1VhaUv1b4ypM7GAqYGvl_qXOo=" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">GINGER</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>
            <Product23/>
            <Banner2/>
            <Footer/>
        </div>
    )
    
}
export default Sugercane