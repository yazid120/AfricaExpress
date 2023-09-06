import React from "react";
import { useState } from "react";


function SortedCatProduct(){
  return(
    <>
    <div className="flex items-center mb-4">
        <select
          name="sort"
          id="sort"
          className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
        >
          <option value="">Default sorting</option>
          <option value="price-low-to-high">Price low to high</option>
          <option value="price-high-to-low">Price high to low</option>
          <option value="latest">Latest product</option>
        </select>
        <div className="flex gap-2 ml-auto">
          <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
            <i className="fa-solid fa-grip-vertical" />
          </div>
          <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
            <i className="fa-solid fa-list" />
          </div>
        </div>
      </div>
    </>
  )
}
export default SortedCatProduct;
