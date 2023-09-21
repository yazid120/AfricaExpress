import React from "react";
import { useState } from "react";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";

function BrandsAdminAdd(){
  const [brandImg, SetbrandImg] = useState(null);
  const [brandName, SetbrandName] = useState('');
  const [brandDescription, SetbrandDescription] = useState('');

  {/** Handle product image **/}
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    SetbrandImg(file);
  };
  async function HandleAddBrand(e){
   e.preventDefault();
   const formData ={
    'brand_image': brandImg,
    'brand_name': brandName,
    'brand_desc': brandDescription
   }
  }
  return(
    <>
    <Navbar_admin/>

    <div style={{position:'relative',top:'4.3rem'}}>
    <div className="wrapper mx-auto max-w-md p-4">
    <div className="heading text-2xl font-bold mb-4">Add Brand</div>
    <div className="product">
      <form id="add-product-form" className="space-y-4" onSubmit={HandleAddBrand}>
        <div className="product__image relative">
          <div className="product__preview border border-gray-300 rounded h-32 w-32">
            <image />
          </div>
          <div className="product__overlay absolute top-0 left-0 h-full w-full flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100">
            <label htmlFor="product_image" className="cursor-pointer text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded">
              Upload Image
            </label>
            <input
              id="product_image"
              type="file"
              name="product_image"
              multiple="" accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="brand__desc space-y-4">
          <div className="brand__name">
            <label htmlFor="brand_name" className="block">Brand Name</label>
            <input
              type="text"
              id="brand_name"
              name="name"
              placeholder="Enter brand Name"
              className="w-full border border-gray-300 rounded px-2 py-1"
              onChange={(e)=>SetbrandName(e.target.value)}
            />
          </div>
          <div className="brand__desc">
            <label htmlFor="brand_name" className="block">brand description</label>
            <input
              type="text"
              id="brand_name"
              name="name"
              placeholder="Enter brand Name"
              className="w-full border border-gray-300 rounded px-2 py-1"
              onChange={(e)=>SetbrandDescription(e.target.value)}
            />
          </div>

          <div className="brand__add">
            <input
              type="submit"
              value="Add brand"
              className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}
export default BrandsAdminAdd;
