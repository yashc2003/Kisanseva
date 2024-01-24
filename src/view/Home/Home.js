import React from 'react'
import "./../Home/Home.css"
import Navbar from "./../../Componant/Navbar/Navbar"
import Footer from "./../../Componant/Footer/Footer"
import Banner from '../../Componant/Banner/Banner'
import Card from '../../Componant/Card Gallery/card'
function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <h1>Home Page</h1>
      <Card/>
      <Footer/>
      </div>
    
  )
}

export default Home