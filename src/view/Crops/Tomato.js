import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
import Product18 from "../../Componant/Crops Product/Product18";
import Footer from "../../Componant/Footer/Footer";
import Banner2 from "../../Componant/Banner/Banner2";



// ProductCard component
const ProductCard = (props) => {
  const { imgSrc, productName, description, packSize, moreButtonText } = props;

  return (
    <div>
   <Navbar/>
   <div class="bannerhed">
    <img class="sugercaneimg" src="https://media.gettyimages.com/id/98026003/photo/tomatoes.jpg?s=612x612&w=0&k=20&c=d5wExaxj68PSVNeWho3KF9PROq1T0v0WhFEv4WVyyKw=" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">TOMATO</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>

    <div className="mainbox">
      <div className="left-card">
        <h2 className="text-success ">{productName}</h2>
        <h3>PRODUCT</h3>
        <hr/>
        <p>Majorsol cotton supplies needed phosphorus and potash in balanced proportion along with secondary & micronutrients. 
            Enhances quality of lint and increases oil percentage in seed. Its application increases disease and pest resistance.</p>
        
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

   <Product18/>
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
        imgSrc="https://ariesagro.com/wp-content/uploads/2022/11/Majorsol_Cotton-1.png"
        productName="Majorsol Cotton"
        description={[
          'Manganese as Mn :1.0%',
          'Magnesium as Mg : 2.0%',
          'Zinc as Zn : 2.5%',
           'Sulphur as S : 8.0%',
          'Potassium as K2O :18.0%',
          'Phosphorus as P2O5 :12.0%',
          'Calcium as Ca : 2.0%',
          'Copper as Cu : 1.0%',
          'Boron as B :0.2%'
        ]}
        packSize="Pack Size:- 5 kg/ 10 kg"
        moreButtonText="REDE MORE"
        
      />

      {/* Repeat the above block for other products */}
    </div>
  );
};

export default App;
