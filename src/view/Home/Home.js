import React from 'react'
import "./../Home/Home.css"
import Navbar from "./../../Componant/Navbar/Navbar"
import Banner from "./../../Componant/Banner/Banner"
import Banner2 from "./../../Componant/Banner/Banner2"
import Cardslider from '../../Componant/Product card slider/Card slider'
import Cardslider2 from '../../Componant/Product card slider/Card slider2'
import Footer from "./../../Componant/Footer/Footer"
import Imagecard from "./../../Componant/Image-card/Card"
import Preloader from '../../Componant/preloader/preloader'
import WeatherApp from './../../Componant/Weather app/WeatherApp'
import Video from './../../Componant/assets/1.mp4'
function Home() {
  console.log(process.env.REACT_APP_APPWRITE_URL)
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Preloader/>
      <WeatherApp/>
      <Imagecard/>
      <div>
      <div class="VidClass">
    <video src={Video} type="video/mp4" autoPlay loop muted controls class="video col-lg-8 col-sm-8 col-md-8 col-xs-8 mt-5 mb-5 ms-5" >
      
    </video>
  </div>
  </div>
      <Cardslider/>
      <Cardslider2/>
      <Banner2/>
      <Footer/>
      </div>
    
  )
}

export default Home