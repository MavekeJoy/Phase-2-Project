import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart = ({ cart }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/7f/50/12/7f5012578fd0e59730b509deddb221b6.jpg')"
      }}
    >
      <div className="p-4">
        <div className="mb-4">
          <Link to="/products" className="bg-[#f3c9a3] text-white py-2 px-4 rounded hover:bg-blue-600">
            Back to Products
          </Link>
        </div>
        <h2 className="text-lg font-bold mb-2">Shopping Cart</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Item Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">${item.price}</td>
                  <td className="p-2">{item.quantity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-2 text-center">No items in the cart</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCart;
