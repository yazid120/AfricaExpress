import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom'
import {VscAccount} from "react-icons/vsc";
import {BsBagPlusFill} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import { BsBell } from 'react-icons/bs';
import CountryList from "./components/CountryList";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


let logout = function(){
    sessionStorage.clear('user_id');
    localStorage.clear();
    document.cookie = 'Ecommerce_access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Redirect to home page
    location.replace('/');
}

let NavBar = function(){
  const [WishlistItems, setWishlistItems] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const userAuth = document.cookie.split('; ').find(row => row.startsWith('Ecommerce_access_token='));
  const [zipCode, setZipCode] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/wishlist/items/index');
        setWishlistItems(response.data);
      } catch (error) {
        console.error('Connection failed!!', error);
        }
      };
      fetchWishlistItems();
    }, []);


  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/cart/cartItems`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Connection failed!!', error);
      }
    };

    fetchCartItems();
  }, []);

  const mystyle={width:'auto', gap:'1rem'}
  return(
  <>
    <nav className="bg-gray-800">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          {/* Replace "Logo" text with your logo image */}
            <a href="/">
              <img src="http://localhost:5000/src/assets/images/logo/AfricaExpress-logo-preview.png" alt="Logo" className="h-10" />
            </a>
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
      <div className="hidden md:block">
        <div className="flex items-center space-x-4" style={mystyle}>

        <div className="flex items-center space-x-4 gap-4">
        {/* Notification item */}
        <a href="/notification" className="item_ice text-center text-gray-700 hover:text-primary transition relative">
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
            {CartItems.length}
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
        {/* {userAuth ?
          <a href="/profile" className="item_ice text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <VscAccount className="fa-regular fa-heart" />
          </div>
          <div className="item_ice_text text-xs leading-3">account</div>
        </a>
        :<></>
        } */}
        </div>
            {/* <div>
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
            </div> */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{
                  color: 'white',
                  borderRadius: '50%',
                  padding: '12px',
                  boxShadow: 'none'
                }}
              >
                <AccountCircle sx={{ fontSize: 40 }}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: '#333', // Background color of the menu
                    color: '#fff', // Text color
                    borderRadius: '10px', // Rounded corners
                    padding: '10px', // Padding inside the menu
                  },
                }}
                >
                <MenuItem onClick={handleClose} component={Link} to="/" >
                    Home
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/profile">
                    My account
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/profile">
                    Profile
                </MenuItem>

                {userAuth ?

                <MenuItem onClick={logout} component={Link} to="/">
                    logout
                </MenuItem>
                :
                <>
                <MenuItem onClick={handleClose} component={Link} to="/Signup">
                    Signup
                </MenuItem>

                <MenuItem onClick={handleClose} component={Link} to="/login">
                    login
                </MenuItem>
                </>
                }

              </Menu>
            </div>
          </Box>

            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default NavBar
