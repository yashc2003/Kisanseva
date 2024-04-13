import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
import Product16 from "../../Componant/Crops Product/Product16";
import Footer from "../../Componant/Footer/Footer";
import Banner2 from "../../Componant/Banner/Banner2";



// ProductCard component
const ProductCard = (props) => {
  const { imgSrc, productName, description, packSize, moreButtonText } = props;

  return (
    <div>
   <Navbar/>
   <div class="bannerhed">
    <img class="sugercaneimg" src="https://media.gettyimages.com/id/1372722029/photo/cuernavaca-colombia-cacao-fruits-are-seen-growing-on-cacao-trees-on-a-traditional-cacao-farm.jpg?s=612x612&w=0&k=20&c=glj1bqLUKY4MTl8_g8VJnff_Q9FFXUw-QSOlIvlFRE8=" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">COCOA</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>

   

   <Product16/>
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
        imgSrc="https://ariesagro.com/wp-content/uploads/2022/12/Group-1000005106.png"
        productName="Majorsol Wheat"
        description={[
          'Phosphorus as P2O5 :15%',
         'Potassium as K2O :15%',
          'Manganese as Mn :15%',
          'Zinc as Zn :2.5%',
          'Sulphur as S :12%'
        ]}
        packSize="Pack Size:- 5 kg/ 10 kg"
        moreButtonText="REDE MORE"
        
      />

      {/* Repeat the above block for other products */}
    </div>
  );
};

export default App;
