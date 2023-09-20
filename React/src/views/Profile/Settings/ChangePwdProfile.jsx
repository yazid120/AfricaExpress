import React from "react";
import {useState} from "react";


function ChangePwdProfile(){
  const [currentPassword, SetcurrentPassword] = useState('');
  const [newPassword, SetnewPassword] = useState('');
  const [confirmNewPassword, SetconfirmNewPassword] = useState('');

  async function handleChangePassword(e){
    e.preventDefault();
    const formatData ={
      'currentPassword': currentPassword,
      'newPassword': newPassword,
      'confirmNewPassword': confirmNewPassword
    }
  }
  return(
    <>
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      {/* {successMessage && <p className="text-green-600">{successMessage}</p>} */}
      <form onSubmit={handleChangePassword}>
        <div>
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password:</label>
          <input
            type="password"
            name="currentPassword"
            onChange={(e)=>SetcurrentPassword(e.target.value)}
            className="mt-1 px-4 py-2
             border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500
              focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password:</label>
          <input
           className="mt-1 px-4 py-2
            border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500
            focus:ring focus:ring-blue-200"
            type="password"
            name="newPassword"
            onChange={(e)=>SetnewPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
          <input
          className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none
          focus:border-blue-500 focus:ring focus:ring-blue-200"
            type="password"
            name="confirmPassword"
            onChange={(e)=>SetconfirmNewPassword(e.target.value)}
          />
        </div>
        <button  type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg
         hover:bg-blue-600 transition duration-300 ease-in-out">Change Password</button>
      </form>
      {/* {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index} className="text-red-600">
              {error}
            </li>
          ))}
        </ul>
      )} */}
    </div>
    </>
  )
}
export default ChangePwdProfile;
