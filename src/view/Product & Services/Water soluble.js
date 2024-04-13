import React from "react"
import "./../Product & Services/Water soluble.css"
import Navbar from './../../Componant/Navbar/Navbar';
import Footer from './../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Sproduct1 from "../../Componant/Crops Product/Sproduct1";
import Cardslider from '../../Componant/Product card slider/Card slider'
import Cardslider2 from '../../Componant/Product card slider/Card slider2'

 function WaterSoluble()  {
    return(
        <div>
            <Navbar/>
           <Sproduct1/>
           <Cardslider/>
      <Cardslider2/>
            <Banner2/>    
            <Footer/>
        </div>
    )
    
}
export default WaterSoluble