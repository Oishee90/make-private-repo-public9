import backgroundImage from '../../assets/austin-distel-wD1LRb9OeEo-unsplash.jpg';
import { Link } from "react-router-dom";
import { FaEye,FaEyeSlash} from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SocialLogIn from './SocialLogIn';
import UseAuth from '../../hook/UseAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const {signInUser} = UseAuth()
  const [showpassword, setShowpassword] = useState(false)

  const {
    register,
    handleSubmit,  
  
    formState: { errors },
  } = useForm();
 // navigation system
 const navigate = useNavigate()
 const location = useLocation()
 const form = location?.state ||"/";



  const onSubmit = data  => {
   
    // console.log(data)
   const {email,password} = data;
   signInUser(email,password)
   .then (result => {
   
    if(result.user){
      toast.success('Log in successfully!');
     navigate(form)
    }
  })
   .catch( () => {
    toast.error('Invalid email or password.');
   })
  }
    return (
  
        <div>
          <Helmet><title>Haven - Login</title></Helmet>
        <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` ,
     backgroundSize: 'cover',
     backgroundPosition: 'center',  }}>
<div className="text-center w-1/2 mt-5 mb-5">

<div className="card shadow-2xl w-full bg-base-100">
    <h1 className="font-bold text-xl md:text-2xl mt-5 font-raleway text-black">Login Now!!</h1>
 
 <div className="card-body">
 <form   onSubmit={handleSubmit(onSubmit)}>
 
 <div className="form-control">
   <label className="label">
     <span  className="label-text font-raleway text-base md:text-lg font-bold text-black">Email</span>
   </label>
   <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })}
    className="input input-bordered  border-green-200 bg-gray-50  placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 
    " />
    {errors.email&& 
         <span className="text-left text-red-500 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
  
 </div>

 <div className="form-control  relative">
       <label className="label">
         <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Password</span>
         
       </label>
       
       <input 
          type = {showpassword ? "text" : "password"}
          placeholder="password" {...register("password", { required: true })}
          className=" input input-bordered border-green-200 bg-gray-50  placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 "  />
       <p onClick={() => setShowpassword(!showpassword)} className="absolute top-[66%] left-[82%] md:left-[94%]">
        {
          showpassword ? <FaEyeSlash className="h-[100%]" /> :<FaEye className="h-[100%]" ></FaEye>
     
        }
        </p>   
    {errors.password&& 
         <span className="text-left text-red-500 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
  
       
     </div>
 
 <div className="form-control mt-6">
   <button className="btn bg-[#1B6B93] hover:bg-green-900 font-raleway text-xs md:text-lg font-bold text-white">Log In</button>
 </div>
 <ToastContainer  />
 <div className="form-control mt-6">
 <p className="text-left font-raleway text-xs md:text-lg font-bold text-black">Do You Have An Account? Please <Link to={'/register'} className="text-green-500">Register</Link></p>
 </div>
 
</form>

<SocialLogIn></SocialLogIn>
 </div>
  
</div>
</div>
</div>
    </div>
    );
};

export default Login;