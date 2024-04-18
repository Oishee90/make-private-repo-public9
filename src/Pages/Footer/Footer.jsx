

import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="mt-10 container mx-auto "  >
          

<footer className="bg-gray-300 dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <div className="border-b-2 w-[81px] mt-2 border-indigo-500 ... mb-6"></div>
            <ul className="text-black dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link to={"/about"} className=" hover:underline">About</Link>
                </li>
              
              
                <li className="mb-4">
                    <Link to={"/blog"} className="hover:underline">Blog</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <div className="border-b-2 w-[81px] mt-2 border-indigo-500 ... mb-6"></div>
            <ul className="text-black dark:text-gray-400 font-medium">
                
                <li className="mb-4">
                    <a  href='https://twitter.com/' className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a  href='https://web.facebook.com/' className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <Link to={"/contac"} className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <div className="border-b-2 w-[81px] mt-2 border-indigo-500 ... mb-6"></div>
            <ul className="text-black dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className=" text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <div className="border-b-2 w-[81px] mt-2 border-indigo-500 ... mb-6"></div>
            <ul className="text-black dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <footer className="footer footer-center p-10 bg-gray-300 text-base-content rounded">
  
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://twitter.com/'><FaXTwitter className="fill-current font-extrabold w-[24px] h-[24px] text-black" /></a>
      <a href='https://www.instagram.com/'><FaInstagram  className="fill-current font-extrabold w-[24px] h-[24px] text-black" /></a>
      <a href='https://web.facebook.com/'><FaFacebookF className="fill-current w-[24px] h-[24px] text-black" /></a>
      
      
      
    </div>
  </nav> 
  <aside>
    <p className='text-black font-bold'>Copyright © 2024 - All right reserved by SkyVista</p>
  </aside>
</footer>
    </div>
</footer>

          {/* <footer className="footer footer-center p-10 bg-black text-base-content rounded">
  
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href='https://twitter.com/'><FaXTwitter className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://www.instagram.com/'><FaInstagram  className="fill-current w-[24px] h-[24px] text-white" /></a>
      <a href='https://web.facebook.com/'><FaFacebookF className="fill-current w-[24px] h-[24px] text-white" /></a>
      
      
      
    </div>
  </nav> 
  <aside>
    <p className='text-white'>Copyright © 2024 - All right reserved by SkyVista</p>
  </aside>
</footer> */}
        </div>
    );
};

export default Footer;