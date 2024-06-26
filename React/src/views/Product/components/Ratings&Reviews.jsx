import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import RatingsProduct from "./sub-components/Ratings_product";
import GlobalRating from "./sub-components/Global_Rating";
import CustomersSaysReviews from "./sub-components/Reviews_says_product";

const RatingsReviews = ()=>{
  const [reviews, setReviews] = useState([]);
  const [globalRating, setGlobalRating] = useState(0);
  const {id} = useParams();

  useEffect(() => {
    fetchReviews(id);
  }, [id]);

  const fetchReviews = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/reviews/show/${productId}`);
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
      <h2 className="text-lg font-semibold mb-2">Customers says</h2>
      {reviews.length > 0 ? <CustomersSaysReviews reviews={reviews} /> :
          <p className="text-gray-500 italic">No reviews were found for this article.</p>}
      </div>
      </div>
    </div>
    </>
  )
}
export default RatingsReviews;
