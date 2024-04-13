import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
import Product14 from "../../Componant/Crops Product/Product14";
import Footer from "../../Componant/Footer/Footer";
import Banner2 from "../../Componant/Banner/Banner2";



// ProductCard component
const ProductCard = (props) => {
  const { imgSrc, productName, description, packSize, moreButtonText } = props;

  return (
    <div>
   <Navbar/>
   <div class="bannerhed">
    <img class="sugercaneimg" src="https://media.gettyimages.com/id/521289762/photo/papaya-fruit.jpg?s=612x612&w=0&k=20&c=90PKGTlPHcJ99w9-_oOOe_X_PtrnUu95yeLbQmAvXSw=" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">PAPAYA</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>

    

   <Product14/>
    <Banner2/>
    <Footer/>
    </div>
  );
};

// Main component
const App = () => {
  return (
    <div>
      {/* Render product cards using ProductCard component */}
      <ProductCard
        imgSrc="https://ariesagro.com/wp-content/uploads/2022/12/Majorsol_paddy-1.png"
        productName="Majorsol Paddy"
        description={[
          'Zinc as Zn :10.0%',
          'Sulphur as S : 8.0%',
          'Potassium as K2O :13.0%',
          'Phosphorus as P2O5 : 20.0%',
          'Boron as B : 0.5%',
          'Magnesium Mg : 2.0%'
        ]}
        packSize="Pack Size:- 5 kg/ 10 kg"
        moreButtonText="REDE MORE"
        
      />

      {/* Repeat the above block for other products */}
    </div>
  );
};

export default App;
