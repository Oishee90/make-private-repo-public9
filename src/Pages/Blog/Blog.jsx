import card1 from '../../assets/alen-rojnic-jDlTJSrjlgI-unsplash.jpg'
import card2 from '../../assets/banner-2.jpg'
import card3 from '../../assets/banner-3.jpg'
import card4 from '../../assets/banner1.jpg'
import card5 from '../../assets/lycs-architecture-kUdbEEMcRwE-unsplash (1).jpg'
import card6 from '../../assets/rivage-CwTfKH5edSk-unsplash.jpg'
import card7 from '../../assets/allphoto-bangkok-nI4aC1kaTRc-unsplash.jpg'
import card8 from '../../assets/outsite-co-R-LK3sqLiBw-unsplash.jpg'
import card9 from '../../assets/sasha-kaunas-hEAGekaiJ8g-unsplash.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async'
const Blog = () => {
    return (
        <div className="mx-auto mt-12 ">
          <Helmet><title>SkyVista-Blog</title></Helmet>
            <h1 className="text-center mt-20 text-[#135D66]  mb-5  font-raleway text-5xl font-extrabold">Our Recent Features</h1>
            <div>
            <div id='estate' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-8'>
           
<div className="card bg-[#e4edf1] hover:bg-white shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={card1} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
  <h2 className='flex items-center gap-3 text-lg text-gray-500 font-bold font-raleway'><FaLocationDot /> Mountain Retreat, USA</h2>
           
   
    <p className='font-raleway font-bold text-lg md:text-base '>We are creating Your Dream House that are both</p>
    <div className="card-actions justify-star mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">Read More</div> 
  
    
    </div>
  </div>
</div>
    {/*  card-2*/}
    <div className="card bg-[#e4edf1] hover:bg-white shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={card2} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
  <h2 className='flex items-center gap-3 text-lg text-gray-500 font-bold font-raleway'><FaLocationDot /> Karachi, Pakistan</h2>
           
   
    <p className='font-raleway font-bold text-lg md:text-base '>We are creating Your Dream House that are both</p>
    <div className="card-actions justify-star mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">Read More</div> 
  
    
    </div>
  </div>
</div>
{/* card-3 */}
<div className="card bg-[#e4edf1] hover:bg-white shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={card3} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
  <h2 className='flex items-center gap-3 text-lg font-bold font-raleway text-gray-500'><FaLocationDot /> Texus, USA</h2>
           
   
    <p className='font-raleway font-bold text-lg md:text-base '>We are creating Your Dream House that are both</p>
    <div className="card-actions justify-star mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">Read More</div> 
  
    
    </div>
  </div>
</div>
{/* card-4 */}
<div className="card bg-[#e4edf1] hover:bg-white shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={card4} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
  <h2 className='flex items-center gap-3 text-lg font-bold font-raleway text-gray-500'><FaLocationDot /> New York, USA</h2>
           
   
    <p className='font-raleway font-bold text-lg md:text-base '>We are creating Your Dream House that are both</p>
    <div className="card-actions justify-star mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">Read More</div> 
  
    
    </div>
  </div>
</div>
{/* card-5 */}
<div className="card bg-[#e4edf1] hover:bg-white shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={card5} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
  <h2 className='flex items-center gap-3 text-lg font-bold font-raleway text-gray-500'><FaLocationDot /> Istambul, Turki</h2>
           
   
    <p className='font-raleway font-bold text-lg md:text-base '>We are creating Your Dream House that are both</p>
    <div className="card-actions justify-star mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">Read More</div> 
  
    
    </div>
  </div>
</div>
{/* card-6 */}
<div className="card bg-[#e4edf1] hover:bg-white shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={card6} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
  <h2 className='flex items-center gap-3 text-lg font-bold font-raleway text-gray-500'><FaLocationDot /> Ohio, USA</h2>
           
   
    <p className='font-raleway font-bold text-lg md:text-base '>We are creating Your Dream House that are both</p>
    <div className="card-actions justify-star mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">Read More</div> 
  
    
    </div>
  </div>
</div>
{/* card-7 */}
<div className="card bg-[#e4edf1] hover:bg-white shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={card7} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
  <h2 className='flex items-center gap-3 text-lg font-bold font-raleway text-gray-500'><FaLocationDot /> Florida, USA</h2>
           
   
    <p className='font-raleway font-bold text-lg md:text-base '>We are creating Your Dream House that are both</p>
    <div className="card-actions justify-star mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">Read More</div> 
  
    
    </div>
  </div>
</div>
{/* card-8 */}
<div className="card bg-[#e4edf1] hover:bg-white shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={card8} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
  <h2 className='flex items-center gap-3 text-lg font-bold font-raleway text-gray-500'><FaLocationDot /> Istambul, Turki</h2>
           
   
    <p className='font-raleway font-bold text-lg md:text-base '>We are creating Your Dream House that are both</p>
    <div className="card-actions justify-star mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">Read More</div> 
  
    
    </div>
  </div>
</div>
{/* card-9 */}
<div className="card bg-[#e4edf1] hover:bg-white shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={card9} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
  <h2 className='flex items-center gap-3 text-lg font-bold font-raleway text-gray-500'><FaLocationDot /> Mountain Retreat, USA</h2>
           
   
    <p className='font-raleway font-bold text-lg md:text-base '>We are creating Your Dream House that are both</p>
    <div className="card-actions justify-star mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">Read More</div> 
  
    
    </div>
  </div>
</div>
{/* card-10 */}
</div>
            </div>
        </div>
    );
};

export default Blog;