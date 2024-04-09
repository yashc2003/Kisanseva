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

    <div className="mainbox">
      <div className="left-card">
        <h2 className="text-success ">{productName}</h2>
        <h3>PRODUCT</h3>
        <hr/>
        <p>Coffeemin is a blend of essential nutrients to supply balanced levels of minerals to coffee plantations.
             Coffeemin increases yield by supplying nutrients to overcome deficiencies at critical growth stages. 
             For the best coffee produce and meeting the desired nutrition needs</p>
        
        <h4 class="text-success mt-5">{packSize}</h4>
       
      </div>
      <div className="middle-card ps-4">
       <img className="productimg" src={imgSrc} alt=".." />
       <button>{moreButtonText}</button>
      </div>
      <div className="right-card">
        <h3>CONTENTS</h3>
        <hr/>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
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
