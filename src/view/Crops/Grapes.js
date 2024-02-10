import React from "react"
import "./../Crops/Grapes.css"
import Navbar from "../../Componant/Navbar/Navbar";
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
        <p class="sub-heading">better harvest better tomorrow</p>
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


    <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2022/11/nito.jpg" alt=".."/>
        </div>
        <div class="middle-card1 ps-4">
            <h2 class="text-success mt-4">Nitrogen Deficiency</h2>
           <h3>Symptoms</h3>
           <ul>
            <li>Leaf become uniformly light green or yellow colour.</li>
           </ul>
           <h3>Affect</h3>
           <ul>
            <li>Overall reduction in growth.</li>
           </ul>
           <h3>Solution</h3>
           <ul>
            <li>Product</li>
            <p>Macrofert 20:20:20 5gm/lit</p>
            <li>Soil/Drip</li>
            <p>Plantex 20:20:20 5kg/acre</p>
            <li>Benefit</li>
            <p>Helps in vegetative growth, formation of amino acids</p>
           </ul>
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2022/11/MacroFert-1.svg" alt=".."/>
            <div class="productname">
                <h2>Microfert</h2>
                <button>REDE MORE</button>
            </div>

        </div>
    </div>





    <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2022/11/phos-10.jpg" alt=".."/>
        </div>
         <div class="middle-card1 ps-4">
            <h2 class="text-success mt-4">Phosphorous Deficiency</h2>
           <h3>Symptoms</h3>
           <ul>
            <li>The appearance of red dots on basal portion.</li>
           </ul>
           <h3>Affect</h3>
           <ul>
            <li>The appearance of red dots on basal portion.</li>
           </ul>
           <h3>Solution</h3>
           <ul>
            <li>Product</li>
            <p>Fertimax 12:61:00 5gm/lit</p>
            <li>Soil/Drip</li>
            <p>Plantex 12:61:00 5kg/acre</p>
            <li>Benefit</li>
            <p>Maintain longterm productivity</p>
           </ul>
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2022/11/fertimaxpk-1.png" alt=".."/>
            <div class="productname">
                <h2>Fertimax PK</h2>
                <button>REDE MORE</button>
            </div>

        </div>
    </div>




    <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2022/11/pot-1.jpg" alt=".."/>
        </div>
         <div class="middle-card1 ps-4">
            <h2 class="text-success mt-2">Potassium Deficiency</h2>
           <h3>Symptoms</h3>
           <ul>
            <li>Colour fading from leaf margins,leaf margins becomes necrotic and curling occurs.</li>
           </ul>
           <h3>Affect</h3>
           <ul>
            <li>Plant growth,root devslopment and fruit development are usually reduced.</li>
           </ul>
           <h3>Solution</h3>
           <ul>
            <li>Product</li>
            <p>Fertimax13:00:45( 5-10gm/lit)</p>
            <li>Soil/Drip</li>
            <p>Plantex 13:00:45 3kg/acre(drip)</p>
            <li>Benefit</li>
            <p>Ensures good,strong fruit set and increase sugar content in grape</p>
           </ul>
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2022/11/fertimaxpk-1.png" alt=".."/>
            <div class="productname">
                <h2>Fertimax</h2>
                <button>REDE MORE</button>
            </div>

        </div>
    </div>



    <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2022/11/cal-7.jpg" alt=".."/>
        </div>
         <div class="middle-card1 ps-4">
            <h2 class="text-success mt-3">Calcium Deficiency</h2>
           <h3>Symptoms</h3>
           <ul>
            <li>Blossom end rot of grapes.</li>
           </ul>
           <h3>Affect</h3>
           <ul>
            <li>Skin becomes loose and bursts open.</li>
           </ul>
           <h3>Solution</h3>
           <ul>
            <li>Product</li>
            <p>Aquacal-3-4ml/lit, combical-3-5gm/lit, horticab 2-3ml/lit</p>
            <li>Soil/Drip</li>
            <p>combical 3 kg/acre or Plantex CN 3kg/acre</p>
            <li>Benefit</li>
            <p>Boosts new leaf and bud growth,ensures strong skin and minimise fruit disorder and diseases</p>
           </ul>
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2022/11/Aquacal-2-1-1.png" alt=".."/>
            <div class="productname">
                <h2>Aquacal</h2>
                <button>REDE MORE</button>
            </div>

        </div>
    </div>




    <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2022/11/sul-10.jpg" alt=".."/>
        </div>
         <div class="middle-card1 ps-4">
            <h2 class="text-success mt-3">Sulphur Deficiency</h2>
           <h3>Symptoms</h3>
           <ul>
            <li>Redding of young leaves and red dots near the edges of younger leaves.</li>
           </ul>
           <h3>Affect</h3>
           <ul>
            <li>Reduced growth,small and loose cluster due to reduced fruit set.</li>
           </ul>
           <h3>Solution</h3>
           <ul>
            <li>Product</li>
            <p>Primasulf 3-4ml/lit, fertisol 5gm/lit</p>
            <li>Soil/Drip</li>
            <p>ferromag 3kg/1acre or fertisol 3kg/1acre</p>
            <li>Benefit</li>
            <p>Maximise photosynthetic activity,minimises diseases</p>
           </ul>
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2022/11/Prima-sulf-1-1.png" alt=".."/>
            <div class="productname">
                <h2>Primasulf</h2>
                <button>REDE MORE</button>
            </div>

        </div>
    </div>




    <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2022/11/mag-11.jpg" alt=".."/>
        </div>
         <div class="middle-card1 ps-4">
            <h2 class="text-success ">Magnesium Deficiency</h2>
           <h3>Symptoms</h3>
           <ul>
            <li>Bright yellow wedge shaped extends inward between the veins on older leaves.</li>
           </ul>
           <h3>Affect</h3>
           <ul>
            <li>When severe,necrosis extends inwards from the leaf margin and fruit cluster and stem necrosis.</li>
           </ul>
           <h3>Solution</h3>
           <ul>
            <li>Product</li>
            <p>Magmix 4-5gm/lit, zinc mag 3-5ml/lit</p>
            <li>Soil/Drip</li>
            <p>--</p>
            <li>Benefit</li>
            <p>Maximise photosynthetic activity,increase growth and berry development</p>
           </ul>
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2022/11/zincmag-1-300x300.png" alt=".."/>
            <div class="productname">
                <h2>Zincmag</h2>
                <button>REDE MORE</button>
            </div>
         </div>
       </div>
         
       <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2022/11/boron-10.jpg" alt=".."/>
        </div>
         <div class="middle-card1 ps-4">
            <h2 class="text-success mt-4">Boron Deficiency</h2>
           <h3>Symptoms</h3>
           <ul>
            <li>Shoot tip death and short internodes resulting in shoots with zigzag appearance.</li>
           </ul>
           <h3>Affect</h3>
           <ul>
            <li>Fruit set is often poor and breaking of berry.</li>
           </ul>
           <h3>Solution</h3>
           <ul>
            <li>Product</li>
            <p>Boron 20 1gm/lit, Potabor super-2-3gm/lit</p>
            <li>Soil/Drip</li>
            <p>Boron -20 1 kg/acre</p>
            <li>Benefit</li>
            <p>Ensures good shoot growth and strong fruit set,improve berry shape and size</p>
           </ul>
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2022/11/potabor-new-300x300.png" alt=".."/>
            <div class="productname">
                <h2>Potabor super</h2>
                <button>REDE MORE</button>
            </div>

        </div>
    </div>

    <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2022/11/zinc-14.jpg" alt=".."/>
        </div>
         <div class="middle-card1 ps-4">
            <h2 class="text-success mt-3">Zinc Deficiency</h2>
           <h3>Symptoms</h3>
           <ul>
            <li>Short internodes,resulting in shoot with a zigzag appearance.</li>
           </ul>
           <h3>Affect</h3>
           <ul>
            <li>Small and poorly developed branches.</li>
           </ul>
           <h3>Solution</h3>
           <ul>
            <li>Product</li>
            <p>Chelamin plus1.5gm/lit or chelamin gold 0.5gm/lit</p>
            <li>Soil/Drip</li>
            <p>Chelamin gold 0.5kg/acre</p>
            <li>Benefit</li>
            <p>Increases sucrose content in grapes and formation of healthy berries.</p>
           </ul>
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2022/11/chelamin-plus-50g-300x300-1.png" alt=".."/>
            <div class="productname">
                <h2>Chelamin plus</h2>
                <button>REDE MORE</button>
            </div>

        </div>
    </div>


    <div class="mainbox1">
        <div class="left-card1">
            <img class="productimg1" src="https://ariesagro.com/wp-content/uploads/2022/11/sul-10.jpg" alt=".."/>
        </div>
         <div class="middle-card1 ps-4">
            <h2 class="text-success mt-4">Iron Deficiency</h2>
           <h3>Symptoms</h3>
           <ul>
            <li>Young leaves show interveinal chlorosis.</li>
           </ul>
           <h3>Affect</h3>
           <ul>
            <li>Leaves are lightly to be very pale with necrotic blotches.</li>
           </ul>
           <h3>Solution</h3>
           <ul>
            <li>Product</li>
            <p>Chelafer1.5gm/lit, agrofer-1.5gm/lit</p>
            <li>Soil/Drip</li>
            <p>Ferromag 5kg/acre, Ferromix-5kg/acre</p>
            <li>Benefit</li>
            <p>Strengthening leaf development and vine productivity</p>
           </ul>
        </div>
        <div class="right-card1">
            <img class="productimg1-1" src="https://ariesagro.com/wp-content/uploads/2022/11/chelafer-500gm-2-300x300.png" alt=".."/>
            <div class="productname">
                <h2>Chelafer</h2>
                <button>REDE MORE</button>
            </div>

        </div>
    </div>
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
