import React from "react"
import "./../Product & Services/Fertilizer.css"
import Navbar from './../../Componant/Navbar/Navbar';
import Footer from './../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Sproduct5 from "../../Componant/Crops Product/Sproduct5";
import Cardslider from '../../Componant/Product card slider/Card slider'
import Cardslider2 from '../../Componant/Product card slider/Card slider2'

 function Fertilizer()  {
    return(
        <div>
            <Navbar/>
           <Sproduct5/>
           <Cardslider/>
          <Cardslider2/>
            <Banner2/>
            <Footer/>
        </div>
    )
    
}
export default Fertilizer