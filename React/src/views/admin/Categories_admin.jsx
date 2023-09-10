import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Navbar_admin from "./Dashboard/partials/Navbar_admin";


function CategorieProdAdmin(){
  const [nameCategory,SetNameCategory] = useState(''); 
  const [descriptionCategory,SetdescriptionCategory] = useState(''); 

  async function HandleCategoryProduct(e){
    e.preventDefault();
    const FormData = { 
      'Category_name':nameCategory, 
      'description_Category':descriptionCategory
    }
    console.log(FormData);
  }

  return(
    <>
       <Navbar_admin/>

<div style={{
  position:'relative', 
  top:'4.3rem'
}}>
  <div className="wrapper mx-auto max-w-md p-4">
    <div className="heading text-2xl font-bold mb-4">Add Product Category</div>
    <form id="add-product-form" className="space-y-4" onSubmit={HandleCategoryProduct}>
          <div className="product__quantity">
            <label htmlFor="product_price" className="block">Category name</label>
            <input
              type="text"
              id="Category_name"
              name="Category_name"
              placeholder="Enter Category name"
              className="w-full border border-gray-300 rounded px-2 py-1"
              onChange={(e)=>SetNameCategory(e.target.value)}
            />
          </div>

          <div className="product__Category_description">
            <label htmlFor="product_Category_description" className="block">Product Category Description</label>
            <textarea
              id="product_Category_description"
              name="product_Category_description"
              cols={30}
              rows={5}
              placeholder="Enter Product Description"
              className="w-full border border-gray-300 rounded px-2 py-1"
              onChange={(e)=>SetdescriptionCategory(e.target.value)}
            />
          </div>
          <div className="product__add">
            <input
              type="submit"
              value="Add Product"
              className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            />
          </div>
    </form>
    </div>
  </div>
    </>
  )
}
export default CategorieProdAdmin; 
