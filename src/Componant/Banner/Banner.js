import React from "react";
import "./../../Componant/Banner/Banner.css"
function Banner() {
    return (

        <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active ">
          <div class="card-slider">
              <img class="card-slider-img"src="https://www.bestagrolife.com/img/Pioneering-The-Future-With-Innovative-Research.jpg" alt=".."/>
            <div class="card-text1">
               <h1 class="h11">Pioneering The Future
                      With Innovative Research</h1>
                  <p class="paragraph">We are an innovative and forward-thinking company that seeks to play a crucial role in modernizing 
                     agriculture while also prioritizing the well-being of people and the planet.</p>
            </div>
          </div>
          </div>
          <div class="carousel-item">
          <div>
            <div class="card-slider">
               <img class="card-slider-img"src="https://www.bestagrolife.com/img/iStock-1061166708-min.webp" alt=".."/>
              <div class="card-text1">
               <h1 class="h11">Farmer Friendly Solutions</h1>
                <p class="paragraph">We strive to optimize opportunities essential to each farmer in their support by offering cost-effective yield-enhancing products to make the most of every acre.
                   Our focus is on newer chemistry to facilitate an edge to drive synergy in the way agriculture is done. 
                </p>
              </div>
             </div>
           </div>
          </div>
          <div class="carousel-item">
          <div>
            <div class="card-slider">
              <img class="card-slider-img"src="https://www.bestagrolife.com/img/iStock-543212762-min.webp" alt=".."/>
             <div class="card-text1">
               <h1 class="h11">Let's Come Together
                               For A Greener Future!</h1>
                  <p class="paragraph">We welcome your inquiries about the company and its products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

)
}

export default Banner






