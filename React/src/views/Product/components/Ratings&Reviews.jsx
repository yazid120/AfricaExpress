import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';
import RatingsProduct from "./sub-components/Ratings_product";
import GlobalRating from "./sub-components/Global_Rating";
import CustomersSaysReviews from "./sub-components/Reviews_says_product";

const RatingsReviews = ()=>{
  const [reviews, setReviews] = useState([]);
  const [globalRating, setGlobalRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/reviews/show');
      const data = await response.json();
      setReviews(data);

      if (data.length > 0) {
        const totalRating = data.reduce((acc, review) => acc + review.rating, 0);
        const averageRating = totalRating / data.length;
        setGlobalRating(averageRating);
      }
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
        <GlobalRating globalRating={globalRating}/>
        {/* customers ratings stat */}
        <RatingsProduct percentages={globalRating}/>
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
