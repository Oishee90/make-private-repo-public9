import about from "../../assets/blake-wisz-GFrBMipOd_E-unsplash.jpg"
import { CiCircleCheck } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

import { FaBuildingWheat } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { FaSchool } from "react-icons/fa6";
const About = () => {
    
    return (
        <div className="container mx-auto  mt-10 ">
          <Helmet><title>SkyVista-About</title></Helmet>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10  mt-6 mb-20 items-start container mx-auto">
  <div className="rounded-2xl relative h-full ">

      <img className=" items-center rounded-xl h-full  mt-10 mx-auto " src={about} alt="" />
      <div className="absolute mt-10 h-full  rounded-xl inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] "></div>

    </div>
         <div className="flex flex-col mt-5 "> 
         <h1 className="font-garamond font-bold text-2xl  lg:text-4xl text-blue-600 mt-3">Why Choose Us</h1>
         <h1 className="font-raleway font-extrabold text-xl  md:text-5xl text-black mt-7 ">
Experts Forecasts And Insights Expected Trends</h1>
<p className="text-gray-400 text-base lg:text-xl font-raleway font-bold mt-6">SkyVesta Real Estate Company we understand that real estate transactions are not just about properties they are about people and their dreams. That is why we take the time to listen to your unique needs and aspirations

</p>
         <div className="flex flex-col ml-3">
         <p className="items-center gap-2  text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-blue-600 w-[2rem] "/>
          Special Security Services
          </p>
          <p className="items-center gap-2 text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-blue-600 w-[2rem] "/>
          24/7 Support Services
          </p>
          <p className="items-center gap-2 text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-blue-600 w-[2rem] "/>
          Best Architecture Designer Hiring
          </p>
          <p className="items-center gap-2 text-base lg:text-2xl mt-5 flex font-raleway font-medium text-[#131313B3]">
          <CiCircleCheck  className="text-blue-600 w-[2rem] "/>
          Easy To Payment System
          </p>

         </div>
      
            
      </div>
      </div>
      {/* swipper */}
      <div className="mx-auto mt-10"><h1 className="text-center mb-8 font-garamond font-bold text-blue-600 text-5xl ">Our Services</h1></div>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
      <div className="card  bg-[#e4edf1] hover:bg-white border-blue-300 shadow-xl">
  <div className="card-body">
    <FaBuildingWheat className=" card-title w-[3rem] text-blue-900 h-20" />
    <p className="text-4xl font-garamond text-black font-bold">Appertments</p>
    <p className="font-raleway font-medium text-[#131313B3] text-base">We Build and services Next Generations<br /> For Your School,House,Appertments <br /> Services for your nexr Plans</p>
    <div className="card-actions mt-3 justify-start">
      <button className="btn border-none text-white text-base font-raleway font-bold bg-blue-600 hover:bg-blue-900">View More</button>
    </div>
  </div>
</div>
<div className="card bg-[#e4edf1] hover:bg-white rounded-xl  shadow-2xl">
  <div className="card-body">
    < GiFamilyHouse className=" card-title w-[3rem] text-blue-900 h-20" />
    <p className="text-4xl font-garamond text-black font-bold">Familly House</p>
    <p className="font-raleway font-medium text-[#131313B3] text-base">We Build and services Next Generations<br /> For Your School,House,Appertments <br /> Services for your nexr Plans</p>
    <div className="card-actions mt-3 justify-start">
      <button className="btn border-none text-white text-base font-raleway font-bold bg-blue-600 hover:bg-blue-900">View More</button>
    </div>
  </div>
</div>

<div className="card bg-[#e4edf1] hover:bg-white shadow-xl">
  <div className="card-body">
    <FaSchool className=" card-title w-[3rem] text-blue-900 h-20" />
    <p className="text-4xl font-garamond text-black font-bold">School</p>
    <p className="font-raleway font-medium text-[#131313B3] text-base">We Build and services Next Generations<br /> For Your School,House,Appertments <br /> Services for your nexr Plans</p>
    <div className="card-actions mt-3 justify-start">
      <button className="btn border-none text-white text-base font-raleway font-bold bg-blue-600 hover:bg-blue-900">View More</button>
    </div>
  </div>
</div>
</div>
    
    </div>

    );
};

export default About;