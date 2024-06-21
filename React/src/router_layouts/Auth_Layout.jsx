import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../views/Partials/NavBar";
import Footer from "../views/Partials/Footer";

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
export default Auth_layout;
