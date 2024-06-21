import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../views/Partials/NavBar";
import Footer from "../views/Partials/Footer";

function Guest_layout(){
  return(
    <>
    <NavBar/>
     <Outlet/>
    <Footer/>
    </>
  )
}
export default Guest_layout;
