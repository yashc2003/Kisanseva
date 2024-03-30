import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './view/Home/Home';
import Micronutrients from './view/Product & Services/Micronutrients';
import WaterSoluble from './view/Product & Services/Water soluble';
import OrganicProduct from './view/Product & Services/Organic&product';
import CropSpecific from './view/Product & Services/Crop specific';
import Fertilizer from './view/Product & Services/Fertilizers';
import PlantProtection from './view/Product & Services/Plant Protection';
import Equipment from './view/Equipment/Equipment';
import Infrastracture from './view/About us/Infrastracture';
import Hydroponic from './view/About us/Hydroponic';
import Blogsvideo from './view/About us/Blogs&video';
import Contactus from './view/Contact us/Contactus';
import Login from './view/My Account/Log-in';
import Signin from './view/My Account/Sign-in';
import Sugercane from './view/Crops/Sugercane';
import Grapes from './view/Crops/Grapes';
import Coffee from'./view/Crops/Coffee';
import Cotton from'./view/Crops/Cotton';
import Wheat from './view/Crops/Wheat';
import Paddy from'./view/Crops/Paddy';
import Maize from'./view/Crops/Maize';
import Groundnut from'./view/Crops/Groundnut';
import Orange from './view/Crops/Orange';
import Citrus from './view/Crops/Citrus';
import Mango from'./view/Crops/Mango';
import Pomegranate from'./view/Crops/Pomegranate';
import Banana from './view/Crops/Banana';
import Papaya from'./view/Crops/Papaya';
import Watermelon from'./view/Crops/Watermelon';
import Cocoa from'./view/Crops/Cocoa';
import Onion from './view/Crops/Onion';
import Tomato from './view/Crops/Tomato';
import Potato from'./view/Crops/Potato';
import Cauliflower from'./view/Crops/Cauliflower';
import Chilli from './view/Crops/Chilli';
import Turmeric from'./view/Crops/Turmeric';
import Ginger from'./view/Crops/Ginger';
const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/micronutrients',
    element: <Micronutrients />
  },
  {
    path: '/watersoluble',
    element: <WaterSoluble />
  },
  {
    path: '/organicproduct',
    element: <OrganicProduct />
  },
  {
    path: '/cropspecific',
    element: <CropSpecific />
  },
  {
    path: '/fertilizer',
    element: <Fertilizer/>
  },
  {
    path: '/plantprotection',
    element: <PlantProtection />
  },
  {
    path: '/equipment',
    element: <Equipment />
  },
  {
    path: '/infrastracture',
    element: <Infrastracture />
  },
  {
    path: '/hydroponic',
    element: <Hydroponic/>
  },
  {
    path: '/blogsvideo',
    element: <Blogsvideo/>
  },
  {
    path: '/contactus',
    element: <Contactus />
  },
  {
    path: '/sugercane',
    element: <Sugercane />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/grapes',
    element: <Grapes />
  },
  {
    path: '/coffee',
    element: <Coffee />
  },
  {
    path: '/cotton',
    element: <Cotton/>
  },
  {
    path: '/wheat',
    element: <Wheat />
  },
  {
    path: '/paddy',
    element: <Paddy/>
  },
  {
    path: '/maize',
    element: <Maize />
  },
  {
    path: '/groundnut',
    element: <Groundnut/>
  },
  {
    path: '/orange',
    element: <Orange />
  },
  {
    path: '/citrus',
    element: <Citrus />
  },
  {
    path: '/mango',
    element: <Mango />
  },
  {
    path: '/pomegranate',
    element: <Pomegranate />
  },
  {
    path: '/banana',
    element: <Banana/>
  },
  {
    path: '/papaya',
    element: <Papaya />
  },
  {
    path: '/watermelon',
    element: <Watermelon/>
  },
  {
    path: '/cocoa',
    element: <Cocoa/>
  },
  {
    path: '/onion',
    element: <Onion/>
  },
  {
    path: '/tomato',
    element: <Tomato/>
  },
  {
    path: '/potato',
    element: <Potato />
  },
  {
    path: '/cauliflower',
    element: <Cauliflower/>
  },
  {
    path: '/chilli',
    element: <Chilli />
  },
  {
    path: '/turmeric',
    element: <Turmeric />
  },
  {
    path: '/ginger',
    element: <Ginger />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <RouterProvider router={router} />
  </>
);
