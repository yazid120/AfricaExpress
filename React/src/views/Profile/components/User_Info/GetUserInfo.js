import React, { useEffect } from "react";
import axios from "axios";

function GetUser({ UserToken, Setuser }) {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8000/api/profile/${UserToken}`);
        Setuser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, [UserToken, Setuser]);

  return null; // or you can return some JSX or a loading state if needed
}

export default GetUser;
