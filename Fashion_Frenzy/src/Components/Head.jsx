import React from 'react';


const Head=() =>{
  return (
 

    <div className="relative  bg-main-pattern bg-cover">
    <div className="container mx-auto ">
    <div className="dark:bg-dark bg-[#f3c9a3] sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
        <div data-aos="slide-right" data-aos-duration="1500">
          <img
            src="./src/Images/body.jpeg"
            alt=""
            className="sm:scale-125 sm:-translate-x-11 max-h-[300px] "
          />
        </div>
        <div>
          <div className="space-y-5 sm:p-16 pb-6">
            <h1
              data-aos="fade-up"
              className="text-5xl sm:text-7xl font-bold font-serif"
            >
              WHERE FASHION MEETS FRENZY
            </h1>
            <br />
            <p data-aos="fade-up" className="leading-8 tracking-wide">
            
            </p>
            <p data-aos="fade-up" className="text-3xl">
                Find the best fashion style for you ! <br />
                Elevate Your Shopping Experience Today !
            </p>
            <br />
            <button data-aos="fade-up" className="button-outline px-6 py-2 bg-[#a05616] hover:bg-orange-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
   
          
    );
  }
    
  


export default Head;