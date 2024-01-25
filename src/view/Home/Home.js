import React from 'react'
import "./../Home/Home.css"
import Navbar from "./../../Componant/Navbar/Navbar"
import Footer from "./../../Componant/Footer/Footer"
import Imagecard from "./../../Componant/Image-card/Card"
function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Home Page</h1>
      <Imagecard/>
      <Footer/>
      </div>
    
  )
}

export default Home