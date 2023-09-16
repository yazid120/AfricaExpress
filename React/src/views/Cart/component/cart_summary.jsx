import React from "react";
import axios  from "axios"; 
import { useState,useEffect } from "react";

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

function SummaryCart(){
    const [QteProduct,SetQteProduct] = useState([]);


function increase_qte(cart_key){
  SetQteProduct(QteProduct=>
    QteProduct.map((cart)=>
      cart_key === cart.id ? {...cart, product_qte: cart.quantity + 1} : cart
    )
  )
}

function decrease_qte(cart_key){
  SetQteProduct(QteProduct=>
    QteProduct.map((item)=>
      cart_key === item.id ? {...item, product_qte: item.quantity - 1} : item
    )
  )
}
    return( 
        <>
    <div className="lg:w-1/2 md:w-full w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800
   overflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
        id="scroll" style={{ width: "90%" }}>
        <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
        </div>
        <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
          Summury
        </p>
          
          {/* Cart items */} 
          <div>
          {
            cart.map((item, key)=>(
            <div key={key} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50" >
             <div className="flex items-center justify-between w-full pt-1">
              <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                North wolf bag
              </p>
              <div className="flex items-center justify-between pt-5">
            <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                price: {item.price}
              </p>
            </div>
              <div className="flex items-center space-x-2">
                {/*<input
                  className="cursor-pointer bg-primary text-white px-3 py-1 rounded-full"
                  type="button"
                  id="decrease_btn"
                  defaultValue="-" onClick={()=>decrease_qte(item.id)}
            />*/}
            <button onClick={()=>decrease_qte(item.id)}>-</button>
                {/*<input
                  className="w-10 text-center border border-gray-300"
                  type="text"
                  id="quantity_product"
                  value={item.quantity}
                  maxLength={2}
                  max={item.quantity}
                />*/}
                <div>{item.quantity}</div>
            <button onClick={()=>increase_qte(item.id)}>+</button>
                {/*
                <input
                  className="cursor-pointer bg-primary text-white px-2 py-1 rounded-full"
                  type="button"
                  id="increase_btn"
                  defaultValue="+" onClick={()=>increase_qte(item.id)} />
                  <button onClick={()=>increase_qte(item.id)}>increase</button>
                  */}

              </div>
            </div>
            
            </div>
            
            ))
          }
          </div>           
          </div>
      
        </>
    )
}
export default SummaryCart; 