import React from "react"
import "./../About us/Infrastracture.css"
import Navbar from './../../Componant/Navbar/Navbar';
import Footer from './../../Componant/Footer/Footer';

 function Infrastracture()  {
    return(
        <div>
            <Navbar/>

            <div class="bannerhed">
    <img class="sugercaneimg" src="https://cdn2.hubspot.net/hubfs/4145950/Axis_Group_February2018/Images/shutterstock_399854311.jpg" alt=".."/>
    <div class="text-containt">
        <h1 class="heading">Infrastracture</h1>
        <p class="sub-heading">better harvest better tomorrow</p>
    </div>
    </div>
            <div>

            <div class="mainbox1">
        <div class="left-card1">
        <h2 class="text-success mt-4">MARKETING NETWORK</h2>
           <li>We have very wide distribution network across the country. We operate along a distribution channel comprising of about 6,400 + distributors and a direct retail touch point of more than 86,000 + dealers.
             Our reach extends to most of the major fertilizer consuming districts of the country. Our retail outlets are spread over 27 states in India..</li>
           
        </div>
        <div class="middle-card1 ps-4">
        <img class="img1" src="https://ariesagro.com/wp-content/uploads/2022/11/Group-1000004895-1-1.png" alt=".."/>
           
        </div>
            </div>

            <div class="mainbox1">
        <div class="left-card1">
        <h2 class="text-success mt-4">DISTRIBUTION REACH</h2>
           <li>Registered Distributors & Dealers About 6,400 +</li>
<li>Number of Dealers counters serviced Over 86,000 +</li>
<li>Number of villages covered (assuming 2 to 3 villages/dealer) 1,99,000.</li>
           
        </div>
        <div class="middle-card1 ps-4">
        <img class="img1" src="https://ariesagro.com/wp-content/uploads/2022/11/Group-1000005014-1.png" alt=".."/>
           
        </div>
            </div>

            <div class="mainbox1">
        <div class="left-card1">
        <h2 class="text-success mt-4">MANUFACTURING</h2>
          <li>Our plants are presently located at Mumbai, Hyderabad, Chattral and Lucknow with total production capacity of 95,400 TPA on single shift basis.</li>
          <li>We are proposing to add additional plant and machinery at existing unit in Hyderabad & Chhatral and set up new units at Raipur and Vijayawada to manufacture micronutrients.</li>
           
        </div>
        <div class="middle-card1 ps-4">
        <img class="img1" src="https://ariesagro.com/wp-content/uploads/2022/11/Group-1000004895-1-1.png" alt=".."/>
           
        </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
    
}
export default Infrastracture