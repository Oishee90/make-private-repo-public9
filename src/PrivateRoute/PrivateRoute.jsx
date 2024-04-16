import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hook/UseAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    console.log(location)
    if(loading){
        return <h1 className="text-4xl">Loading</h1>
    }
    if(!user){
        return  <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
   
    return (
        <div>
           {children}
        </div>
    );
};

export default PrivateRoute;