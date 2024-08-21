import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function useFetchUser(userToken){
   const [user, setUser] = useState('');
   const [error, setError] = useState('');

   useEffect(()=>{
    const FetchUser = async ()=>{
      if(userToken){
        try{
          const response = await axios.get(`http://localhost:8000/api/profile/${userToken}`)
          setUser(response.data)
        }catch(error){
          setError(error)
        }
      }else{
        console.error('error: connection not found')
      }
    }

    FetchUser();
  },[userToken])

  return { user, error };
}
export default useFetchUser;
