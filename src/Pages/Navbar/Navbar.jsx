import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../hook/UseAuth";



const Navbar = () => {
  const {logOut,user} = UseAuth()
    const navlinks = <>
      <li className="font-raleway text-[#03070CB3] text-lg ml-5"><NavLink to={"/"}>Home</NavLink></li>
      <li className="font-raleway text-[#03070CB3] text-lg ml-5"><NavLink to={"/about"}>About</NavLink></li>
      <li className="font-raleway text-[#03070CB3] text-lg ml-5"><NavLink to={"/about"}>Contact us</NavLink></li>
    
    </>
    return (
        <div >
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost  font-raleway font-bold text-[#03070C] md:text-3xl text-xl lg:text-4xl">Haven Heights</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <div className="flex items-center gap-5">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip={user.displayName}>
        <div className="w-15 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
        </div>
      </div>
      <div onClick={logOut}  className="btn hover:bg-[#003C43] text-xs md:text-xl text-bold bg-[#135D66] text-white ">LogOut</div>
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