import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Estate = () => {
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-8'>
            {
                categories.map((category, index) => (
<div key={index} className="card bg-base-100 shadow-xl " data-aos="fade-up">
  <figure><img  data-aos="fade-zoom-in" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-extrabold font-raleway text-lg  md:text-2xl ">
    {category.segment_name}
    <div className={`badge border-none text-white p-2 font-raleway ${category.status === 'rent' ? 'bg-green-500' : 'bg-red-500'}`}>{category.status}</div>
    </h2>
    <p className='font-raleway font-bold text-lg md:text-base text-gray-500'>{category.estate_title}</p>
    <div className="card-actions justify-end mt-7">
      <div className="badge  badge-outline font-bold text-base text-black font-raleway btn rounded-3xl border-[#135D66] hover:bg-[#135D66] hover:text-white">View Property</div> 
     
    </div>
  </div>
</div>
                ))
            }



</div>
    );
};

export default Estate;