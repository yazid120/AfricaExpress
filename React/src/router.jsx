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

{/*** Profile layouts components/pages ***/}
const Profile = React.lazy(()=> import("./views/Profile/Profile"));
const ChangePwdProfile = React.lazy(()=> import("./views/Profile/Settings/ChangePwdProfile"));
const OrderHistory = React.lazy(()=> import("./views/Profile/Settings/OrderHistory"));
const ManageAddress = React.lazy(()=> import("./views/Profile/Settings/ManageAddress"));
const ProfileInformation = React.lazy(()=> import("./views/Profile/Settings/ProfileInformation"));
const ContactDetails = React.lazy(()=>import("./views/Profile/components/ContactDetails"));

import NotFound_404 from "./views/404_NotFound";

{/*** Admin layouts components/pages ***/}
const Admin = React.lazy( ()=> import("./views/admin/admin"));
const LoginAdmin = React.lazy( ()=> import("./views/admin/login_admin"));
const SignupAdmin = React.lazy( ()=> import("./views/admin/Signup_admin"));
const UserAdminShow = React.lazy( ()=> import("./views/admin/User/user_admin_show"));
const UserAdminCreate = React.lazy( ()=> import("./views/admin/User/user_admin_create"));
const UserAdminUpdate = React.lazy( ()=> import("./views/admin/User/user_admin_update"));
const UserAdminDelete = React.lazy( ()=>import("./views/admin/User/user_admin_delete")); 

const CategorieProdAdminCreate = React.lazy( ()=> import("./views/admin/Category/Categories_admin_create"));
const CategorieProdAdminShow = React.lazy( ()=> import("./views/admin/Category/Categories_admin_show"));
const CategorieProdAdminUpdate = React.lazy( ()=> import("./views/admin/Category/Categories_admin_update"));

const ProductAdminCreate = React.lazy( ()=> import("./views/admin/Product/Product_admin_create"));
const ProductAdminShow = React.lazy( ()=> import("./views/admin/Product/Product_admin_show"));
const ProductAdminUpdate = React.lazy( ()=> import("./views/admin/Product/Product_admin_update"));

const BrandAdminShow = React.lazy( ()=> import("./views/admin/brands/brands_admin_show"));
const BrandsAdminAdd = React.lazy( ()=> import("./views/admin/brands/brands_admin_create"));


function Guest_layout(){
  return(
    <>
    <NavBar/>
     <Outlet/>
    <Footer/>
    </>
  )
}

function Auth_layout(){
  const User_auth = localStorage.getItem('user_id');
  return(
    <>
    <NavBar/>
    {User_auth ?
      <Outlet/>:
      <Navigate to={{pathname:'/login'}}/>
    }
    <Footer/>
    </>
  )
}

function Admin_layout(){
  const Admin_auth = localStorage.getItem('admin_id');
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
    <Route path="/cart" element={userAuth ? <Cart/> : <Navigate to={{pathname:'/login'}} replace={true}/>}/>
    <Route path="/Wishlist" element={userAuth ? <Wishlist/> : <Navigate to={{pathname:'/login'}} replace={true}/>}/>
  </Route>

<Route path="/profile" element={<Auth_layout/>}>
   <Route index element={<Profile/>}/>
   <Route path="/profile/Change_password" element={<ChangePwdProfile/>}/>
   <Route path="/profile/OrderHistory" element={<OrderHistory/>}/>
   <Route path="/profile/ManageAddress" element={<ManageAddress/>}/>
   <Route path="/profile/ProfileInformation" element={<ProfileInformation/>}/>
   <Route path="/profile/ProfileInformation/ContactDetails" element={<ContactDetails/>}/>
</Route>

    {/* Admin Layout routes */}
  <Route path="/admin" element={<Admin_layout/>}>
    <Route index element={<Admin/>}/>
    <Route path="/admin/login" element={<LoginAdmin/>}/>
    <Route path="/admin/signup" element={<SignupAdmin/>}/>
    <Route path="/admin/user/add" element={<UserAdminCreate/>}/>
    <Route path="/admin/user/update/:id" element={<UserAdminUpdate/>}/>
    <Route path="/admin/user/show" element={<UserAdminShow/>}/>
    <Route path="/admin/user/delete/:id" element={<UserAdminDelete/>}/>
    
    <Route path="/admin/product/create" element={<ProductAdminCreate/>}/>
    <Route path="/admin/product/show" element={<ProductAdminShow/>}/>
    <Route path="/admin/product/update" element={<ProductAdminUpdate/>}/>

    <Route path="/admin/product/category/show" element={<CategorieProdAdminShow/>}/>
    <Route path="/admin/product/category/create" element={<CategorieProdAdminCreate/>}/>
    <Route path="/admin/product/category/update" element={<CategorieProdAdminUpdate/>}/>

    <Route path="/admin/brand/show" element={<BrandAdminShow/>}/>
    <Route path="/admin/brand/add" element={<BrandsAdminAdd/>}/>

  </Route>

    {/* 404 page not found route */}
    <Route path='*' element={<NotFound_404/>}/>
    {/* <Route path='*' element={<Navigate to='/404'/>}/> */}

   </Routes>
   </Suspense>
  )
}
export default Routing;

