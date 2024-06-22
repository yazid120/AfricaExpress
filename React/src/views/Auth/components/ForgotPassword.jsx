import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSendVerification = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/forgot-password', { email });

      if (response.data.success) {
        setSuccessMessage('We have sent you a password reset link.'); 
        setError(''); // Clear any previous error message
      } else {
        setError("We can't find a user with that email address.");
        setSuccessMessage(''); // Clear success message if any
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
      setError('Something went wrong. Please try again.');
      setSuccessMessage(''); // Clear success message if any
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Forgot Password</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSendVerification}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600
          focus:outline-none focus:bg-indigo-600">
          Send Verification Code
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

