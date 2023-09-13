import React from "react";
import axios  from "axios"; 
import { useState,useEffect } from "react";



function SummaryCart(){
    const [QteProduct,SetQteProduct] = useState(0); 

function increase_qte(){
  
}
function decrease_qte(){

}
    return( 
        <>
          <div
        className="lg:w-1/2 md:w-full w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800
   overflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
        id="scroll"
        style={{ width: "90%" }}
      >
        <div
          className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer"
          
        >
        </div>
        <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
          Summury
        </p>
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
          <div className="md:w-4/12 2xl:w-1/4 w-full">
            <img
              src="https://i.ibb.co/SX762kX/Rectangle-36-1.png"
              alt="Black Leather Bag"
              className="h-full object-center object-cover md:block hidden"
            />
            <img
              src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg"
              alt="Black Leather Bag"
              className="md:hidden w-full h-full object-center object-cover"
            />
          </div>
          <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
            <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
              RF293
            </p>
            <div className="flex items-center justify-between w-full pt-1">
              <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                North wolf bag
              </p>
              <div className="flex items-center space-x-2">
                <input
                  className="cursor-pointer bg-primary text-white px-3 py-1 rounded-full"
                  type="button"
                  id="decrease_btn"
                  defaultValue="-"
                />
                <input
                  className="w-10 text-center border border-gray-300"
                  type="text"
                  id="quantity_product"
                  defaultValue={1}
                  maxLength={2}
                  max={10}
                />
                <input
                  className="cursor-pointer bg-primary text-white px-2 py-1 rounded-full"
                  type="button"
                  id="increase_btn"
                  defaultValue="+"
                />
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
              Height: 10 inches
            </p>
            <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
              Color: Black
            </p>
            <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
              Composition: 100% calf leather
            </p>
            <div className="flex items-center justify-between pt-5">
              <div className="flex itemms-center">
                <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                  Add to favorites
                </p>
                <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                  Remove
                </p>
              </div>
              <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                $9,000
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
          <div className="md:w-4/12 2xl:w-1/4 w-full">
            <img
              src="https://i.ibb.co/c6KyDXN/Rectangle-5-1.png"
              alt="Gray Sneakers"
              className="h-full object-center object-cover md:block hidden"
            />
            <img
              src="https://i.ibb.co/yVSpYqx/Rectangle-6.png"
              alt="Gray Sneakers"
              className="md:hidden w-full h-full object-center object-cover"
            />
          </div>
          <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
            <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
              RF293
            </p>
            <div className="flex items-center justify-between w-full pt-1">
              <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                LW sneakers
              </p>
              <div className="flex items-center space-x-2">
                <input
                  className="cursor-pointer bg-primary text-white px-3 py-1 rounded-full"
                  type="button"
                  id="decrease_btn"
                  defaultValue="-"
                />
                <input
                  className="w-10 text-center border border-gray-300"
                  type="text"
                  id="quantity_product"
                  defaultValue={1}
                  maxLength={2}
                  max={10}
                />
                <input
                  className="cursor-pointer bg-primary text-white px-2 py-1 rounded-full"
                  type="button"
                  id="increase_btn"
                  defaultValue="+"
                />
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
              Height: 10 inches
            </p>
            <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
              Color: Black
            </p>
            <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
              Composition: 100% calf leather
            </p>
            <div className="flex items-center justify-between pt-5">
              <div className="flex itemms-center">
                <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                  Add to favorites
                </p>
                <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                  Remove
                </p>
              </div>
              <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                $9,000
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
          <div className="md:w-4/12 2xl:w-1/4 w-full">
            <img
              src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
              alt="Black Leather Purse"
              className="h-full object-center object-cover md:block hidden"
            />
            <img
              src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
              alt="Black Leather Purse"
              className="md:hidden w-full h-full object-center object-cover"
            />
          </div>
          <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
            <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
              RF293
            </p>
            <div className="flex items-center justify-between w-full">
              <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                Luxe card holder
              </p>
              <div className="flex items-center space-x-2">
                <input
                  className="cursor-pointer bg-primary text-white px-3 py-1 rounded-full"
                  type="button"
                  id="decrease_btn"
                  defaultValue="-"
                />
                <input
                  className="w-10 text-center border border-gray-300"
                  type="text"
                  id="quantity_product"
                  defaultValue={1}
                  maxLength={2}
                  max={10}
                />
                <input
                  className="cursor-pointer bg-primary text-white px-2 py-1 rounded-full"
                  type="button"
                  id="increase_btn"
                  defaultValue="+"
                />
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
              Height: 10 inches
            </p>
            <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
              Color: Black
            </p>
            <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
              Composition: 100% calf leather
            </p>
            <div className="flex items-center justify-between pt-5">
              <div className="flex itemms-center">
                <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                  Add to favorites
                </p>
                <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                  Remove
                </p>
              </div>
              <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                $9,000
              </p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default SummaryCart; 