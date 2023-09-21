import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const brandData = async function(link,SetData){
  useEffect(()=>{
   axios.get(link).then(response=>{
    SetData(response.data);
   })
  },[])
}
function BrandAdminShow(){
  return(
    <>

    </>
  )
}
export default BrandAdminShow;
