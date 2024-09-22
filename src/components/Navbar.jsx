import React from 'react';
import logo from '../assets/Logo.svg';

function Navbar() {
  return (
    <nav className="bg-white shadow-2xl">
      <div className="container mx-auto flex justify-around items-center py-2 px-6">
       
        <div className="text-green-600 text-xl font-bold cursor-pointer">
          <img href="/" src={logo} alt="Printify" />
        </div>

 
        <ul className="flex space-x-6 text-gray-600">
          <li className="relative group">
            <a href="#catalog" className="hover:text-green-600">Catalog</a>
          </li>
          
       
          <li className="relative group">
            <a href="#how-it-works" className="hover:text-green-600 flex items-center">
              How it works
            
              <svg className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 space-y-2 py-2 text-sm w-48">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#how-printify-works">How Printify Works</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#print-on-demand">Print On Demand</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#quality-promise">Printify Quality Promise</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#what-to-sell">What to Sell</a></li>
            </ul>
          </li>

          <li className="relative group">
            <a href="#pricing" className="hover:text-green-600">Pricing</a>
          </li>

          <li className="relative group">
            <a href="#blog" className="hover:text-green-600">Blog</a>
          </li>

         
          <li className="relative group">
            <a href="#services" className="hover:text-green-600 flex items-center">
              Services
         
              <svg className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 space-y-2 py-2 text-sm w-60">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#printify-studio">Printify Studio</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#express-delivery">Printify Express Delivery</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#transfer-products">Transfer Products</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#bulk-order">Order in Bulk</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#experts-program">Experts Program</a></li>
            </ul>
          </li>

          <li className="relative group">
            <a href="#use-cases" className="hover:text-green-600">Use Cases</a>
          </li>

          <li className="relative group">
            <a href="#need-help" className="hover:text-green-600">Need Help?</a>
          </li>
        </ul>

        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-green-600">Log in</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Sign up</button>
        </div>
      </div>
      <hr className=' shadow-xl' />
    </nav>
  );
}

export default Navbar;
