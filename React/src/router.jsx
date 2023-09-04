import React, { useEffect } from "react";
import { Children,Suspense } from "react";
import { lazy } from 'react';
import { BrowserRouter, createBrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import GuestLayout from "./components/GuestLayout";
import Footer from './views/Elements/Footer';
import NavBar from './views/Elements/NavBar';
import Main from "./main";
import Home from "./views/home";
import Login from "./views/Auth/login";
import SignUp from "./views/Auth/SignUp";
import ResetPassword from "./views/Auth/ResetPassword";
import Product from "./views/product";

import { useNavigate } from "react-router-dom";
{/*** Admin layouts components ***/}
const Admin = React.lazy( ()=> import("./views/admin/admin"));
const LoginAdmin = React.lazy( ()=> import("./views/admin/login_admin"));
const SignupAdmin = React.lazy( ()=> import("./views/admin/Signup_admin"));

function Guest_layout(){
  return(
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

function Admin_layout(){
  const navigate = useNavigate();
  const Admin_auth = localStorage.getItem('admin_id');

  useEffect(()=>{
    if(!Admin_auth){
      navigate('/admin/login')
    }
  },[Admin_auth,navigate]);

  return(
    Admin_auth ? <Outlet/> : <LoginAdmin/>
  )
}
const Routing = function(){
  return(
  <Suspense>
   <Routes>
    {/* Guest Layout routes */}
    <Route path="/" element={<Guest_layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/resetpassword" element={<ResetPassword/>}/>
    <Route path="/product" element={<Product/>}/>
    </Route>

    {/* Admin Layout routes */}
    <Route path="/admin" element={<Admin_layout/>}>
    <Route index element={<Admin/>}/>
    <Route path="/admin/login" element={<LoginAdmin/>}/>
    <Route path="/admin/signup" element={<SignupAdmin/>}/>
    </Route>

   </Routes>
   </Suspense>
  )
}
export default Routing;

