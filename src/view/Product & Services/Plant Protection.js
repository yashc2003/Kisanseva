import React from "react"
import "./../Product & Services/Plant protection.css"
import Navbar from './../../Componant/Navbar/Navbar';
import Footer from './../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Sproduct2 from "../../Componant/Crops Product/Sproduct2";
import Cardslider from '../../Componant/Product card slider/Card slider'
import Cardslider2 from '../../Componant/Product card slider/Card slider2'

 function PlantProtection()  {
    return(
        <div>
            <Navbar/>
           <Sproduct2/>
           <Cardslider/>
      <Cardslider2/>
            <Banner2/>
            <Footer/>
        </div>
    )
    
}
export default PlantProtection