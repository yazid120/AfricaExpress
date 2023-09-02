import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';

let Product = function(){
  const [products,SetProduct] = useState([]);


   const api_link = "http://127.0.0.1:8000/api/product";
   useEffect(() => {
    fetch(api_link)
        .then(response => response.json())
        .then(data => SetProduct(data))
        .catch(error => console.error(error));
   }, []);

return(
<>
<h1>Product section</h1>
<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{
  products.map(product=>(
   <li key={product.id} className="bg-white rounded-lg p-4 shadow-md">
    <img src='../images/Products/appleWatch_AM.png' alt={product.name} className="w-full h-auto" />
    <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
    <p className="text-green-600 font-semibold">{product.price_unit}</p>
    <p className="text-blue-600 font-semibold">{product.quantity}</p>
   </li>
  ))
}

</ul>
</>
)
}

export default Product;

