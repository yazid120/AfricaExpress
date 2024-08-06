import React from "react";
import {useState} from "react";

function SideBarProfile(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="lg:hidden flex justify-end mb-4">
        <button
          onClick={toggleSidebar}
          className="text-primary focus:outline-none"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div
        className={`mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600 lg:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 pl-8">
          <a
            href="/profile/ProfileInformation"
            className="relative hover:text-primary block capitalize transition"
          >
            Profile information
          </a>
          <a
            href="/profile/ManageAddress"
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
            href="/orders"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-solid fa-box-archive" />
            </span>
            My orders
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
            href="/wishlist"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-regular fa-heart" />
            </span>
            wishlist
          </a>
          <a
            href="/wishlist"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-regular fa-heart" />
            </span>
            cart
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
    </>
  );
}

export default SideBarProfile;
