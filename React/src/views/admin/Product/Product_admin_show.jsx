import React from "react";
import axios from "axios";
import Navbar_admin from "../Dashboard/partials/Navbar_admin";
import ProductTable from "./component/product_table";
import DelteConfirmatonPop from "../component/pop/delete_confirmation";

function ProductAdminShow(){
    return(
        <>
        <div>
            <Navbar_admin/>
        </div>

            <ProductTable/>
        </>
    )
}
export default ProductAdminShow;
