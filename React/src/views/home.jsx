import React from "react";
import { useState } from "react";
import Product from './Product/product'

let Home = function(){
    return(
        <>
        <h1>Home page</h1>
        {/* Product/Category part */}
        <Product/>
        </>
    )
}
export default Home;
