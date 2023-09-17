import React from 'react';
import ReactPaginate from 'react-paginate';
import { useState,useEffect } from 'react';
import axios from 'axios';

const productData = async function(link,SetData){
  useEffect(()=>{
   axios.get(link).then(response=>{
    SetData(response.data);
   })
  },[])
}
const DeleteProduct = async function(){
  return 'delete product';
}
const UpdateProduct = async function(){
  return 'update product';
}
function ProductTable(){
  const [productelement, Setproductelement] = useState([]);
  const [pageNumber, SetPageNumber] = useState(0);
  const productsElements = productData('http://localhost:8000/api/product',Setproductelement);

  // products pagination
  const ProductPerPage = 2;
  const pageCount = Math.ceil(productelement.length / ProductPerPage);
  const offset = pageNumber * ProductPerPage;
  const currentPageData = productelement.slice(offset,ProductPerPage+offset);

  const HandlePageNumber = ({selected})=>{
    SetPageNumber(selected);
  }

  // console.log(pageNumber);
  // console.log('offset', offset)

  return(
    <>
    <div style={{
  position:'relative',
  top:'4.3rem'
}}>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className='bg-sky-600'>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
            categorie product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
            price per unite
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
            product image uri
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-dark uppercase tracking-wider">
            quantity available
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
          {currentPageData.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.categorie_prod}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price_unit}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.image}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button>update</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination */}
  <div className="mt-4">
    <ReactPaginate
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
    activeClassName='active bg-blue-500 text-white border-radius'/>
  </div>
  </div>
    </>
  )
}
export default ProductTable;

