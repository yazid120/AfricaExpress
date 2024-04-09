import React from "react";

const RatingsReviews = ()=>{
  const reviews = [
    { id: 1, user: "John Doe", rating: 4, review: "Great product!" },
    { id: 2, user: "Jane Smith", rating: 5, review: "Excellent quality!" },
    // Add more reviews as needed
  ];
  return(
    <>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded p-4">
            {/* Rating */}
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">
                {Array.from(Array(review.rating), (_, index) => (
                  <i key={index} className="fas fa-star" />
                ))}
              </span>
              <span className="ml-2">{review.rating}/5</span>
            </div>
            {/* Review */}
            <p className="text-gray-700">{review.review}</p>
            {/* User */}
            <p className="text-gray-500 mt-2">By {review.user}</p>
            {/* Review images (if any) */}
            {/* You can fetch review images from the backend and display them here */}
            {/* For demonstration purposes, assuming review images are stored in the same object */}
            {/* Replace the following line with actual review images logic */}
            {review.images && review.images.length > 0 && (
              <div className="mt-2">
                {review.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Review ${review.id} image ${index + 1}`}
                    className="w-full h-auto rounded"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
export default RatingsReviews;
