import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function UserAdminDelete(){
    const {id} = useParams();
    /*axios.delete(`http://127.0.0.1:8000/api/admin/user/delete/${id}`)
    .then(response=>{
        console.log(response.data);
    })*/
    return id; 
}
export default UserAdminDelete; 
