import React from 'react'
import "./../Home/Home.css"
import Navbar from "./../../Componant/Navbar/Navbar"
import Banner from "./../../Componant/Banner/Banner"
import Banner2 from "./../../Componant/Banner/Banner2"
import Footer from "./../../Componant/Footer/Footer"
import Imagecard from "./../../Componant/Image-card/Card"
function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Imagecard/>
      <Banner2/>
      <Footer/>
      </div>
    
  )
}

export default Home