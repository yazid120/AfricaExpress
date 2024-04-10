import React from "react";
import { useEffect } from "react";
import {VscAccount} from "react-icons/vsc";
import {BsBagPlusFill} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import { BsBell } from 'react-icons/bs';
import { useState } from "react";
import CountryList from "./components/CountryList";


let logout = function(){
    sessionStorage.clear('user_id');
    localStorage.clear();
    document.cookie = 'Ecommerce_access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Redirect to home page
    location.replace('/');
}

let NavBar = function(){
  const [WishlistItems, setWishlistItems] = useState([]);
  const userAuth = document.cookie.split('; ').find(row => row.startsWith('Ecommerce_access_token='));
  const [zipCode, setZipCode] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleMouseEnter = () => {
    setShowForm(true);
  };

  const handleMouseLeave = () => {
    setShowForm(false);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted ZIP code:', zipCode);
  };

  const GetWishlistItems = function(){
    useEffect(() => {
      try {
        axios.get(`http://127.0.0.1:8000/api/wishlist/items/index`)
          .then((response) => {
            setWishlistItems(response.data);
            console.log(WishlistItems);
          })
          .catch((error) => {
            console.error('Connection failed!!', error);
          });
      } catch (error) {
        // error failed api connection
        console.error('Connection failed !!');
      }
    }, []);
  }
  const mystyle={width:'auto', gap:'1rem'}
  return(
  <>
    <nav className="bg-gray-800">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white">Logo</a>
          </div>
        <div className="relative" onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave} >
      <p className="text-white">Deliver to:</p>
  {showForm && (
    <div
      className="absolute top-16 rounded bg-white p-4 z-10"
      style={{ zIndex: 10, position: 'relative' }}>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-gray-700">
            ZIP Code:
          </label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={handleZipCodeChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Select Country:</label>
          <CountryList />
        </div>
        <button
          type="submit"
          className="bg-primary bg-orange-600 w-full text-white px-4 py-2 rounded-md hover:bg-primary-dark
           transition duration-300">
          Save
        </button>
      </form>
    </div>
  )}
</div>
      <div style={mystyle} className="navigation_items">
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4" style={mystyle}>

        <div className="flex items-center space-x-4 gap-4">
        {/* Notification item */}
        <a href="/cart" className="item_ice text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <BsBell className="fa-solid fa-bag-shopping" />
          </div>
          <div className="item_ice_text text-xs leading-3">notification</div>
          <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center
            bg-red-500 text-white text-xs">
            0
          </div>
        </a>
        {/* Cart item */}
        <a href="/cart" className="item_ice text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <BsBagPlusFill className="fa-solid fa-bag-shopping" />
          </div>
          <div className="item_ice_text text-xs leading-3">Cart</div>
          <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center
            bg-red-500 text-white text-xs">
            2
          </div>
        </a>
        {/* wishlist item */}
        <a href="/wishlist" className="item_ice text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <AiOutlineHeart className="fa-regular fa-heart" />
          </div>
          <div className="item_ice_text text-xs leading-3">Wishlist</div>
            <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center
            bg-red-500 text-white text-xs">
              {WishlistItems.length}
            </div>
        </a>
        {/* account item */}
        {userAuth ?
          <a href="/profile" className="item_ice text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <VscAccount className="fa-regular fa-heart" />
          </div>
          <div className="item_ice_text text-xs leading-3">account</div>
        </a>
        :<></>
        }
        </div>
            <div>
            {!userAuth ?
            <>
              <a href="/SignUp" className="text-gray-300 hover:bg-gray-700
              hover:text-white px-3 py-2 rounded-md text-sm font-medium">Signup</a>
              <a href="/login" className="text-gray-300 hover:bg-gray-700
               hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
            </>
               :
            <>
             <a onClick={logout} className="logout text-gray-300 hover:bg-gray-700 cursor-pointer
               hover:text-white px-3 py-2 rounded-md text-sm font-medium">logout</a>
            </>
            }
            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default NavBar
