import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function UserAdminDelete(){
    const {id} = useParams();
    axios.delete(`http://127.0.0.1:8000/api/admin/user/delete/${id}`)
    .then(response=>{
        if(response.data['status'] == 'ok' && response.data['message'] == 'user account deleted successfuly'){
          location.href='http://127.0.0.1:5000/admin/user/show?success=user_deleted_successfuly';
        }
    })
}
export default UserAdminDelete;
