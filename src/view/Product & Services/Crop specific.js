import React from "react"
import "./../Product & Services/Crop specific.css"
import Navbar from './../../Componant/Navbar/Navbar';
import Footer from './../../Componant/Footer/Footer';
import Banner2 from "../../Componant/Banner/Banner2";
import Sproduct6 from "../../Componant/Crops Product/Sproduct6";
import Cardslider from '../../Componant/Product card slider/Card slider'
import Cardslider2 from '../../Componant/Product card slider/Card slider2'

 function CropSpecific()  {
    return(
        <div>
            <Navbar/>
           <Sproduct6/>
           <Cardslider/>
          <Cardslider2/>
            <Banner2/>
            <Footer/>
        </div>
    )
    
}
export default CropSpecific