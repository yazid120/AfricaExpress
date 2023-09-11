import React from "react";
import {useState,useEffect} from 'react';


let AddToCart = (e)=>{
  e.preventDefault();
  console.log('article added to cart');
}
function ShopProduct(){
  const [products,SetProduct] = useState([]);


   const api_link = "http://127.0.0.1:8000/api/product";
   useEffect(() => {
    fetch(api_link)
        .then(response => response.json())
        .then(data => SetProduct(data))
        .catch(error => console.error(error));
   }, []);
   {/* products images path uri */}
   const image_path_uri = '../src/assets/images/Products/';

  return(
    <>
     <div className="">
        <div className="">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-4">

  {
    products.map(product=>(
     <li key={product.id} className="product_el_wrapp bg-white rounded-lg p-4 shadow-md cursor-pointer">
      <img src={image_path_uri+product.image} alt={product.name} className="h-auto p-8 rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2 taxt-black">{product.name}</h3>
    <p className="text-green-600 font-semibold"><span className='text-black'>Price: </span>{product.price_unit}$</p>
    <p className="text-blue-600 font-semibold"><span className='text-black'>Quantity available:
    </span>{product.quantity}</p>
    <div className='mt-5'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded'
      onClick={AddToCart}>Add to cart</button>
    </div>
   </li>
  ))
 }
</ul>
        </div>
      </div>
    </>
  )
}

export default ShopProduct;
