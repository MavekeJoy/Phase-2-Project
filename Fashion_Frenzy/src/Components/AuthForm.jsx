import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const AuthForm = ({ isSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      if (isSignup) {
        // Sign up user
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Sign in user
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/merged'); // Redirect to merged page after authentication
      setEmail(''); // Clear form fields
      setPassword('');
    } catch (error) {
      console.error("Authentication error: ", error);
      setError(error.message); // Display the error message
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/033/086/160/small_2x/generative-ai-cloth-store-aesthetic-background-of-clothes-hanging-on-hangers-muted-neutral-colors-photo.jpg')"
      }}
    >
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">{isSignup ? 'Sign Up' : 'Sign In'}</h2>
          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-600 border border-red-200 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Email Address"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#f3c9a3] text-white rounded hover:bg-green-600"
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </button>
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="w-full py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
