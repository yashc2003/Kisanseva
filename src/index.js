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
import Sugercane from './view/Crops/Sugercane';
import Grapes from './view/Crops/Grapes';
import Coffee from'./view/Crops/Coffee';
import Cotton from'./view/Crops/Cotton';
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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <RouterProvider router={router} />
  </>
);
