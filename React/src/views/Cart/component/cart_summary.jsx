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
/*function Cart(){

 return(
  <div className="cart">
  {
    cart.map((product)=>{
      <SummaryCart key={product.id} product={product} />
    })
  }
 </div>
 )
}*/

function SummaryCart({product}){
    const [QteProduct, SetQteProduct] = useState(1);
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
            cart.map((item)=>(
            <div key={item.id} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50" >
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
    
            <button type="button" className="cursor-pointer bg-primary text-white px-3 py-1 rounded-full"
             onClick={()=>decrease_qte()}>-</button>
                
                <p>{QteProduct}</p> 

            <button type="button" className="cursor-pointer bg-primary text-white px-3 py-1 rounded-full"
             onClick={()=>increase_qte()}>+</button>
               
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