import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";


function BrandsAdminUpdate(){
  const {id} = useParams();
  const [brandImg, SetbrandImg] = useState(null);
  const [brandInfos, SetbrandInfos] = useState({brand_name:''});
  const [brandName, SetbrandName] = useState({});
  const [isModified, SetIsModified] = useState(false);

  useEffect(()=>{
    fetch(`http://localhost:8000/api/product/brands/brand-index/${id}`)
    .then((response) => response.json())
    .then((data)=>{
      SetbrandName(data);
      SetbrandInfos({brand_name: data.brand_name});
    })
    .catch((error)=>console.error('error fetching data ',error));
  },[])

  const HandleBrandInfos = (e)=>{
    const {name,value}= e.target;
    SetbrandInfos({
      ...brandInfos,
      [name]:value
    });
    SetIsModified(true);
  }

  {/** Handle product image **/}
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    SetbrandImg(file);
  };

  async function HandleAddBrand(e){
   e.preventDefault();

   await axios.put(`http://localhost:8000/api/admin/brands/update/${id}`, brandInfos)
   .then(response=>{
    console.log(response.data);
    if(response.data['status']=='ok'){
      console.log(response.data['message']);
      location.href='http://localhost:5000/admin/brand/show';
    }
   })
  }

  console.log(brandInfos)
  return(
    <>
    <Navbar_admin/>

    <div style={{position:'relative',top:'4.3rem'}}>
    <div className="wrapper mx-auto max-w-md p-4">
    <div className="heading text-2xl font-bold mb-4">Update Brand</div>
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
              name="brand_name"
              placeholder="Enter brand Name"
              className="w-full border border-gray-300 rounded px-2 py-1"
              value={brandInfos.brand_name}
              onChange={HandleBrandInfos}
            />
          </div>

          <div className="brand__add">
            <input
              type="submit"
              value="Update brand"
              className={isModified ? 'active-button' : 'disabled-button'}
              disabled={!isModified}
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
export default BrandsAdminUpdate;
