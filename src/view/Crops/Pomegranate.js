import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
import Product12 from "../../Componant/Crops Product/Product12";
import Footer from "../../Componant/Footer/Footer";
import Banner2 from "../../Componant/Banner/Banner2";



// ProductCard component
const ProductCard = (props) => {
  const { imgSrc, productName, description, packSize, moreButtonText } = props;

  return (
    <div>
   <Navbar/>
   <div class="bannerhed">
    <img class="sugercaneimg" src="https://media.gettyimages.com/id/1185374212/photo/pomegranates-cultivation-in-south-apulia.jpg?s=612x612&w=0&k=20&c=89cvT8TCxjeAxKG75zIEe7XeuV60gXzxgv9DNfIJ9oo=" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">POMEGRANATE</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>

   

   <Product12/>
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
        imgSrc="https://ariesagro.com/wp-content/uploads/2022/11/Group-1000005112.png"
        productName="Coffeemin"
        description={[
          'Potassium as K2O : 15%',
          'Zinc as Zn : 4%',
         ' Manganese as Mn : 6%',
          'Boron as B :1.5%',
          'Magnesium as Mg :2.5%',
          'Sulphur as S : 12%',
          'Copper as Cu :0.6%',
         ' Molybdenum as Mo :0.1%'
        ]}
        packSize="Pack Size:- 5 kg/ 10 kg"
        moreButtonText="REDE MORE"
        
      />

      {/* Repeat the above block for other products */}
    </div>
  );
};

export default App;
