import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Animation easing
            once: false  // Only animate once
        });
    }, [])
    return (
        <div className="mt-10 container mx-auto "  data-aos="fade-up">
          <footer className="footer footer-center p-10 bg-black text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="text-white">About us</a>
    <a className="link link-hover text-white">Contact</a>
 
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://twitter.com/'><FaXTwitter className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.instagram.com/'><FaInstagram  className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://web.facebook.com/'><FaFacebookF className="fill-current w-[24px] h-[24px] text-white" /></a>
      
      
      
    </div>
  </nav> 
  <aside>
    <p className='text-white'>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;