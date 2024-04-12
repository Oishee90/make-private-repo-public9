import { Link } from "react-router-dom";
import backgroundImage from '../../assets/austin-distel-wD1LRb9OeEo-unsplash.jpg';
import { FaEyeSlash} from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  console.log(createUser)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
    return (
        <div>
          <Helmet><title>Haven - Register</title></Helmet>
            <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` ,
         backgroundSize: 'cover',
         backgroundPosition: 'center',  }}>
  <div className="text-center w-1/2 mt-5 mb-5">
   
    <div className="card shadow-2xl w-full bg-base-100">
        <h1 className="font-bold text-xl md:text-2xl mt-5 font-raleway text-black">Creat An Account</h1>
     
      <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Name</span>
          </label>
          <input type="text" {...register("fullName", { required: true })} placeholder="Enter Your Name" 
          className="input input-bordered border-green-200 bg-gray-50 placeholder:font-raleway placeholder:text-xs  placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300  "/>
            {errors.fullName&& 
            <span className="text-left text-red-500 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text font-raleway text-base md:text-lg font-bold text-black">Email</span>
          </label>
          <input type="email" placeholder="Enter Your Email"  {...register("email", { required: true })}
           className="input input-bordered  border-green-200 bg-gray-50  placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 
           "  />
             {errors.email&& 
            <span className="text-left text-red-500 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Photo Url</span>
          </label>
          <input type="email" placeholder="Url"{...register("url", { required: true })}
           className="input input-bordered border-green-200 bg-gray-50 placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 " />
         {errors.url&& 
            <span className="text-left text-red-500 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
        </div>
        <div className="form-control  relative">
          <label className="label">
            <span className="label-text font-raleway text-base md:text-lg font-bold text-black">Password</span>
            
          </label>
          
          <input type="password" placeholder="password" {...register("password", { required: true })}
          className=" input input-bordered border-green-200 bg-gray-50  placeholder:font-raleway  placeholder:text-xs placeholder:md:text-lg placeholder:text-bold placeholder:text-gray-300 "  />
       <p className="absolute top-[66%] left-[82%] md:left-[94%]"><FaEyeSlash className="h-[100%]" /></p>
          
       {errors.password&& 
            <span className="text-left text-red-500 mt-1 font-raleway text-xs md:text-base">This field is required</span>}
        </div>
        
        <div className="form-control mt-6">
          <button className="btn bg-green-600 hover:bg-green-900 font-raleway text-xs md:text-lg font-bold text-white">Create An Acoount</button>
        </div>
        <div className="form-control mt-6">
        <p className="text-left font-raleway text-xs md:text-lg font-bold text-black">Already Have An Account? <Link to={'/login'} className="text-[#1B6B93]">Login Here</Link></p>
        </div>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;