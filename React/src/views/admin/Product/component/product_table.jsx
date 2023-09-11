import React from 'react';
import ReactPaginate from 'react-paginate';
import { useState,useEffect } from 'react';
import axios from 'axios';

const productData = function(){
  const [productelement, Setproductelement] = useState([]); 
  useEffect(()=>{
   axios.get('http://localhost:8000/api/product').then(response=>{
    Setproductelement(response.data);
   })
  },[])
  return 'productelement'; 
}
console.log(productData)

function ProductTable(){
  return(
    <>
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/*{currentPageData.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
            </tr>
          ))}*/}
        </tbody>
      </table>
  <div className="mt-4">
    <ReactPaginate
    previousLabel="Previous"
    nextLabel="Next"/>
  </div>
  </div>
    </>
  )
}
export default ProductTable; 

