import backgroundImage from '../../assets/austin-distel-wD1LRb9OeEo-unsplash.jpg';
import { Link } from "react-router-dom";
import { FaEyeSlash} from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
const Login = () => {
    return (
  
        <div>
          <Helmet><title>Haven - Login</title></Helmet>
        <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` ,
     backgroundSize: 'cover',
     backgroundPosition: 'center',  }}>
<div className="text-center w-1/2 mt-5 mb-5">

<div className="card shadow-2xl w-full bg-base-100">
    <h1 className="font-bold text-xl md:text-2xl mt-5 font-raleway text-black">Login Now!!</h1>
 
  <form className="card-body">
 
    <div className="form-control">
      <label className="label">
        <span  className="label-text font-raleway text-base md:text-lg font-bold text-black">Email</span>
      </label>
      <input type="email" placeholder="Enter Your Email"
       className="input input-bordered  border-green-200 bg-gray-50  placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 
       " required />
    </div>
  
    <div className="form-control  relative">
          <label className="label">
            <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Password</span>
            
          </label>
          
          <input type="password" placeholder="password" 
          className=" input input-bordered border-green-200 bg-gray-50  placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 " required />
       <p className="absolute top-[66%] left-[82%] md:left-[94%]"><FaEyeSlash className="h-[100%]" /></p>
          
          
        </div>
    
    <div className="form-control mt-6">
      <button className="btn bg-[#1B6B93] hover:bg-green-900 font-raleway text-xs md:text-lg font-bold text-white">Log In</button>
    </div>
    <div className="form-control mt-6">
    <p className="text-left font-raleway text-xs md:text-lg font-bold text-black">Do You Have An Account? Please <Link to={'/register'} className="text-green-500">Register</Link></p>
    </div>
    <div className="form-control mt-6">
    <div className='flex items-center gap-3'>
      <div className='border border-dashed border-blue-300 w-1/2 h-0 '></div><div><h2 className='font-raleway text-black font-bold text-xs md:text-base'>OR</h2></div><div  className='border border-dashed border-blue-300 w-1/2 h-0 '></div>
    </div>
    </div>
  </form>
  
</div>
</div>
</div>
    </div>
    );
};

export default Login;