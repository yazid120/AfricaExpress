import React from "react";
import { useState,useEffect } from "react";
import { json, useParams } from "react-router-dom";
import axios from "axios";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";


function UserAdminUpdate(){
  const {id} = useParams();
  const [user, Setuser] = useState({});
  const [userInfos,SetUserInfos] = useState({name:'', email:''});
  const [isModified, SetIsModified] = useState(false);

  useEffect(()=>{
    fetch(`http://localhost:8000/api/admin/user/index/${id}`)
    .then((response)=>response.json())
    .then((data)=>{
      Setuser(data);
      SetUserInfos({name: data.name, email: data.email});
    })
    .catch((error)=>console.error('Error Featching Data', error))
  },[]);

  const HandleInputChange = (e)=>{
    const {name, value}= e.target;
    SetUserInfos({
      ...userInfos,
      [name]: value
    });
    // enable midfication status
    SetIsModified(true);
  }

  async function HandleUpdateUser(e){
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/admin/user/update/${id}`,userInfos)
    .then(response=>{
     if(response.data['status'] == 'ok' && response.data['message'] == 'user updated successfuly'){
      location.href='http://localhost:5000/admin/user/show';
     }
    })
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
              value={userInfos.name}
              onChange={HandleInputChange}
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
              value={userInfos.email}
              onChange={HandleInputChange}
            />
          </div>

          <div className="user__add">
            <input
              type="submit"
              value="Add user"
              className={isModified ? 'active-button' : 'disabled-button'}
              disabled={!isModified}
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
