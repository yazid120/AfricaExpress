import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";
import SideBarProfile from "./components/SideBarProfile";
import GetUser from "./components/User_Info/GetUserInfo";
import ProfileSection from "./components/ProfileSection";


let Profile = function(){
  const [user, Setuser] = useState([]);
  const UserId = localStorage.getItem('user_id');
  const User_infos = GetUser(UserId,Setuser);

  return(
    <>
    <div className="container py-4 flex items-center gap-3">
      <a href="../index.html" className="text-primary text-base">
        <i className="fa-solid fa-house" />
      </a>
      <span className="text-sm text-gray-400">
        <i className="fa-solid fa-chevron-right" />
      </span>
      <p className="text-gray-600 font-medium">Account</p>
    </div>

    {/* account wrapper */}
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      {/* sidebar */}
      <div className="col-span-3">
        <div className="px-4 py-3 shadow flex items-center gap-4 rounded">
          <div className="flex-shrink-0">
            <img
              src="../src/assets/images/Profile/default/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.webp"
              alt="profile"
              className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
            />
          </div>
          <div className="flex-grow">
            <p className="text-gray-600">Hello,</p>
            <h4 className="text-gray-800 font-medium">{user.name}</h4>
          </div>
        </div>

        {/* side bar profile */}
        <SideBarProfile/>
      </div>

      {/* info */}
      <div className="col-span-9 grid grid-cols-3 gap-4">
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Personal Profile inforamtion
            </h3>
            <a href="/profile/ProfileInformation" className="text-primary">
              Edit
            </a>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">{user.name}</h4>
            <p className="text-gray-800">{user.email}</p>
            <p className="text-gray-800">0811 8877 988</p>
          </div>
        </div>
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Shipping address
            </h3>
            <a href="#" className="text-primary">
              Edit
            </a>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">John Doe</h4>
            <p className="text-gray-800">Medan, North Sumatera</p>
            <p className="text-gray-800">20371</p>
          </div>
        </div>
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">Billing address</h3>
            <a href="#" className="text-primary">
              Edit
            </a>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">John Doe</h4>
            <p className="text-gray-800">Medan, North Sumatera</p>
            <p className="text-gray-800">20317</p>
          </div>
        </div>
        
      {/* profile section top */}
      <ProfileSection/>
      </div>
      {/* ./info */}


    </div>
    {/* ./account wrapper */}

</>
  );
}
export default Profile;
