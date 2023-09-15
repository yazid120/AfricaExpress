import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";

const Getcategories = async function (link, SetProductAdd){
  useEffect(()=>{
   axios.get(link).then(response=>{
    SetProductAdd(response.data);
   })
  },[])
}

function ProductAdmin(){
  const [Categories, SetCategories] = useState([]);
  const [productAdd, SetProductAdd] = useState([]);
  {/* Admin Product creat States */}
  const [productImage, SetProductImage] = useState(null);
  const [productName, SetProductName] = useState('');
  const [productPrice, SetProductPrice] = useState('');
  const [productQte, SetProductQte] = useState('');
  const [productCategory, SetProductCategory] = useState('');

  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     SetProductImage(URL.createObjectURL(event.target.files[1]));
  //   }
  // }

  {/** extract Categories product**/}
  const Categories_product = Getcategories('http://localhost:8000/api/admin/product/category/index',SetCategories);

  async function HandleAddProduct(e){
    e.preventDefault();
    const link_api ='http://localhost:8000/api/admin/product/create';
    const formData = {
      'Product_image_uri': productImage,
      'Product_name': productName,
      'Product_price': productPrice,
      'Product_quantity': productQte,
      'Product_Category': productCategory
    }
try{
    await axios.post(link_api,formData,
    {headers:{
      'Content-type':'multipart/format-data'
    },
  }).then(response=>{
      console.log(response.data);
    })
}catch(error){
      // console.error(error);
    }
  }

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
      <form id="add-product-form" className="space-y-4" onSubmit={HandleAddProduct}>
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
              onChange={(e)=>SetProductImage(e.target.files[0])}
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
              onChange={(e)=>SetProductName(e.target.value)}
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
              onChange={(e)=>SetProductPrice(e.target.value)}
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
              onChange={(e)=>SetProductQte(e.target.value)}
            />
          </div>

          <div className="product__categories">
            <label className="block">Category</label>
            <div className="categories space-x-4">
              <select className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
              dark:focus:border-blue-500"
              onChange={(e)=>SetProductCategory(e.target.value)}>
              {
                Categories.map((categorie, key)=>(
                  <option key={key} id={categorie.id}>{categorie.cat_name}</option>
                ))
              }
              </select>
            </div>
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
export default ProductAdmin;
