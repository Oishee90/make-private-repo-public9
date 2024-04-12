import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> 
      <FirebaseProvider>
      <RouterProvider router={router}></RouterProvider>
      </FirebaseProvider>
    
      </HelmetProvider>
 
  
 </React.StrictMode>,
)
