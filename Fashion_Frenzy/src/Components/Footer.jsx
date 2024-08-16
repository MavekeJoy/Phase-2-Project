import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="relative bg-main-pattern bg-cover">
            <div className="container mx-auto">
                <div className="dark:bg-dark bg-gradient-to-t from-[#7d4626] to-[#fcd6ab] sm:min-h-[200px] sm:grid sm:place-items-center duration-300">
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center ">
                        <h1 className="text-4xl font-bold pt-20">FASHION FRENZY</h1><br />
                        <h2>THANK YOU FOR CHOOSING US</h2>
        <p>&copy; 2024 F*F. All rights reserved.</p>
      </div>
      <div className="text-center ">
        <h1 className="text-2xl font-bold ">Easy Access</h1>
        <ul>
          <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Contact Us</a></li>
        </ul>
      </div>
      <div className="text-center ">
        <h1 className="text-2xl font-bold">Social Media</h1>
        <ul>
          <li><a href="#" className="text-white hover:text-gray-300">Facebook</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Twitter</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Instagram</a></li>
        </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      
                                );
                                };
          export default Footer;