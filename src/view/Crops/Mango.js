import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
import Product11 from "../../Componant/Crops Product/Product11";
import Footer from "../../Componant/Footer/Footer";
import Banner2 from "../../Componant/Banner/Banner2";



// ProductCard component
const ProductCard = (props) => {
  const { imgSrc, productName, description, packSize, moreButtonText } = props;

  return (
    <div>
   <Navbar/>
   <div class="bannerhed">
    <img class="sugercaneimg" src="https://th.bing.com/th/id/OIP.dNvsJCPyeQK1Iz62Z752wQHaFj?rs=1&pid=ImgDetMain" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">Mango</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>

  </div>

   

   <Product11/>
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
