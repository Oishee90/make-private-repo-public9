import { Helmet } from "react-helmet-async";
import contact from "../../assets/philip-strong-iOBTE2xsYko-unsplash.jpg"

const ContactUs = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${contact})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        
    };
    
    return (
        <div>
           <Helmet><title>SkyVista-Contact Us</title></Helmet>
             <div className="container mx-auto mt-20 " >

           <div className="hero rounded-2xl border  flex-col lg:flex-row min-h-screen  relative " style={backgroundImageStyle}>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-xl" ></div>
  <div className="hero-content mt-5 p-7 gap-5 lg:gap-10 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-raleway  text-white font-bold">Contact Us</h1>
      <p className="py-6 text-2xl font-bold font-raleway text-white">Thanks for stopping by Skyvesta! We are thrilled to see you exploring our website. If you have any questions, feedback, or just want to say hi, do not hesitate to reach out using the form below. We are here to make your experience with Skyvesta the best it can be. Looking forward to hearing from you!</p>
      
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  mt-5">
      <form className="card-body">
    <div className="grid grid-cols-2 gap-3 items-center justify-center ">
    <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl font-bold">First Name</span>
          </label>
          <input type="text" placeholder="First Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl  font-bold">Last Name</span>
          </label>
          <input type="text" placeholder="Last Name" className="input input-bordered" required />
        </div>
    </div>
    <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl font-bold">Phone Number</span>
          </label>
          <input type="tell" placeholder="Phone Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl font-bold">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl font-bold">What can we help you with?</span>
          </label>
          <textarea className="textarea textarea-accent" placeholder=""></textarea>
        </div>
       
        <div className="form-control mt-6">
          <button className="btn text-xl btn-success text-white">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
        </div>
    );
};

export default ContactUs;