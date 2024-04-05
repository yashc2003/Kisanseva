import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
import Product2 from "../../Componant/Crops Product/Product2";
import Footer from "../../Componant/Footer/Footer";
import Banner2 from "../../Componant/Banner/Banner2";



// ProductCard component
const ProductCard = (props) => {
  const { imgSrc, productName, description, packSize, moreButtonText } = props;

  return (
    <div>
   <Navbar/>
   <div class="bannerhed">
    <img class="sugercaneimg" src="https://d3nn873nee648n.cloudfront.net/900x600/14266/12-EZ525469.jpg" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">Grapes</h1>
        <p class="sub-heading">Better harvest better tomorrow</p>
    </div>

  </div>

    <div className="mainbox">
      <div className="left-card">
        <h2 className="text-success ">{productName}</h2>
        <h3>PRODUCT</h3>
        <hr/>
        <p>Specifically designed for higher yield of Grapes considering its micronutrients requirement</p>
        
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

   <Product2/>
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
        imgSrc="https://ariesagro.com/wp-content/uploads/2022/11/Canemin-product-1-1.png"
        productName="Grapemin"
        description={[
          'Iron as Fe = 3.5%',
          'Manganese as Mn = 6%',
          'Zinc as Zn = 4%',
          'Copper as Cu = 1%',
          'Boron as B = 1.5%',
         ' Potassium as K2O = 5%',
          'Sulphur as S = 12%'
        ]}
        packSize="Pack Size:- 5 kg/ 10 kg"
        moreButtonText="REDE MORE"
        
      />

      {/* Repeat the above block for other products */}
    </div>
  );
};

export default App;
