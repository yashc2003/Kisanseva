import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
import Product22 from "../../Componant/Crops Product/Product22";
import Footer from "../../Componant/Footer/Footer";
import Banner2 from "../../Componant/Banner/Banner2";



// ProductCard component
const ProductCard = (props) => {
  const { imgSrc, productName, description, packSize, moreButtonText } = props;

  return (
    <div>
   <Navbar/>
   <div class="bannerhed">
    <img class="sugercaneimg" src="https://media.gettyimages.com/id/597062235/photo/fresh-curcuma-and-powder-on-wood.jpg?s=612x612&w=0&k=20&c=_9BYuNdnNzHV-fglmkN23e6Hr1ghf3LLAhnzCJ2tpsc=" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">TURMERIC</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>

    <div className="mainbox">
      <div className="left-card">
        <h2 className="text-success ">{productName}</h2>
        <h3>PRODUCT</h3>
        <hr/>
        <p>Majorsol Paddy is a high performance soil application fertilizer. Helps to increase disease resistance power in crop</p>
        
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

   <Product22/>
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
