import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";



function UserAdminUpdate(){
  const [name,SetName] = useState("");
  const [email,SetEmail] = useState("");
  const [password,SetPassword] = useState("");
  const [repassword,SetRepassword] = useState("");

  async function HandleUpdateUser(e){
    e.preventDefault();
  }
  return(
    <>
    <Navbar_admin/>
    <div style={{position:'relative',top:'4.3rem'}}>
  <div className="wrapper mx-auto max-w-md p-4">
    <div className="heading text-2xl font-bold mb-4">Update User account</div>
    <div className="product">
      <form id="add-product-form" className="space-y-4" onSubmit={HandleUpdateUser}>

        <div className="product__desc space-y-4">
          <div className="user_name">
            <label htmlFor="user_name" className="block">User Name</label>
            <input
              type="text"
              id="user_name"
              name="name"
              placeholder="Enter user Name"
              className="w-full border border-gray-300 rounded px-2 py-1"
              onChange={(e)=>SetName(e.target.value)}
            />
          </div>
          <div className="user_email">
            <label htmlFor="user_email" className="block">email address:</label>
            <input
              type="email"
              id="user_email"
              name="email"
              placeholder="Enter user Name"
              className="w-full border border-gray-300 rounded px-2 py-1"
              onChange={(e)=>SetEmail(e.target.value)}
            />
          </div>
          <div className="user_password">
            <label htmlFor="user_password" className="block">password:</label>
            <input
              type="password"
              id="user_password"
              name="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded px-2 py-1"
              onChange={(e)=>SetPassword(e.target.value)}
            />
          </div>
          <div className="user_repassword">
            <label htmlFor="user_repassword" className="block">repeate password:</label>
            <input
              type="password"
              id="user_repassword"
              name="repeate-password"
              placeholder="repeat password"
              className="w-full border border-gray-300 rounded px-2 py-1"
              onChange={(e)=>SetRepassword(e.target.value)}
            />
          </div>


          <div className="user__add">
            <input
              type="submit"
              value="Add user"
              className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}
export default UserAdminUpdate;
