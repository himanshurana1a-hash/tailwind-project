import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
   <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain transition-transform duration-200 hover:scale-125" />
        </Link>

        <div className="flex items-center gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-black transition duration-200">Home</Link>

          <Link to="/cart" className="flex items-center gap-2 hover:text-black transition duration-200">
            <GiShoppingCart size={20} /> Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;