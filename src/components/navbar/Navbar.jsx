import React from 'react';
import cartImg from '../../assets/products/shopping-cart.png';

const Navbar = () => {
  return (
    <div className='shadow-sm'>
      <div className="navbar bg-base-100 w-11/12 mx-auto lg:w-5/6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <a className="text-3xl font-bold bg-linear-to-r from-[#632EF7] to-[#9415FA] bg-clip-text text-transparent">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-5">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <img src={cartImg} alt="" className='hidden md:block'/>
          <a className="cursor-pointer">Login</a>
          <a className="bg-linear-to-r from-[#632EF7] to-[#9415FA] text-white btn rounded-3xl">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;