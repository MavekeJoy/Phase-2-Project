import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4">
      
      
      <Link to="./MergedPage.jsx">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Start Now
        </button>
      </Link>
    </div>
  );
};

export default Home;