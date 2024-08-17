import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Product = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const location = useLocation();

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

        const allProducts = [...trackSuits, ...tShirts, ...bags, ...shoes];
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('filter');
    setFilter(category || 'all');
  }, [location.search]);

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 't-shirts') return product.category === 't-shirt';
    if (filter === 'shoes') return product.category === 'shoes';
    if (filter === 'jumpsuits') return product.category === 'jumpsuit';
    if (filter === 'bags') return product.category === 'bag';
    return false;
  });

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/b4/2e/53/b42e5307927c62c21985514a5be5cf83.jpg')" }}>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#f3c9a3]">AVAILABLE PRODUCTS</h1>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-4 text-center">
          <Link to="/shopping-cart" className="bg-[#f3c9a3] text-white py-2 px-4 rounded hover:bg-blue-600">
            Wishlist({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h5 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h5>
                <p className="text-gray-700 text-sm sm:text-base mb-2">{product.description}</p>
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
    </div>
  );
}

export default Product;
