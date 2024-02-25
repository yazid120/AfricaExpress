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
    <SideBar/>

    {/* wishlist */}
    <div className="col-span-9 space-y-4">
      {/* wishlist items */}
      <WishlistItem/>

    </div>
  </div>
</>

  )
}
export default Wishlist;
