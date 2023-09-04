import React from "react";
import axios from "axios"; 
import { useState,useEffect } from "react";
import Navbar_admin from "./Dashboard/partials/Navbar_admin";


let LoginAdmin = function(){
    const [email, SetAdminEmail] = useState(''); 
    const [password, SetAdminPassword] = useState('');

    async function HandleAdminLogin(e){
     e.preventDefault(); 
     let DataFormat = {
        'email':email, 
        'password':password
     }
     const link_api='http://127.0.0.1:8000/api/admin/login'; 
     try{
     await axios.post(link_api,DataFormat).then(response=>{
        //console.log(response.data);
        if(response.data['message'] == 'admin logged successfuly' && response.data['status'] == 'success'){
          localStorage.setItem('admin_id',response.data['admin_id']);
          window.location.replace('/admin'); 
        }
     })
    }catch(error){
     //error handling
    }
    }

    return( 
        <>
        <div>
        <Navbar_admin/>
        </div>
        
        <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg w-2/6">
        <h2 className="text-2xl font-semibold mb-4 text-black">Login</h2>
        <form onSubmit={HandleAdminLogin} action='post'>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" 
            onChange={(e)=>SetAdminEmail(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" className="w-full border border-gray-300 p-2 rounded"
             onChange={(e)=>SetAdminPassword(e.target.value)}/>
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-1/5"
            >Login</button>
          </div>
          <a className="text-black" href="/admin/signup">don't have an account yet!!</a>
        </form>
      </div>
    </div>
        </>
    )
}
export default LoginAdmin; 