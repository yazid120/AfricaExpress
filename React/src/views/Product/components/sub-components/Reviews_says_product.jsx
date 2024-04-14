import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CustomersSaysReviews = ({reviews})=>{
  return(
    <>
    <div className="">
      <h2 className="text-lg font-semibold mb-2">Customers says</h2>
        {reviews.map((review) => (
          <div key={review.id} className="border rounded p-4 m-2">
            {/* Rating */}
            <div className="flex items-center mb-2">
            <span className="text-yellow-500">
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  color={index < Math.floor(review.rating) ? 'black' : 'lightgray'}
                  className="text-xl"
              />
            ))}
            </span>
            <span className="ml-2">{review.rating}/5</span>
            </div>
            {/* Review */}
            <p className="text-gray-700">{review.review}</p>
            {/* User */}
            <p className="text-gray-800 font-semibold mt-2">
              <span>By</span> {review.user.email}</p>
            {/* Review images (if any) */}
            {/* You can fetch review images from the backend and display them here */}
            {/* For demonstration purposes, assuming review images are stored in the same object */}
            {/* Replace the following line with actual review images logic */}
            {review.images && review.images.length > 0 && (
              <div className="mt-2">
                {review.images.map((image, index) => (
                  <img
                    key={index}
                    src={'http://localhost/E-commerce/public/storage/' + image.image_url}
                    alt={`Review ${review.id} image ${index + 1}`}
                    className="h-auto rounded"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
        <button className="text-black font-bold py-2 px-4 rounded">
          View More
        </button>
        </div>
    </>
  )
}
export default CustomersSaysReviews;
