import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.webp";
function Navbar() {
  return (
    <nav className="flex justify-between  px-10 py-4 border-b  top-0 left-0 w-full z-50 bg-white shadow">
      <img src={Logo} alt="logo"  className="w-12 h-12"/>
      <ul className='hidden md:flex gap-8 text-gray-600 items-center font-medium'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/download">Download</NavLink>
        <NavLink to="/help">Help</NavLink>
        <NavLink to="/auth">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
            Login / Sign up
          </button>
        </NavLink>

      </ul>


    </nav>
  );
}

export default Navbar;