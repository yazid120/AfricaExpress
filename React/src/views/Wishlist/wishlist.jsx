import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import SideBar from "./partials/sideBar";
import WishlistItem from "./partials/wishlistItems";


function GetWishlistItems(link_api,SetproductID){
  useEffect(()=>{
    axios.get(link_api).then(response=>{
    SetproductID(response.data);
  },[])

  })
}

const Wishlist = function(){

  // const HandleDeleteWishlistItem = (itemID)=>{
  //   const updateWishlist = WishlistItem.filter((item)=>item.id !== itemID)
  //   SetWishlistItem(updateWishlist);
  // }

  // const HandleWishlistItem = (itemID)=>{
  //   const updateWishlist = itemWish.filter((item)=>item.user_id !== itemID);
  // }

  return(
    <>
  <div className="container py-4 flex items-center gap-3">
    <a href="../index.html" className="text-primary text-base">
      <i className="fa-solid fa-house" />
    </a>
    <span className="text-sm text-gray-400">
      <i className="fa-solid fa-chevron-right" />
    </span>
    <p className="text-gray-600 font-medium">Profile</p>
  </div>

  <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    {/* sidebar */}
    <SideBar/>

    {/* wishlist */}
    <div className="col-span-9 space-y-4">
      {/* wishlist items */}
      <WishlistItem/>

      <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
        <div className="w-28">
          <img
            src="../assets/images/products/product10.jpg"
            alt="product 6"
            className="w-full"
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 text-xl font-medium uppercase">Sofa</h2>
          <p className="text-gray-500 text-sm">
            Availability: <span className="text-red-600">Out of Stock</span>
          </p>
        </div>
        <div className="text-primary text-lg font-semibold">$320.00</div>
        <a href="#"
          className="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border
          border-red-400 rounded transition uppercase font-roboto font-medium">
          add to cart
        </a>
        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <i className="fa-solid fa-trash" />
        </div>
      </div>
    </div>
    {/* ./wishlist */}
  </div>
</>

  )
}
export default Wishlist;
