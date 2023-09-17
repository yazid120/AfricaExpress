import React, { useEffect } from "react";
import { Children,Suspense } from "react";
import { lazy } from 'react';
import { BrowserRouter, createBrowserRouter, Routes, Route, Outlet,Navigate } from "react-router-dom";
import App from "./App";
import GuestLayout from "./components/GuestLayout";
import Footer from './views/Elements/Footer';
import NavBar from './views/Elements/NavBar';
import Main from "./main";
import Home from "./views/home";
import Login from "./views/Auth/login";
import SignUp from "./views/Auth/SignUp";
import ResetPassword from "./views/Auth/ResetPassword";
import ProductArticle from "./views/Product/Part/Product_article";
import Cart from "./views/Cart/cart";
import Wishlist from "./views/Wishlist/wishlist";

const Profile = React.lazy(()=> import("./views/Profile/Profile"));
const ChangePwdProfile = React.lazy(()=> import("./views/Profile/components/ChangePwdProfile"));

import NotFound_404 from "./views/404_NotFound";


import { useNavigate } from "react-router-dom";
{/*** Admin layouts components ***/}
const Admin = React.lazy( ()=> import("./views/admin/admin"));
const LoginAdmin = React.lazy( ()=> import("./views/admin/login_admin"));
const SignupAdmin = React.lazy( ()=> import("./views/admin/Signup_admin"));
const CategorieProdAdmin = React.lazy( ()=> import("./views/admin/Categories_admin"));
const ProductAdminCreate = React.lazy( ()=> import("./views/admin/Product/Product_admin_create"));
const ProductAdminShow = React.lazy( ()=> import("./views/admin/Product/Product_admin_show"));
const ProductAdminUpdate = React.lazy( ()=> import("./views/admin/Product/Product_admin_update"));

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

  // useEffect(()=>{
  //   if(!Admin_auth){
  //     navigate('/admin/login')
  //   }
  // },[Admin_auth,navigate]);

 return(
     Admin_auth ? <Admin/>  : <Outlet/>
  )
}

 const userAuth= localStorage.getItem('user_id');
const Routing = function(){
  return(
  <Suspense>
   <Routes>
    {/* Guest Layout routes */}
    <Route path="/" element={<Guest_layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/product/article/:id" element={<ProductArticle/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/resetpassword" element={<ResetPassword/>}/>
    <Route path="/profile" element=
    {userAuth ? <Profile/> : <Navigate to={{pathname:'/login'}} replace={true}/>}/>
     <Route path="/profile/Change_password" element=
    {userAuth ? <ChangePwdProfile/> : <Navigate to={{pathname:'/login'}} replace={true}/>}/>

    <Route path="/cart" element={userAuth ? <Cart/> : <Navigate to={{pathname:'/login'}} replace={true}/>}/>
    <Route path="/Wishlist" element={<Wishlist/>}/>
    </Route>


    {/* Admin Layout routes */}
    <Route path="/admin" element={<Admin_layout/>}>
    <Route index element={<Admin/>}/>
    <Route path="/admin/login" element={<LoginAdmin/>}/>
    <Route path="/admin/signup" element={<SignupAdmin/>}/>
    <Route path="/admin/product/create" element={<ProductAdminCreate/>}/>
    <Route path="/admin/product/show" element={<ProductAdminShow/>}/>
    <Route path="/admin/product/update" element={<ProductAdminUpdate/>}/>
    <Route path="/admin/product/category" element={<CategorieProdAdmin/>}/>
    </Route>

    {/* 404 page not found route */}
    <Route path='/404' element={<NotFound_404/>}/>
    <Route path='*' element={<Navigate to='/404'/>}/>

   </Routes>
   </Suspense>
  )
}
export default Routing;

