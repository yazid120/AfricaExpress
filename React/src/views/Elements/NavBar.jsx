import React from "react";

let NavBar = function(){
  const mystyle={
    width:'100%',
    justifyContent:'space-between'
  }
  return(
  <>
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white">Logo</a>
          </div>
          <div className="hidden md:block">

            <div className="ml-10 flex items-baseline space-x-4" style={mystyle}>
            <div style={mystyle}>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>

        <div className="flex items-center space-x-4">
        {/* Cart item */}
        <a href="/cart" className="text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <i className="fa-solid fa-bag-shopping" />
          </div>
          <div className="text-xs leading-3">Cart</div>
          <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            2
          </div>
        </a>
        {/* wishlist item */}
        <a href="/wishlist" className="text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <i className="fa-regular fa-heart" />
          </div>
          <div className="text-xs leading-3">Wishlist</div>
          <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            8
          </div>
        </a>
        </div>

            <div>
              <a href="/SignUp" className="text-gray-300 hover:bg-gray-700
              hover:text-white px-3 py-2 rounded-md text-sm font-medium">Signup</a>
              <a href="/login" className="text-gray-300 hover:bg-gray-700
               hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default NavBar
