import React from "react";
import { useEffect,useState } from "react";
import CheckoutCart from "./component/cart_checkout";
import SummaryCart from "./component/cart_summary";

let Cart = function(){
  return(
    <>
    <div className="" id="chec-div" style={{ position: "revert" }}>
  <div
    className="w-full rellative z-10 right-0 h-full overflow-x-hidden transform translate-x-0 
transition ease-in-out duration-700"
    id="checkout"
  >
    <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
     {/* Summary  */}
     <SummaryCart/>
      
      {/* checkout box */}
      <div className="" id="chec-div" style={{ position: "revert" }}>
      <CheckoutCart/>
      </div>

    </div>
  </div>
</div>

    </>
  )
}
export default Cart;
