import React from "react";
import axios from "axios";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";
import ProductTable from "./component/product_table";

function ProductAdminShow(){
    return(
        <>
        <div>
            <Navbar_admin/>
        </div>
        <div>
            <ProductTable/>
        </div>
        </>
    )
}
export default ProductAdminShow; 