import React from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";
import CategorieProduct from './components/Categorie_Product';
import ShopProduct from './components/Shop_product';
import SortedCatProduct from './components/Sorted_Categorie_Product';



let Product = function(){
  const [products,SetProduct] = useState([]);
  const [CategoryFilter, SetCategoryFilter] = useState('all');
  
  const user_id = localStorage.getItem('user_id') ?? 'null';
  const cart_id = localStorage.getItem('cart_id') ?? 'null';

  // console.log('user'+logged_user(user_id));
  // console.log('cart'+exist_cart(cart_id));

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
  style={{
    maxWidth:'100%'
  }}>

    {/* sidebar Categotie products */}
    <CategorieProduct/>

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
      <SortedCatProduct/>

      <ShopProduct products={products}/>
    </div>
  </div>
  {/* ./shop wrapper */}

</>
)
}

export default Product;

