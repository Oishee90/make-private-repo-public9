import { Link } from "react-router-dom";
import error from "../../assets/error-1.jpg"

const ErrorPages = () => {
 
    return (
        <div className="container mx-auto mt-7 h-[60vh] relative"  >
            <div className="relative">
            <img src={error} alt="" />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-xl"></div>

           <div className="absolute  flex-col inset-x-0 p-6 bottom-[38.5rem] flex justify-center w-full">
           <h1 className="mt-7 mb-7 text-center font-extrabold font-raleway text-red-100 text-2xl lg:text-5xl">Ooooppppsss!!!!</h1>
           <h1 className="mt-7 mb-7 text-center font-extrabold font-raleway text-red-100 text-2xl lg:text-5xl">Something Went wrong</h1>
            <Link className="mx-auto " to={'/'}>
            <div className="mx-auto ">
            <h2 className="text-center hover:bg-red-900 border-none px-7 btn bg-red-500 text-white font-raleway  text-2xl">Back to home page</h2>
    </div>
    </Link>
        </div>
        </div>
        </div>
    );
};

export default ErrorPages;