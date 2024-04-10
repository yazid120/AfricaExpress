import React from "react";
import RatingsProduct from "./sub-components/Ratings_product";
import GlobalRating from "./sub-components/Global_Rating";
import CustomersSaysReviews from "./sub-components/Reviews_says_product";

const RatingsReviews = ()=>{
  const reviews = [
    { id: 1, user: "John Doe", rating: 4, review: "Great product!" },
    { id: 2, user: "Jane Smith", rating: 5, review: "Excellent quality!" },
    // Add more reviews as needed
  ];
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Customers riviews */}
      <CustomersSaysReviews reviews={reviews}/>
      </div>
      </div>
    </div>
    </>
  )
}
export default RatingsReviews;
