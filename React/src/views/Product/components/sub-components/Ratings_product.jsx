import React from "react";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../../../style/product.css'


const RatingsProduct = ({percentages})=>{
  const renderRatings = () => {
    const ratings = [1, 2, 3, 4, 5];

     return ratings.map((rating, index) => (
      <tr key={rating} className="a-histogram-row a-align-center">
        <td className="aok-nowrap a-nowrap">
          <a
            aria-label={`All ${rating} star reviews`}
            className="a-size-base a-link-normal"
            href={`/product-reviews/B07GBZ4Q68/ref=acr_dp_hist_${rating}?ie=UTF8&amp;filterByStar=${rating}&amp;reviewerType=all_reviews#reviews-filter-bar`}
          >
            {rating} star
          </a>
          <span className="a-letter-space"></span>
        </td>
        <td className="a-span10">
          <a
            aria-label={`Bar Chart at ${percentages[index]} percent`}
            className="a-size-base a-link-normal"
            href={`/product-reviews/B07GBZ4Q68/ref=acr_dp_hist_${rating}?ie=UTF8&amp;filterByStar=${rating}&amp;reviewerType=all_reviews#reviews-filter-bar`}
          >
            <div className="a-meter" role="progressbar" aria-valuenow={`${percentages[index]}%`}>
              <div className="a-meter-bar a-meter-filled" style={{ width: `${percentages[index]}%` }}></div>
            </div>
          </a>
        </td>
        <td className="rating-percentage">
        <div className="rating-bar">
          <div className="rating-fill"
           style={{ width: `${percentages[index]}%` }}>
           </div>
          </div>
        </td>
        <td className="a-text-right a-nowrap a-nowrap">
          <span className="a-letter-space"></span>
          <a
            aria-label={`${percentages[index]} percent of reviews have ${rating} stars`}
            className="a-size-base a-link-normal"
            href={`/product-reviews/B07GBZ4Q68/ref=acr_dp_hist_${rating}?ie=UTF8&amp;filterByStar=${rating}&amp;reviewerType=all_reviews#reviews-filter-bar`}
          >
            {percentages[index]}%
          </a>
        </td>
      </tr>
    ));
  };
  return(
    <>
    <div className="container mx-auto">
      <table>
        <tbody>
          {renderRatings()}
        </tbody>
      </table>
      <hr aria-hidden="true" className="a-spacing-medium m-4"></hr>
      <div className="review-section">
        <h2 className="text-xl font-bold mb-2">Review this product</h2>
        <span>
          <a href="#" className="inline-block px-4 py-1 border bg-white text-black rounded hover:bg-slate-100">
            write your customer review
          </a>
        </span>
      </div>
    </div>
    </>
  )
}
export default RatingsProduct;
