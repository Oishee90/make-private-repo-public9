
import { useLoaderData, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,  } from 'react';
import 'animate.css';

const EstateDetails = () => {
    const categories = useLoaderData()
    const {id} = useParams();
    const idInt = parseInt(id)
   
    const category = categories.find( category =>  category.id == idInt)
    console.log(category)
    const backgroundImageStyle = {
        backgroundImage: `url(${category.banner_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height:'60vh'
    };
    useEffect(() => {
      AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Animation easing
          once: false  // Only animate once
      });
  }, [])
    return (
        <div className='container mx-auto'>
           <div className="hero relative h-screen   rounded-xl" style={backgroundImageStyle} data-aos="fade-right" >
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-xl"></div>
    
  <div className="hero-content w-full flex-col lg:flex-row gap-6 justify-between" data-aos="fade-right">
  <div className='text-center mx-auto ' >
      <h1 className=" text-white text-2xl md:text-3xl lg:text-5xl font-extrabold font-raleway mt-3">More than Property,</h1>
      <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold font-raleway mt-3 md:mt-7"> We Offer Possibilities</h1>    
        <p className="py-6 font-raleway text-white hover:animate__animated animate__backOutLeft">Step into a world of refined elegance and unparalleled vistas with Skyvista - Your gateway to exceptional living</p>
      <button className="btn mb-5 border-none hover:bg-[#003C43] text-xs md:text-xl text-bold bg-[#135D66] text-white">Contact Us</button>
    </div>
  
  </div>
</div> 
{/* data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector" details */}
<div data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector">
  <h1 className="mt-20 mb-5 text-center mx-auto font-raleway text-[#135D66] font-bold text-5xl">  Our Estate Details</h1>
  <p className="font-raleway mt-5 text-gray-600 text-lg mx-auto pr-10 pl-10 text-center"> This charming property boasts unparalleled elegance and modern amenities</p>
</div>
<div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mt-6 mb-20 container mx-auto" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
  <div className="rounded-2xl relative h-full w-full ">

      <img className="    rounded-2xl mx-auto  h-full w-full object-cover" src={category.image} alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-xl"></div>
    </div>
         <div className="flex flex-col gap-5 space-y-2 p-4"> 
            <h1 className=" font-raleWay text-4xl font-bold hover:text-[#3d6c6c]">{category.segment_name}
            <div className={` justify-center ml-4 badge border-none text-white p-2 font-raleway ${category.status === 'Rent' ? 'bg-green-500' : 'bg-red-500'}`}>{category.status}</div></h1>
           
            <div className='border  h-0 border-gray-400 mt-4 '></div>
            <h2 className='font-raleWay font-bold text-xl text-[#131313B3]'>{category. estate_title}</h2>
            <h2 className='flex items-center gap-3 text-lg font-bold font-raleway'><FaLocationDot /> {category.location}</h2>
           
            <div className='border  h-0 border-gray-400 mt-4 '></div>
            <h2 className='font-raleWay text-xl text-[#131313B3]'> Description: {category.description}</h2>
            <div className='border border-dashed  h-0 border-gray-400 mt-4 '></div>
            
            <h2 className='font-raleWay text-xl font-bold text-black'>Facilities:</h2>
            <div className='flex flex-col justify-starts items-startsr gap-5'>
              
            {category.facilities.map((facility, index) => (
        <li key={index} className=" text-left   rounded-xl  font-bold text-[#131313B3] hover:text-[#3d6c6c] text-xs md:text-xl font-raleway">
        {facility}
        </li>
    ))}

</div>
            <div className='flex justify-center items-center gap-5'>

            <p className='p-4 rounded-full w-1/2 text-center bg-[#afc8cb] border-[#135D66] font-bold  text-black text-xs md:text-xl font-raleway'   >Area : <span className='text-green-700'>{category.area}</span></p>
            
            <p className='p-4 rounded-full w-1/2 text-center bg-[#afc8cb] border-[#135D66] font-bold  text-black text-xs md:text-xl font-raleway'   >Price : <span className='text-red-500'>{category.price}</span></p>
          
            </div>
     
       
         </div>
         </div>
        </div>
    );
};

export default EstateDetails;