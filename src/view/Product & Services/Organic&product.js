import React from "react"
import "./../Product & Services/Organic&product.css"
import Navbar from './../../Componant/Navbar/Navbar';
import Footer from './../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Sproduct3 from "../../Componant/Crops Product/Sproduct3";

 function OrganicProduct()  {
    return(
        <div>
            <Navbar/>
            <Sproduct3/>
            <Banner2/>
            <Footer/>
        </div>
    )
    
}
export default OrganicProduct