import React from "react";
import Navbar_admin from "./Dashboard/partials/Navbar_admin";
import Sidebar_admin from "./Dashboard/partials/Sidebar_admin";

const Admin = function(){
    return(
        <>
        <div>
            <Navbar_admin/>
            <Sidebar_admin/>
        </div>
        </>
    )
}
export default Admin; 