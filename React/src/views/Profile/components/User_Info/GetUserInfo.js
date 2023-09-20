import React from "react";
import {useEffect} from "react";
import axios from "axios";

async function GetUser(UserId, SetUserId){
  useEffect(()=>{
   axios.get(`http://localhost:8000/api/profile/${UserId}`).then(response=>{
    SetUserId(response.data);
   })
  },[])
}
export default GetUser;
