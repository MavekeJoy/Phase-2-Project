import React from 'react';

const About = () => {
  return (
    <div className="relative bg-main-pattern bg-cover">
      <div className="container mx-auto">
        <div className="dark:bg-dark bg-[#f3c9a3] sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
              
              <div className="space-y-5 sm:p-16 pb-6">
                <h1
                  data-aos="fade-up"
                  className="text-5xl sm:text-7xl font-bold font-serif"
                >
                  ABOUT US
                </h1>
                <br />
               
                <p data-aos="fade-up" className="text-2xl">
                At Fashion Frenzy, we believe that every woman deserves to feel confident and stylish, no matter the occasion. Our carefully curated collections are designed to cater to the diverse tastes and needs of modern women. From chic everyday wear to statement pieces for special moments, we offer a wide range of fashion-forward clothing that reflects the latest trends while staying true to timeless elegance.
                </p>
                <br />
              
              </div>

              
              <div className="flex justify-center sm:justify-end">
                <div data-aos="slide-right" data-aos-duration="1500">
                  <img
                    src="./src/Images/about.jpeg"
                    alt="About Us"
                    className="sm:scale-125 sm:translate-x-11 max-h-[300px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
