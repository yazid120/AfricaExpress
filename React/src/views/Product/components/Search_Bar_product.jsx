import React, { useState,useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi"

function SearchBarProduct({HandleFilter}){

  return(
    <>
    <div className="w-full max-w-2xl ml-4 relative flex">
      <input type="text" name="search" id="search"
             className="w-full border border-primary border-r-0 pl-8 py-2 pr-3 rounded-l-md rounded
             focus:outline-none hidden md:flex" placeholder="search"
             onChange={(event)=>HandleFilter(event.target.value)}/>

        <span className="absolute right-4 top-3 text-lg text-gray-400">
          <BiSearchAlt/>
        </span>
    </div>
    </>
  )
}
export default SearchBarProduct;
