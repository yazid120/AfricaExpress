import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';
import RatingsProduct from "./sub-components/Ratings_product";
import GlobalRating from "./sub-components/Global_Rating";
import CustomersSaysReviews from "./sub-components/Reviews_says_product";

const RatingsReviews = ()=>{
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/reviews/show'); // Assuming your API route for fetching reviews is '/api/reviews'
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };
  return(
    <>
    <div className="container mx-auto">
     <div className="ratings_reviews_container flex">
      <div className="p-4 w-1/3">
        {/* global stars rating */}
        <GlobalRating/>
        {/* customers ratings stat */}
        <RatingsProduct/>
      </div>
      <div className="w-8/12 p-4 gap-4">
      {/* Customers riviews */}
      <CustomersSaysReviews reviews={reviews}/>
      </div>
      </div>
    </div>
    </>
  )
}
export default RatingsReviews;
