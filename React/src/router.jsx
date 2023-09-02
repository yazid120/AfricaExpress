import React from "react";
import { Children,Suspense } from "react";
import { BrowserRouter, createBrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GuestLayout from "./components/GuestLayout";
import Main from "./main";
import Home from "./views/home";
import Login from "./views/login";
import SignUp from "./views/SignUp";
import Product from "./views/product";

const Routing = function(){
  return(
  <Suspense>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/product" element={<Product/>}/>
   </Routes>
   </Suspense>
  )
}
export default Routing;

