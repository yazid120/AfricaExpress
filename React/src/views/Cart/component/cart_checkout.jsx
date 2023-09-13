import React from "react";

function CheckoutCart(){
    return(
        <>
        
  <div
    className="w-full rellative z-10 right-0 h-full overflow-x-hidden transform translate-x-0 
transition ease-in-out duration-700"
    id="checkout"
  >
    <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">

      <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
        <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
          <div>
            <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
              Summary
            </p>
            <div className="flex items-center justify-between pt-16">
              <p className="text-base leading-none text-gray-800 dark:text-white">
                Subtotal
              </p>
              <p className="text-base leading-none text-gray-800 dark:text-white">
                $9,000
              </p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800 dark:text-white">
                Shipping
              </p>
              <p className="text-base leading-none text-gray-800 dark:text-white">
                $30
              </p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800 dark:text-white">
                Tax
              </p>
              <p className="text-base leading-none text-gray-800 dark:text-white">
                $35
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
              <p className="text-2xl leading-normal text-gray-800 dark:text-white">
                Total
              </p>
              <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                $10,240
              </p>
            </div>
            <button
              
              className="text-base leading-none w-full py-5 bg-primary 
              border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 
              text-white dark:hover:bg-gray-700"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

        </>
    )
}
export default CheckoutCart;