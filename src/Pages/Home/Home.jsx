import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Estate from "./Estate";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Animation easing
            once: false  // Only animate once
        });
    }, [])
    
    return (
        <div className="container-mx-auto">
 <Helmet><title>SkyVista-Home</title></Helmet>
         <Banner></Banner>
         
           <Estate></Estate>
            
        </div>
    );
};

export default Home;