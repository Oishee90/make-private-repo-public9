import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../hook/UseAuth";



const Navbar = () => {
  const {logOut,user} = UseAuth()
    const navlinks = <>
      <li className="font-raleway text-[#03070CB3] text-xs lg:text-lg ml-5" id="sidebar"><NavLink to={"/"}>Home</NavLink></li>
      <li className="font-raleway text-[#03070CB3] text-xs lg:text-lg ml-5" id="sidebar"><NavLink to={"/about"}>About</NavLink></li>
      <li className="font-raleway text-[#03070CB3] text-xs lg:text-lg ml-5" id="sidebar" ><NavLink to={"/contact"}>Contact us</NavLink></li>
      <li className="font-raleway text-[#03070CB3] text-lg ml-5" id="sidebar">
     
    </li>
      {user && (
  <div className="flex items-center">
    <li className="font-raleway text-[#03070CB3] text-lg " id="sidebar">
      <NavLink to={"/updateProfile"}>Update Profile</NavLink>
    </li>
    <li className="font-raleway text-[#03070CB3] text-lg ml-5" id="sidebar">
      <NavLink to={"/blog"}>Blog</NavLink>
    </li>
  </div>
)}
      
    </>
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} >
        <div className="navbar bg-base-100 mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost  font-raleway font-bold text-[#03070C] md:text-3xl text-xl lg:text-4xl">SkyVista</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <div className="flex items-center gap-5">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img src={user?.photoURL || "https://i.ibb.co/BcWRPHQ/derek-lee-93-L-Ph-OWPk-Y-unsplash.jpg"} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-green-50  rounded-box w-52">
        <li className="hover:bg-green-700 hover:rounded-xl hover:text-white font-raleway fon-bold">
          <a className="justify-between mb-2">
          {user?.displayName||'user name not found'}
            
          </a>
        </li >
        <li className="hover:bg-green-700 hover:rounded-xl hover:text-white font-raleway fon-bold"><a className="mb-2">{user?.email || 'user email not found'}</a></li>
        <li className="hover:bg-green-700 hover:rounded-xl hover:text-white font-raleway fon-bold"><Link to={"/updateProfile"}>Settings</Link></li>
        
      </ul>
    </div>
    {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip={user?.displayName||'user name not found'}>
        <div className="w-15 rounded-full">
          <img src={user?.photoURL || "https://i.ibb.co/BcWRPHQ/derek-lee-93-L-Ph-OWPk-Y-unsplash.jpg"} />
       
        </div>
       
      </div> */}
      <div onClick={logOut}  className="btn hover:bg-[#003C43] text-xs md:text-xl text-bold bg-[#135D66] text-white ">{}LogOut</div>
      </div>:
      <div>
        <Link to={"/register"} className="btn hover:bg-green-900 text-xs md:text-xl text-bold bg-green-600 text-white mr-2 md:mr-5">Registration</Link>
        <Link  to={"/login"} className="btn hover:bg-[#003C43] text-xs md:text-xl text-bold bg-[#135D66] text-white ">Log in</Link>
</div>
    }


  </div>
</div>
        </div>
    );
};

export default Navbar;