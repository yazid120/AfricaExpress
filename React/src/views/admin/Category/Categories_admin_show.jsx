import React from "react";
import { useState,useEffect } from "react";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";
import DeleteConfirmation from "../DeleteMessage";


const productData = async function(link,SetData){
    useEffect(()=>{
     axios.get(link).then(response=>{
      SetData(response.data);
     })
    },[])
}
function CategorieProdAdminShow(){
    const [Categories, SetCategories] = useState([]);
    const [pageNumber, SetPageNumber] = useState(0);
    const [isConfirmationVisible, SetConfirmationVisible] = useState(false); 
    const CategoriesProduct = productData('http://localhost:8000/api/admin/product/category/index', SetCategories);
    
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
      <h1 className="text-2xl font-bold mb-4">Category List</h1>
      <Link className='rounded p-2 flex items-center' style={{backgroundColor:'#5969ed'}} 
      to="http://localhost:5000/admin/product/category/create">+ add new Category</Link>
  </div>
      <table className="min-w-full w-full divide-y divide-gray-200">
        <thead>
          <tr className='bg-sky-600'>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
              Category name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
             description
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
          {Categories.map((Category) => (
            <tr key={Category.id}>
              <td className="px-6 py-4 whitespace-nowrap">{Category.id}</td>
              <td className="CategoryName-cell px-6 py-4 whitespace-nowrap">{Category.cat_name}</td>
              <td className="description-cell px-6 py-4 whitespace-nowrap">{Category.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link className="rounded w-full flex items-center justify-center p-2" style={{backgroundColor:'orange'}}
                to='http://localhost:5000/admin/product/update'>update</Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="rounded w-full flex items-center justify-center p-2"
                 style={{backgroundColor:'red'}} onClick={HandleDeleteClick}>delete</button>
                 {isConfirmationVisible && (
                    <DeleteConfirmation onCancel={HandleCancelDelete} onConfirm={HandleConfirmDelete}/>
                 )
                 }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination */}
  <div className="mt-4">
    {/*<ReactPaginate
    color="primary"
    previousLabel="Previous"
    nextLabel="Next"
    pageCount={pageCount}
    shape="rounded"
    onPageChange={HandlePageNumber}
    count={10}
    variant="outlined"
    previousLinkClassName='px-3 py-2 border rounded-md'
    nextLinkClassName='px-3 py-2 border rounded-md'
    disabledClassName='text-grey-300'
    containerClassName='pagination flex justify-content mt-4'
          activeClassName='active bg-blue-500 text-white border-radius'/>*/}
  </div>
  </div>
        </>
    )
}
export default CategorieProdAdminShow; 