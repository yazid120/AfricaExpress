import React, { useState,useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi"

function SearchBarProduct({HandleFilter}){

  return(
    <>
    <div className="w-full max-w-xl ml-4 relative flex">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
      <input type="text" name="search" id="search"
             className="w-full border border-primary border-r-0 pl-8 py-2 pr-3 rounded-l-md
             focus:outline-none hidden md:flex" placeholder="search"
             onChange={(event)=>HandleFilter(event.target.value)}/>
      <button
        className="flex items-center bg-blue border border-primary text-white px-8 rounded-r-md hover:bg-transparent
         hover:text-primary transition hidden md:flex" style={{backgroundColor:'blue'}}>Search</button>
    </div>
    </>
  )
}
export default SearchBarProduct;
