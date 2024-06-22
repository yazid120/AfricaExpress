import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams ,useNavigate } from 'react-router-dom'; // Import useParams and useHistory
import axios from 'axios';

let ResetPassword = function(){

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [signature, setSignature] = useState("");
  const [expiration, setExpiration] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(()=>{
    setEmail(searchParams.get('email'));
    setToken(searchParams.get('token'));
    setSignature(searchParams.get('sig'));
    setExpiration(searchParams.get('exp'));
  },[]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setResetError("Passwords don't match.");
      return;
    }

    try {
      // Example: API endpoint to reset password
      const response = await axios.post(
        'http://127.0.0.1:8000/api/reset-password',
        { token, newPassword: password }
      );
      // Handle successful password reset
      if (response.data.success) {
        setResetSuccess(true);
      } else {
        setResetError(response.data.message);
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setResetError('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    if (resetSuccess) {
      const timer = setTimeout(() => {
        navigate('/login', { replace: true });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [resetSuccess]);

  if (resetSuccess) {
    return (
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-6">Password Reset Successfully!</h1>
        <p>Your password has been reset successfully.</p>
      </div>
    );
  }

    return(
        <>
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Reset Password</h1>
      {resetError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          {resetError}
        </div>
      )}
      <form onSubmit={handleResetPassword}>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Reset Password
        </button>
      </form>
    </div>
        </>
    )
}
export default ResetPassword;
