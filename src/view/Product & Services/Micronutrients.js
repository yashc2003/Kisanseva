import React from "react"
import "./../Product & Services/Micronutrients.css"
import Navbar from './../../Componant/Navbar/Navbar';
import Footer from './../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Sproduct4 from "../../Componant/Crops Product/Sproduct4";
import Cardslider from '../../Componant/Product card slider/Card slider'
import Cardslider2 from '../../Componant/Product card slider/Card slider2'

 function Micronutrients()  {
    return(
        <div>
            <Navbar/>
            
          <Sproduct4/>
          <Cardslider/>
      <Cardslider2/>
            <Banner2/>
            <Footer/>
        </div>
    )
    
}
export default Micronutrients