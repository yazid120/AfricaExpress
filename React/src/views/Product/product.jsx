import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {useState,useEffect} from "react";
import CategorieProduct from './components/Categorie_Product';
import ShopProduct from './components/Shop_product';
import SearchBarProduct from './components/Search_Bar_product';


let Product = function(){
  const [products,SetProduct] = useState([]);
  const [CategoryFilter, SetCategoryFilter] = useState('');
  const [SearchProdFilter, SetSearchProdFilter] = useState('');
  const [pageNumber, SetPageNumber] = useState(0);

   {/** products pagination **/}
   const ProductPerPage = 3;
   const pageCount = Math.ceil(products.length / ProductPerPage);
   const offset = pageNumber * ProductPerPage;
   const currentPageData = products.slice(offset,ProductPerPage+offset);

   const HandlePageNumber = ({selected})=>{
     SetPageNumber(selected);
   }

   console.log(CategoryFilter)
  const user_id = localStorage.getItem('user_id') ?? 'null';
  const cart_id = localStorage.getItem('cart_id') ?? 'null';


   const api_link = "http://127.0.0.1:8000/api/product";

   useEffect(() => {
    fetch(api_link)
        .then(response => response.json())
        .then(data => SetProduct(data))
        .catch(error => console.error(error));
   }, []);

return(
<>
  {/* shop wrapper */}
  <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 p-4 pl-0 pb-16 items-start"
  style={{ maxWidth:'100%' }}>

    {/* sidebar Categotie products */}
    <CategorieProduct HandleCategoriasation={SetCategoryFilter}/>

    {/* drawer init and toggle */}
    <div className="text-center md:hidden">
      <button
        className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium
         rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
          focus:outline-none dark:focus:ring-blue-800 block md:hidden"
        type="button"
        data-drawer-target="drawer-example"
        data-drawer-show="drawer-example"
        aria-controls="drawer-example"
      >
      <ion-icon name="grid-outline" />
      </button>
    </div>

    {/* products */}
    <div className="col-span-3">
    <div className="flex items-center mb-4">
        <select
          name="sort"
          id="sort"
          className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary
          focus:border-primary">
          <option value="">Default sorting</option>
          <option value="price-low-to-high">Price low to high</option>
          <option value="price-high-to-low">Price high to low</option>
          <option value="latest">Latest product</option>
        </select>
      {/* Product search bar */}
      <SearchBarProduct HandleFilter={SetSearchProdFilter} SearchProdFilter/>

        <div className="flex gap-2 ml-auto">
          <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
            <i className="fa-solid fa-grip-vertical" />
          </div>
          <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
            <i className="fa-solid fa-list" />
          </div>
        </div>
      </div>
      {/*** Search Product Filter ***/}
      <ShopProduct products={currentPageData} SearchProdFilter={SearchProdFilter}/>

      {/* Product Pagination */}
  <div className="mt-4 pl-12 pr-12	">
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
    containerClassName='pagination flex justify-around items-center mt-4'
    activeClassName='active bg-blue-500 text-white rounded-full p-2 pt-0.5 pb-0.5'/>
  </div>

    </div>
  </div>
  {/* ./shop wrapper */}

</>
)
}

export default Product;

