import React from "react";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";

function ProductAdminUpdate(){
  return(
    <>
        <Navbar_admin/>

<div style={{
  position:'relative',
  top:'4.3rem'
}}>
    <div className="wrapper mx-auto max-w-md p-4">
    <div className="heading text-2xl font-bold mb-4">Add Product</div>
    <div className="product">
      <form id="add-product-form" className="space-y-4">
        <div className="product__image relative">
          <div className="product__preview border border-gray-300 rounded h-32 w-32"></div>
          <div className="product__overlay absolute top-0 left-0 h-full w-full flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100">
            <label htmlFor="product_image" className="cursor-pointer text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded">
              Upload Image
            </label>
            <input
              id="product_image"
              type="file"
              name="product_image[]"
              multiple=""
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>
        <div className="product__desc space-y-4">
          <div className="product__name">
            <label htmlFor="product_name" className="block">Product Name</label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              placeholder="Enter Product Name"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div className="product__price">
            <label htmlFor="product_price" className="block">Product Price</label>
            <input
              type="number"
              id="product_price"
              name="product_price"
              placeholder="Enter Product Price"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>

          <div className="product__quantity">
            <label htmlFor="product_price" className="block">Product quantity</label>
            <input
              type="number"
              id="product_quantity"
              name="product_quantity"
              placeholder="Enter Product quantity availble"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>

          <div className="product__categories">
            <label className="block">Category</label>
            <div className="categories space-x-4">
              <div className="category">
                <input
                  type="radio"
                  id="category_sweet_shop"
                  name="product_category"
                  defaultValue={1}
                  defaultChecked=""
                  hidden=""
                />
                <label htmlFor="category_sweet_shop" className="cursor-pointer">Sweet Shop</label>
              </div>
              <div className="category">
                <input
                  type="radio"
                  id="category_engagement"
                  name="product_category"
                  defaultValue={2}
                  hidden=""
                />
                <label htmlFor="category_engagement" className="cursor-pointer">Engagement/Marriage Events</label>
              </div>
              <div className="category">
                <input
                  type="radio"
                  id="category_social"
                  name="product_category"
                  defaultValue={3}
                  hidden=""
                />
                <label htmlFor="category_social" className="cursor-pointer">Social Events</label>
              </div>
            </div>
          </div>
          <div className="product__description">
            <label htmlFor="product_description" className="block">Product Description</label>
            <textarea
              id="product_description"
              name="product_description"
              cols={30}
              rows={5}
              placeholder="Enter Product Description"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div className="product__add">
            <input
              type="submit"
              value="Add Product"
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
export default ProductAdminUpdate;
