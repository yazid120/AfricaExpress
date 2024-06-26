import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function ShopProduct({products , displayMode}){
  const [productelement, Setproductelement] = useState([]);
  const image_path_uri = '../src/assets/images/Products/';

  async function HandleProductArticle(productArticleID){
    location.href=`http://localhost:5000/product/article/${productArticleID}`;
  }

  return(
    <>
    <div className="">
        <ul className={displayMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-4' : 'flex flex-col gap-12 m-4'}>
          {products.map((product) => (
            <li
              key={product.id}
              className={displayMode === 'grid' ? 'product_el_wrapp bg-white w-full rounded-lg p-4 shadow-md cursor-pointer' :'bg-white w-full cursor-pointer rounded-lg p-4'}
              onClick={() => HandleProductArticle(product.id)}
            >
              <img src={image_path_uri + product.image} alt={product.name} className={displayMode === 'grid' ? 'h-auto p-8 rounded-t-lg h-48': 'rounded-t-lg h-36'} />
              <div className={displayMode === "grid" ? 'text-center': ''}>
                <h3 className="text-l text-center font-semibold mt-2 taxt-black" value={product.name}>
                  {product.name}
                </h3>
                <p className="text-green-600 font-semibold">
                  <span className="text-black font-bold">price: </span>
                  {product.price_unit}$
                </p>
                <p className="text-blue-600 font-semibold">
                  <span className="text-black">Quantity available:</span>
                  {product.quantity}
                </p>
             </div>
              <div className="mt-5"></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ShopProduct;
