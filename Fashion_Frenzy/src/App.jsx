import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './Components/AuthForm';

import Home from './Components/Home'; // Create a Home component
import Footer from './Components/Footer';
import Products from './Components/Product';
import About from './Components/About';
import Head from './Components/Head';

const App = () => {
  return (
    
    <Router>
      <div className="outer-background min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(./src/Images/background.jpeg)' }}>
      
      
        <Routes>
          <Route path="/" element={<AuthForm isSignup={false} />} />
          <Route path="/signup" element={<AuthForm isSignup={true} />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
      
      <Head />
      <About />
      <Products />
      <Footer />
   </div>
    </Router>
   
  );
}

export default App;
