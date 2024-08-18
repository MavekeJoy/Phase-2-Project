import React from 'react';

const Head = () => {
  return (
    <div className="relative bg-main-pattern bg-cover">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dark:bg-dark bg-[#f3c9a3] min-h-[400px] sm:min-h-[600px] flex flex-col sm:flex-row items-center justify-between duration-300">
          <div className="order-2 sm:order-1 w-full sm:w-1/2 flex justify-center sm:justify-start">
            <img
              src=
              "/Images/body.jpeg"
              alt="Fashion Frenzy"
              className="w-full max-w-sm sm:scale-125 sm:-translate-x-11 max-h-[200px] sm:max-h-[300px]"
            />
          </div>
          <div className="order-1 sm:order-2 w-full sm:w-1/2 text-center sm:text-left space-y-5 p-6 sm:p-16">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-serif">
              WHERE FASHION MEETS FRENZY
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl">
              Find the best fashion style for you! <br />
              Elevate Your Shopping Experience Today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
 