import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets.ts";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center py-5 font-medium justify-between sm:justify-around bg-white shadow-md px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Link to="/">
          <img src={assets.logo} className="w-36 cursor-pointer" alt="Logo" />
        </Link>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden sm:block" />
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden sm:block" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden sm:block" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden sm:block" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <img
            src={assets.search_icon}
            className="w-5 cursor-pointer hover:scale-110 transition-transform"
            alt="Search"
          />
          <div className="group relative">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer hover:scale-110 transition-transform"
              alt="Profile"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-5 min-w-5 cursor-pointer hover:scale-110 transition-transform"
              alt="Cart"
            />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </Link>
          <button
            className="sm:hidden text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <img src={assets.menu_icon} className="w-6" alt="Menu" />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={assets.cross_icon} className="w-5" alt="Close" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-gray-700">
          <NavLink
            to="/"
            className="hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            className="hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </NavLink>
        </ul>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default NavBar;