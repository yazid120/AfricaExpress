import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BrandsAdminDelete(){
  const {id} = useParams();
  axios.delete(`http://localhost:8000/api/admin/brands/delete/${id}`)
  .then(response=>{
    console.log(response.data);
      if(response.data['status'] == 'ok' && response.data['message'] == 'brand deleted successfuly +admin'){
        location.href='http://localhost:5000/admin/brand/show?success=brands_deleted_successfuly';
      }
  })
}
export default BrandsAdminDelete;
