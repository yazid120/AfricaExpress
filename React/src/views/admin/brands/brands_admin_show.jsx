import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";
import DelteConfirmatonPop from "../component/pop/delete_confirmation";

const brandData = async function(link,SetData){
  useEffect(()=>{
   axios.get(link).then(response=>{
    SetData(response.data);
   })
  },[])
}
function BrandAdminShow(){
  const [brandsList, SetbrandsList] = useState([]);
  const [DelteConfirmatonPopVisible, SetDelteConfirmatonPopVisible] = useState(false);
  const BrandList = brandData('http://localhost:8000/api/product/brands/show', SetbrandsList);


  const HandleDeleteClick =(useridData)=>{
    SetDelteConfirmatonPopVisible(true);
  }
  const HandleCancelSub =()=>{
    SetDelteConfirmatonPopVisible(false);
  }
  return(
    <>
    <Navbar_admin/>
    <div style={{position:'relative',top:'4.3rem'}}>
      {
      DelteConfirmatonPopVisible && (<DelteConfirmatonPop
        onCancel={HandleCancelSub}
        onConfirm={HandleConfirmSub}/>)
    }
  <div className='flex justify-between p-4'>
      <h1 className="text-2xl font-bold mb-4">brand List</h1>
      <Link className='border_btn text-s text-white font-semi-bold rounded p-2 flex items-center'
       style={{backgroundColor:'#5969ed'}} to="http://localhost:5000/admin/user/add">+ add new user brand</Link>
  </div>
      <table className="min-w-full w-full divide-y divide-gray-200">
        <thead>
          <tr className='bg-sky-600'>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
              brand name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
              creation date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
            update
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
            delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {brandsList.map((brand) => (
            <tr key={brand.id}>
              <td className="px-6 py-4 whitespace-nowrap">{brand.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{brand.brand_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{brand.created_at}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link className="border_btn rounded flex items-center justify-center p-2"
                style={{backgroundColor:'#ffa5008a'}} onClick={()=>HandleUpdateUserAdmin(brand.id)}>update</Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="border_btn rounded flex items-center justify-center p-2"
                 style={{backgroundColor:'#ff000096'}} onClick={()=>HandleDeleteClick(brand.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  )
}
export default BrandAdminShow;
