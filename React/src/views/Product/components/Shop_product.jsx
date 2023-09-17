import React from "react";
import { useState } from "react";


let logged_user = (id)=>{
  if(id === null){
    return false;
  }else{
    return true;
  }
}
let exist_cart = (cart_id)=>{
  if(cart_id === null){
    return false;
  }else{
    return true;
  }
}

let AddToCart = (e)=>{
  //e.preventDefault();
  console.log('add product');
}

function ShopProduct({products,SearchProdFilter}){
  const [productelement, Setproductelement] = useState([]);
  const image_path_uri = '../src/assets/images/Products/';

  return(
    <>
     <div className="">
        <div className="">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-4">

  {
    products.filter((val)=>{
     if(SearchProdFilter == ''){
      return val;
     }else if(val.name.toLowerCase().includes(SearchProdFilter.toLowerCase())){
      return val;
     }
    }).map(product=>(
     <li key={product.id} className="product_el_wrapp bg-white rounded-lg p-4 shadow-md cursor-pointer">
      <img src={image_path_uri+product.image} alt={product.name} className="h-auto p-8 rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2 taxt-black" value={product.name}>{product.name}</h3>
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
