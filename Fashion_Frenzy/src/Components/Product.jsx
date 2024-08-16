import React, { useEffect, useState } from 'react';

// Create a context for the cart state
export const CartContext = React.createContext();

const Product = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trackSuitsResponse = await fetch('http://localhost:3002/track-suits');
        const trackSuits = await trackSuitsResponse.json();

        const tShirtsResponse = await fetch('http://localhost:3002/t-shirts');
        const tShirts = await tShirtsResponse.json();

        const bagsResponse = await fetch('http://localhost:3002/bags');
        const bags = await bagsResponse.json();

        const shoesResponse = await fetch('http://localhost:3002/shoes');
        const shoes = await shoesResponse.json();

        // Combine all products into a single array
        const allProducts = [...trackSuits, ...tShirts, ...bags, ...shoes];
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.name === product.name);
      if (existingProduct) {
        return prevCart.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart }}>
         <div className="container mx-auto">
        <h1 class="text-5xl font-bold text-center underline text-black bg-[#f3c9a3] p-4 mx-auto">ALL PRODUCTS</h1>
        </div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">{product.name}</h5>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-lg font-bold mb-4">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#f3c9a3] text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default Product;
