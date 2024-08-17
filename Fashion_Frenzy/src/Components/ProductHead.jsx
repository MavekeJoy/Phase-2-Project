import React from 'react';
import { Link } from 'react-router-dom';

const ProductHead = () => {
  return (
    
        <div
        className=" bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/b4/2e/53/b42e5307927c62c21985514a5be5cf83.jpg')"
        }}
      >
         
          <nav >
            <ul className="flex justify-center  text-5xl font-semibold text-[#f3c9a3]">
              <li>
                <Link to="/products?filter=all" className="hover:underline">
                  AVAILABLE PRODUCTS
                </Link>
              </li>
             </ul>
             </nav>
             </div>
           
  );
};

export default ProductHead;
