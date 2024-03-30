import React from "react";
import axios  from "axios";
import { useState,useEffect } from "react";
import CartItem from "./parts/cart_items";

const cart = [
  {
    id: 1,
    name: "Product 1",
    price: 20.0,
    quantity: 2,
  },
  {
    id: 2,
    name: "Product 2",
    price: 15.5,
    quantity: 1,
  },
];

function SummaryCart({product}){
    const [QteProduct, SetQteProduct] = useState(1);
    const [MaxQteProduct, SetMaxQteProduct] = useState([]);
    const [CartItems, SetCartItems] = useState([]);
    console.log(QteProduct)


  function increase_qte(){
    if(QteProduct<=0){
      SetQteProduct(1)
    }else{
      SetQteProduct(QteProduct+1)
    }
  }

  function decrease_qte(){
    if(QteProduct<=0){
      SetQteProduct(1)
    }else{
      SetQteProduct(QteProduct-1)
    }
  }
    return(
        <>
      <div className="lg:w-1/2 mr-4 md:w-full w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-slate-300 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll" style={{ width: "90%" }}>
  {/* Cart items selection */}
  <div className="Cart_items_selection">
    <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
      Shopping Cart
    </p>
    <label>
      <input type="checkbox" className=""/>
      <span>Select all items</span>
    </label>
  </div>

  {/* Cart items */}
  <div className="cart_items">
    {cart.map((item) => (
      <CartItem key={item.id} item={item} decrease_qte={decrease_qte} increase_qte={increase_qte} QteProduct={QteProduct} />
    ))}
  </div>
</div>

        </>
    )
}
export default SummaryCart;
