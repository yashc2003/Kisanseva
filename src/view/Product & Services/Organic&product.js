import React from "react"
import "./../Product & Services/Organic&product.css"
import Navbar from './../../Componant/Navbar/Navbar';
import Footer from './../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Sproduct3 from "../../Componant/Crops Product/Sproduct3";
import Cardslider from '../../Componant/Product card slider/Card slider'
import Cardslider2 from '../../Componant/Product card slider/Card slider2'

 function OrganicProduct()  {
    return(
        <div>
            <Navbar/>
            <Sproduct3/>
            <Cardslider/>
      <Cardslider2/>
            <Banner2/>
            <Footer/>
        </div>
    )
    
}
export default OrganicProduct