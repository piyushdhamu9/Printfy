// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/Logo.svg';
import facebook from '../assets/facebook-icon.svg';
import instagram from '../assets/Instagram-icon.svg';
import linkedin from '../assets/linkedin-icon.svg';
import reddit from '../assets/Reddit.svg';
import tiktok from '../assets/Tiktok.svg';
import twitter from '../assets/Twitter.svg';
import youtube from '../assets/Youtube.svg';

const Footer = () => {
  return (
    <footer className="bg-white pt-8 mt-10 ">
      <div className="container mx-auto flex flex-col items-center space-y-10">
        {/* Logo Section */}
        <div className='flex w-full px-40 justify-between cursor-pointer'>
          <div className="flex justify-center mb-8  ">
            <img src={logo} alt="Printify Logo" className="" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <img src={facebook} alt="Facebook" className="h-8" />
            <img src={instagram} alt="Instagram" className="h-8" />
            <img src={linkedin} alt="LinkedIn" className="h-8" />
            <img src={twitter} alt="X (Twitter)" className="h-8" />
            <img src={youtube} alt="YouTube" className="h-8" />
            <img src={tiktok} alt="TikTok" className="h-8" />
            <img src={reddit} alt="Reddit" className="h-8" />
          </div>
        </div>

        {/* Sections */}
        <div className='w-full'>
          <div className=" text-sm flex flex-col md:flex-row justify-around mx-28 space-y-10 md:space-y-0 md:space-x-20">
            {/* Column 1 */}
            <div className=" space-y-4 text-center md:text-left ">
              <h3 className="font-bold text-lg">Integrations</h3>
              <ul className="space-y-2 font-sans cursor-pointer ">
                <li className='hover:text-green-500'>Shopify</li>
                <li className='hover:text-green-500'>Etsy</li>
                <li className='hover:text-green-500'>eBay</li>
                <li className='hover:text-green-500'>Amazon</li>
                <li className='hover:text-green-500'>TikTok Shop</li>
                <li className='hover:text-green-500'>PrestaShop</li>
                <li className='hover:text-green-500'>BigCommerce</li>
                <li className='hover:text-green-500'>Wix</li>
                <li className='hover:text-green-500'>WooCommerce</li>
                <li className='hover:text-green-500'>Squarespace</li>
                <li className='hover:text-green-500'>Printify API</li>
                <li className='hover:text-green-500'>Printify Pop-Up Store</li>
                <li className='hover:text-green-500'>Shutterstock</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="font-bold text-lg">Discover</h3>
              <ul className="space-y-2 cursor-pointer">
                <li className='hover:text-green-500'>Blog</li>
                <li className='hover:text-green-500'>Guides</li>
                <li className='hover:text-green-500'>Products</li>
                <li className='hover:text-green-500'>Etsy print-on-demand</li>
                <li className='hover:text-green-500'>Shopify print-on-demand</li>
                <li className='hover:text-green-500'>Woocommerce print-on-demand</li>
                <li className='hover:text-green-500'>Wix print-on-demand</li>
                <li className='hover:text-green-500'>Squarespace print-on-demand</li>
                <li className='hover:text-green-500'>Make Your Own Shirt</li>
                <li className='hover:text-green-500'>Brands</li>
                <li className='hover:text-green-500'>Pricing</li>
                <li className='hover:text-green-500'>Shipping Rates</li>
                <li className='hover:text-green-500'>Mockup Generator</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="font-bold text-lg">Start selling</h3>
              <ul className="space-y-2 cursor-pointer">
                <li className='hover:text-green-500'>Custom T-shirts</li>
                <li className='hover:text-green-500'>Custom Hoodies</li>
                <li className='hover:text-green-500'>Custom Mugs</li>
                <li className='hover:text-green-500'>Custom Socks</li>
                <li className='hover:text-green-500'>Custom Backpacks</li>
                <li className='hover:text-green-500'>Custom Branding</li>
                <li className='hover:text-green-500'>Sell on Etsy</li>
                <li className='hover:text-green-500'>Sell on Social Media</li>
                <li className='hover:text-green-500'>Free T-shirt Designs</li>
                <li className='hover:text-green-500'>Custom Products</li>
                <li className='hover:text-green-500'>Custom All-Over-Print Hoodies</li>
                <li className='hover:text-green-500'>Start a Clothing Line</li>
                <li className='hover:text-green-500'>Start POD Business</li>
                <li className='hover:text-green-500'>Bulk Orders</li>
                <li className='hover:text-green-500'>Transferring To Printify</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="font-bold text-lg">Printify</h3>
              <ul className="space-y-2 cursor-pointer">
                <li className='hover:text-green-500'>Print on Demand</li>
                <li className='hover:text-green-500'>Print Providers</li>
                <li className='hover:text-green-500'>Experts Program</li>
                <li className='hover:text-green-500'>Printify Express Delivery</li>
                <li className='hover:text-green-500'>Become a Partner</li>
                <li className='hover:text-green-500'>About</li>
                <li className='hover:text-green-500'>Printify Quality Promise</li>
                <li className='hover:text-green-500'>Jobs</li>
                <li className='hover:text-green-500'>Webinars</li>
                <li className='hover:text-green-500'>Printing Profits Podcast</li>
                <li className='hover:text-green-500'>Contact Us</li>
                <li className='hover:text-green-500'>Affiliate</li>
                <li className='hover:text-green-500'>Contact Sales</li>
                <li className='hover:text-green-500'>POD Glossary</li>
                <li className='hover:text-green-500'>Network Fulfillment Status</li>
                <li className='hover:text-green-500'>Merchant Protection</li>
                <li className='hover:text-green-500'>Security</li>
                <li className='hover:text-green-500'>Sitemap</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="w-full border-t border-gray-300 pt-4 mt-10 pb-5">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
            <a href="/" className="text-sm text-gray-500">Intellectual Property Policy</a>
            <a href="/" className="text-sm text-gray-500">Terms of Service</a>
            <a href="/" className="text-sm text-gray-500">Privacy Policy</a>
            <a href="/" className="text-sm text-gray-500">Security</a>
          </div>
          <div className="text-center text-sm text-gray-500 mt-4">
            © 2024 Printify, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
