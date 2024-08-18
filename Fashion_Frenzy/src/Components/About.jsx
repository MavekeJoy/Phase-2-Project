import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-main-pattern bg-cover">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dark:bg-dark bg-[#f3c9a3] min-h-[400px] sm:min-h-[600px] flex flex-col sm:flex-row items-center justify-between duration-300">
          <div className="order-2 sm:order-1 w-full sm:w-1/2 text-center sm:text-left space-y-5 p-6 sm:p-16">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-serif">
              ABOUT US
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl">
              At Fashion Frenzy, we believe that every woman deserves to feel confident and stylish, no matter the occasion. Our carefully curated collections are designed to cater to the diverse tastes and needs of modern women. From chic everyday wear to statement pieces for special moments, we offer a wide range of fashion-forward clothing that reflects the latest trends while staying true to timeless elegance.
            </p>
            <div className="text-center my-8">
              <button
                onClick={() => navigate('/products')}
                className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="order-1 sm:order-2 w-full sm:w-1/2 flex justify-center sm:justify-end">
            <img
              src="/Images/about.jpeg"
              alt="About Us"
              className="w-full max-w-sm sm:scale-125 sm:translate-x-11 max-h-[200px] sm:max-h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
