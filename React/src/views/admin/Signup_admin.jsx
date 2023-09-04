import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import Navbar_admin from "./Dashboard/partials/Navbar_admin";

let SignupAdmin = function(){
    const [name,SetAdminName] = useState(''); 
    const [email,SetAdminEmail] = useState('');
    const [password,SetAdminPassword] = useState('');
    const [repassword, SetAdminRepassword] = useState(''); 

    async function HandleAdminSignup(e){
        e.preventDefault(); 
        const DataFormat = { 
            'name':name, 
            'email':email, 
            'password':password, 
            'repassword':repassword
        }
        const api_link = 'http://127.0.0.1:8000/api/admin/signup';
        try{
        await axios.post(api_link,DataFormat).then(response=>{
            console.log(response.data);
        })
        }catch(error){

        }
    }
    return(
        <>
        <div>
        <Navbar_admin/>
        </div>
        <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg w-2/6">
        <h2 className="text-2xl font-semibold mb-4 text-black">Signup</h2>
        <form onSubmit={HandleAdminSignup} action="post">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" 
            onChange={(e)=> SetAdminName(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" 
            onChange={(e)=> SetAdminEmail(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" className="w-full border border-gray-300 p-2 rounded" 
            onChange={(e)=>SetAdminPassword(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">repeat password</label>
            <input type="password" id="password" className="w-full border border-gray-300 p-2 rounded" 
            onChange={(e)=>SetAdminRepassword(e.target.value)}/>
          </div>
          <div className="flex justify-between items-center mb-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-1/5"
            >Signup</button>
          </div> 
          <a className="text-black" href="/admin/login">already have an account!!</a>
        </form>
      </div>
    </div>
        </>
    )
}
export default SignupAdmin;