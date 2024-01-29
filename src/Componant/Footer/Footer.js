import React from "react";
import './../../Componant/Footer/Footer.css'
import Companylogo from "./../assets/kpng1.png"
function Footer () {
    return (
      <div>
        <div class="container my-2">
        <footer class="text-center text-lg-start text-white ">
          <div class="container p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <img class="companylogo" src={Companylogo}/>
                  <p class="text-black">
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
      
                <hr class="w-100 clearfix d-md-none" />
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4  ">Our Product</h6>
                  <p>
                    <a class="text-black" href="/micronutrients">Micronutrients</a>
                  </p>
                  <p>
                    <a class="text-black" href="/plantprotection">Plant Protection</a>
                  </p>
                  <p>
                    <a class="text-black" href="/watersoluble">Water Soluble NPK</a>
                  </p>
                  <p>
                    <a class="text-black" href="/hydroponic">Hydroponics and Consultancy</a>
                  </p>
                </div>
      
                <hr class="w-100 clearfix d-md-none" />
      
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4  ">
                    Quick Links
                  </h6>
                  <p>
                    <a class="text-black" href="/home">Home</a>
                  </p>
                  
                  <p>
                    <a class="text-black" href="/blogsvideo">Blogs & videos</a>
                  </p>
                  <p>
                    <a class="text-black" href="..">News & Updates</a>
                  </p>
                  <p>
                    <a class="text-black" href="..">FAQs</a>
                  </p>
                </div>
      
            
                <hr class="w-100 clearfix d-md-none text-black" />
      
            
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4  ">Contact</h6>
                  <p class="text-black"><i class="fas fa-home mr-3"></i> KisanSeva limited, Nagpure, Maharastra</p>
                  <p class="text-black"><i class="fas fa-envelope  mr-3"></i> KisanSeva@gmail.com</p>
                  <p class="text-black"><i class="fas fa-phone  mr-3"></i> + 91 234 567 88</p>
                  <p class="text-black"><i class="fas fa-print mr-3"></i> + 91 234 567 89</p>
                </div>
              </div>
            </section>
      
            <hr class="my-3 text-black"/>
      
            <section class="p-3 pt-0">
              <div class="row d-flex align-items-center">
                <div class="col-md-7 col-lg-8 text-center text-md-start">
                  <div class="p-3 text-black">
                    © 2024 About KisanSeva Limited. All rights reserved. All of them | Privacy Policy
                    
                  </div>
                </div>
      
                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                
                  <a class="btn btn-outline-light btn-floating m-1 text-black" role="button">
                     <i class="fab fa-facebook-f"></i>
                    <img class="footerlogo" src="https://cdn-icons-png.flaticon.com/128/1409/1409943.png"/></a>
      
                  
                  <a class="btn btn-outline-light btn-floating m-1 text-black" role="button">
                     <i class="fab fa-twitter"></i>
                     <img class="footerlogo" src="https://cdn-icons-png.flaticon.com/128/1409/1409937.png"/></a>
      
                  
                  <a class="btn btn-outline-light btn-floating m-1 text-black" role="button">
                     <i class="fab fa-linkdin"></i>
                    <img class="footerlogo" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"/></a>
      
          
                  <a class="btn btn-outline-light btn-floating m-1 text-black" role="button">
                     <i class="fab fa-Yuotube"></i>
                    <img class="footerlogo" src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"/></a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
        </div>
      
    )
  }
  
  export default Footer