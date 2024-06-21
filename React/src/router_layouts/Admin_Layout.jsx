import React from "react";
import { Outlet } from "react-router-dom";

function Admin_layout(){
  const Admin_auth = localStorage.getItem('admin_id');
 return(
     Admin_auth ? <Admin/>  : <Outlet/>
  )
}
export default Admin_layout;
