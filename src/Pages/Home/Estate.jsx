import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Estate = ({estate}) => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Animation easing
            once: false  // Only animate once
        });
    }, [])
    return (
        <div>
        <div className="mt-14" data-aos="fade-up">
           <h1 className="text-center mx-auto font-raleway text-[#135D66] font-bold text-5xl">Explore Our State</h1> 
           <p className="font-raleway mt-5 text-gray-600 text-lg mx-auto pr-10 pl-10 text-center">From spacious single-family homes to cozy townhouses, modern apartments, student housing, vacation rentals, and luxury condos, our diverse collection has something for everyone.</p>
        </div>
        <div id='estate' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-8'>
            {
                categories.map((category, index) => (
<div key={index} className="card bg-base-100 shadow-2xl " data-aos="fade-up">
    <div className="relative" >
    <figure className="h-64 overflow-hidden">
    <img  data-aos="fade-zoom-in" src={category.image} className="object-cover rounded-t-lg w-full h-full"  />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-t-lg"></div>
  </figure>
    </div>
  
  
  <div className="card-body">
    <h2 className="card-title font-extrabold font-raleway text-lg  md:text-2xl ">
    {category.segment_name}
    <div className={`badge border-none text-white p-2 font-raleway ${category.status === 'Rent' ? 'bg-green-500' : 'bg-red-500'}`}>{category.status}</div>
    </h2>
    <p className='font-raleway font-bold text-lg md:text-base text-gray-500'>{category.estate_title}</p>
    <div className="card-actions justify-end mt-7">
      <Link to={`/estate/${category.id}`}><div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">View Property</div> 
     </Link>
    
    </div>
  </div>
</div>
                ))
            }



</div>
</div>
    );
};

export default Estate;