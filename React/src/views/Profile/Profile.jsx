import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";


async function GetUser(UserId, SetUserId){
    useEffect(()=>{
     axios.get(`http://localhost:8000/api/profile/${UserId}`).then(response=>{
      SetUserId(response.data);
     })
    },[])
}

let Profile = function(){
  const [user, Setuser] = useState([]);
  const UserId = localStorage.getItem('user_id');
  const User_infos = GetUser(UserId,Setuser);
  console.log(user)

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
    {/* ./breadcrumb */}
    {/* account wrapper */}
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      {/* sidebar */}
      <div className="col-span-3">
        <div className="px-4 py-3 shadow flex items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src="../assets/images/avatar.png"
              alt="profile"
              className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
            />
          </div>
          <div className="flex-grow">
            <p className="text-gray-600">Hello,</p>
            <h4 className="text-gray-800 font-medium">{user.name}</h4>
          </div>
        </div>
        <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
          <div className="space-y-1 pl-8">

            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              Profile information
            </a>
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              Manage addresses
            </a>
            <a
              href="/profile/Change_password"
              className="relative hover:text-primary block capitalize transition"
            >
              Change password
            </a>
          </div>
          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative hover:text-primary block font-medium capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-solid fa-box-archive" />
              </span>
              My order history
            </a>
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              My returns
            </a>
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              My Cancellations
            </a>
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              My reviews
            </a>
          </div>
          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative hover:text-primary block font-medium capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-regular fa-credit-card" />
              </span>
              Payment methods
            </a>
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              voucher
            </a>
          </div>
          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative hover:text-primary block font-medium capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-regular fa-heart" />
              </span>
              My wishlist
            </a>
          </div>
          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative hover:text-primary block font-medium capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-regular fa-arrow-right-from-bracket" />
              </span>
              Logout
            </a>
          </div>
        </div>
      </div>
      {/* ./sidebar */}
      {/* info */}
      <div className="col-span-9 grid grid-cols-3 gap-4">
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Personal Profile inforamtion
            </h3>
            <a href="#" className="text-primary">
              Edit
            </a>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">John Doe</h4>
            <p className="text-gray-800">example@mail.com</p>
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
            <p className="text-gray-800">0811 8877 988</p>
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
            <p className="text-gray-800">0811 8877 988</p>
          </div>
        </div>
      </div>
      {/* ./info */}
    </div>
    {/* ./account wrapper */}

</>
  );
}
export default Profile;
