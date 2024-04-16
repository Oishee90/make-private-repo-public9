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
         <div className="mt-14" data-aos="fade-up">
           <h1 className="text-center mx-auto font-raleway text-[#135D66] font-bold text-5xl">Explore Our State</h1> 
           <p className="font-raleway mt-5 text-gray-600 text-lg mx-auto pr-10 pl-10 text-center">From spacious single-family homes to cozy townhouses, modern apartments, student housing, vacation rentals, and luxury condos, our diverse collection has something for everyone.</p>
        </div>
           <Estate></Estate>
            
        </div>
    );
};

export default Home;