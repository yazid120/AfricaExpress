import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const GlobalRating = ({globalRating})=>{

  return (
    <div className="global-rating rounded p-2 mb-2">
      <h2 className="text-lg font-semibold mb-2">Global Rating</h2>
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            color={index < Math.floor(globalRating) ? 'gold' : 'lightgray'}
            className="text-xl"
          />
        ))}
        <span className="ml-2 text-gray-600">({globalRating.toFixed(1)}/5)</span>
      </div>
      <span className="text-xs font-semibold">All reviews come from verified purchasers</span>
    </div>
  )
}
export default GlobalRating;
