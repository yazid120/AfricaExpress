import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar_admin from "../../Dashboard/partials/Navbar_admin";


const productData = async function(link,SetData){
  useEffect(()=>{
   axios.get(link).then(response=>{
    SetData(response.data);
   })
  },[])
}

function SubCategorieProdAdminShow(){
  const [SubCategories, SetSubCategories] = useState([]);
  const [pageNumber, SetPageNumber] = useState(0);
  const [isConfirmationVisible, SetConfirmationVisible] = useState(false);
  const CategoriesProduct = productData('http://localhost:8000/api/admin/product/category/subCategory', SetSubCategories);

  const HandleDeleteClick = ()=>{
    SetConfirmationVisible(true);
  }
  const HandleCancelDelete = ()=>{
    SetConfirmationVisible(false);
  }
  const HandleConfirmDelete = ()=>{
    SetConfirmationVisible(false);
  }


  return(
      <>
      <Navbar_admin/>

      <div style={{position:'relative',top:'4.3rem'}}>
<div className='flex justify-between p-4'>
    <h1 className="text-2xl font-bold mb-4">sub-Categories List</h1>
    <div className="flex gap-[2rem]">
    <Link className='border_btn text-s text-white font-semi-bold rounded p-2 flex items-center' style={{backgroundColor:'#5969ed'}}
    to="http://localhost:5000/admin/product/category/create">+ add new sub-Category</Link></div>
</div>
  <div className="flex justify-center">
    <table className="min-w-[90%] w-[90%] divide-y divide-gray-200 rounded">
      <thead>
        <tr className='bg-sky-600'>
          <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
            sub-Category name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
           category parent name
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
        {SubCategories.map((Category) => (
          <tr key={Category.id}>
            <td className="px-6 py-4 whitespace-nowrap">{Category.id}</td>
            <td className="CategoryName-cell px-6 py-4 whitespace-nowrap">{Category.sub_cat_name}</td>
            <td className="description-cell px-6 py-4 whitespace-nowrap">{Category.cat_name}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <Link className="border_btn rounded w-full flex items-center justify-center p-2" style={{backgroundColor:'#ffa5008a'}}
              to='http://localhost:5000/admin/product/update'>update</Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="border_btn rounded w-full flex items-center justify-center p-2"
               style={{backgroundColor:'#ff000096'}} onClick={HandleDeleteClick}>delete</button>
               {isConfirmationVisible && (
                  <DeleteConfirmation onCancel={HandleCancelDelete} onConfirm={HandleConfirmDelete}/>
               )
               }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

</div>
      </>
  )
}
export default SubCategorieProdAdminShow;
