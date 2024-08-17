import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './Components/AuthForm';
import MergedPage from './Components/MergedPage';
import Product from './Components/Product';
import ShoppingCart from './Components/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} /> 
        <Route path="/login" element={<AuthForm isSignup={false} />} /> 
        <Route path="/merged" element={<MergedPage />} />
        <Route path="/products" element={<Product cart={cart} setCart={setCart} />} /> 
        <Route path="/shopping-cart" element={<ShoppingCart cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
