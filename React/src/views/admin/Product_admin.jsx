import React from "react";
import { useState,useEffect } from "react";
import Navbar_admin from "./Dashboard/partials/Navbar_admin";



function ProductAdmin(){
  return(
    <>
    <Navbar_admin/>


<div>
  <div className="modal__overlay">
    <div className="modal">
      <div className="modal__msg" />
      <div className="modal__cta">
        <button className="btn modal__btn" type="button">
          OK
        </button>
      </div>
    </div>
  </div>
  <div className="wrapper">
    <div className="heading">Add Product</div>
    <div className="product">
      <form id="add-product-form">
        <div className="product__image">
          <div className="product__preview"></div>
          <div className="product__overlay">
            <input
              id="product_image"
              type="file"
              name="product_image[]"
              multiple=""
              accept="image/*"
            />
          </div>
        </div>
        <div className="product__desc">
          <div className="product__desc__container">
            <div className="product__name">
              <label htmlFor="">Product Name</label>
              <input
                type="text"
                name="product_name"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="product__price">
              <label htmlFor="">Product Price</label>
              <input
                type="number"
                name="product_price"
                placeholder="Enter Product Price"
              />
            </div>
            <div className="product__categories">
              <label htmlFor="">Category</label>
              <div className="categories">
                <div className="category checked">
                  <input
                    type="radio"
                    name="product_category"
                    defaultValue={1}
                    defaultChecked=""
                    hidden=""
                  />
                  Sweet Shop
                </div>
                <div className="category">
                  <input
                    type="radio"
                    name="product_category"
                    defaultValue={2}
                    hidden=""
                  />
                  Engagement/Marriage Events
                </div>
                <div className="category">
                  <input
                    type="radio"
                    name="product_category"
                    defaultValue={3}
                    hidden=""
                  />
                  Social Events
                </div>
              </div>
            </div>
            <div className="product__description">
              <label htmlFor="">Product Description</label>
              <textarea
                name="product_description"
                cols={30}
                rows={5}
                placeholder="Enter Product Description"
                defaultValue={""}
              />
            </div>
            <div className="product__add">
              <input type="submit" defaultValue="Add Product" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
</>
  )
}
export default ProductAdmin;
