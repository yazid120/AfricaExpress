import React from "react";
import { useEffect,useState } from "react";
import CheckoutCart from "./component/cart_checkout";
import SummaryCart from "./component/cart_summary";

const Cart = function(){
  const [CartItems, SetCartItems] = useState([]);

  const addItemToCart = (item) => {
    e.preventDefault();
    SetCartItems([...CartItems, item]);
    console.log(CartItems);
  };

  return(
    <>
    <div className="" id="chec-div" style={{ position: "revert" }}>
  <div
    className="w-full rellative z-10 right-0 h-full overflow-x-hidden transform translate-x-0
    transition ease-in-out duration-700"
    id="checkout"
  >
    <div className="flex m-4 items-end lg:flex-row flex-col justify-end" id="cart">
     {/* Summary  */}
      <SummaryCart/>

      {/* checkout box */}
      <div className="" id="chec-div" style={{ position: "revert" }}>
        <CheckoutCart addItemToCart={addItemToCart}/>
      </div>

    </div>
  </div>
</div>
    </>
  )
}
export default Cart;
