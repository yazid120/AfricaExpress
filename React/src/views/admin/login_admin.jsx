import React from "react";
import { useState,useEffect } from "react";
import Navbar_admin from "./Dashboard/partials/Navbar_admin";


let LoginAdmin = function(){
    return( 
        <>
        <div>
        <Navbar_admin/>
        </div>
        
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1>login admin</h1>
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}
export default LoginAdmin; 