import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hook/UseAuth";



const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    console.log(location)
    if(loading){
        return <div className="w-1/2"><span className="loading loading-spinner text-info"></span></div>
    }
    // console.log('hi');
    // if(!user){
    //     return  <Navigate to='/login' state={location?.pathname || '/'}/>
    // }
    if(user){
        return children
    }
   
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;