import React, { useEffect } from "react";
import { Children,Suspense } from "react";
import { lazy } from 'react';
import { BrowserRouter, createBrowserRouter, Routes, Route, Outlet,Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import App from "./App";
import GuestLayout from "./components/GuestLayout";
import Footer from './views/Partials/Footer';
import NavBar from './views/Partials/NavBar';
import Main from "./main";
import Home from "./views/home";
import Contact from "./views/contact";
import Login from "./views/Auth/login";
import SignUp from "./views/Auth/SignUp";
import PrivacyPolicy from "./views/Privacy Terms/Privacy_Policy";
import TermsConditions from "./views/Privacy Terms/Terms_Conditions";
import ResetPassword from "./views/Auth/ResetPassword";
import ProductArticle from "./views/Product/Part/Product_article";
import Cart from "./views/Cart/cart";
import Wishlist from "./views/Wishlist/wishlist";
import Notification from "./views/notification/notification";
import Orders from "./views/Orders";
import NotFound_404 from "./views/404_NotFound";

{/*** Profile layouts components/pages ***/}
const Profile = React.lazy(()=> import("./views/Profile/Profile"));
const ChangePwdProfile = React.lazy(()=> import("./views/Profile/Settings/ChangePwdProfile"));
const OrderHistory = React.lazy(()=> import("./views/Profile/Settings/OrderHistory"));
const ManageAddress = React.lazy(()=> import("./views/Profile/Settings/ManageAddress"));
const ProfileInformation = React.lazy(()=> import("./views/Profile/Settings/ProfileInformation"));
const ContactDetails = React.lazy(()=>import("./views/Profile/components/ContactDetails"));



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

const SubCategorieProdAdminShow = React.lazy(()=>import("./views/admin/Category/Sub_category/SubCategoriesShow"));

const ProductAdminCreate = React.lazy( ()=> import("./views/admin/Product/Product_admin_create"));
const ProductAdminShow = React.lazy( ()=> import("./views/admin/Product/Product_admin_show"));
const ProductAdminUpdate = React.lazy( ()=> import("./views/admin/Product/Product_admin_update"));

const BrandAdminShow = React.lazy( ()=> import("./views/admin/brands/brands_admin_show"));
const BrandsAdminAdd = React.lazy( ()=> import("./views/admin/brands/brands_admin_create"));
const BrandsAdminUpdate = React.lazy ( ()=> import("./views/admin/brands/brands_admin_update"));
const BrandsAdminDelete =  React.lazy ( ()=> import("./views/admin/brands/brands_admin_delete"));

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
  const userToken = document.cookie.split('; ').find(row => row.startsWith('Ecommerce_access_token='));

  return(
    <>
    <NavBar/>
    {userToken ?
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

const cookies = document.cookie.split(';').map(cookie => cookie.trim());
const userAuthCookie = cookies.find(cookie => cookie.startsWith('Ecommerce_access_token'));

const Routing = function(){
  return(
  <Suspense>
   <Routes>
    {/* Guest Layout routes */}
    <Route path="/" element={<Guest_layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route exact path="/product/article/:id" element={<ProductArticle/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/privacy&policy" element={<PrivacyPolicy/>}/>
    <Route path="/termsConditions" element={<TermsConditions/>}/>
    <Route path="/resetpassword" element={<ResetPassword/>}/>
    <Route path="/cart" element={userAuthCookie ? <Cart/> : <Navigate to={{pathname:'/login'}} replace={true}/>}/>
    <Route path="/Wishlist" element={userAuthCookie ? <Wishlist/> : <Navigate to={{pathname:'/login'}} replace={true}/>}/>
    <Route path="/notification" element={userAuthCookie ?<Notification/> : <Navigate to={{pathname:'/login'}} replace={true}/>}/>
    <Route path="/orders" element={userAuthCookie ? <Orders/> : <Navigate to={{pathname:'/login'}} replace={true}/>}/>
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

    <Route path="/admin/product/category/sub-category/show" element={<SubCategorieProdAdminShow/>}/>

    <Route path="/admin/brand/show" element={<BrandAdminShow/>}/>
    <Route path="/admin/brand/add" element={<BrandsAdminAdd/>}/>
    <Route path="/admin/brand/update/:id" element={<BrandsAdminUpdate/>}/>
    <Route path="/admin/brand/delete/:id" element={<BrandsAdminDelete/>}/>

  </Route>
    {/* 404 page not found route */}
    <Route path='*' element={<NotFound_404/>}/>
    {/* <Route path='*' element={<Navigate to='/404'/>}/> */}

   </Routes>
   </Suspense>
  )
}
export default Routing;

