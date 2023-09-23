import React from "react";


function DelteConfirmatonPop({onCancel,onConfirm}){
return(
<>
<div className="wrappe_container_pop">
  <div className="delete-confirmation bg-white p-8 rounded-lg shadow-lg">
  <button
      className="relative top-2 right-2 text-gray-500 hover:text-gray-600"
      onClick={onCancel}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <p className="text-xl font-semibold mb-4">are you sure you want to delete this account?</p>
    <div className="flex justify-end">
    <button className="px-4 py-2 mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded" 
    onClick={onCancel}>cancel</button>
    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
     onClick={onConfirm}>delete</button>
     </div>
  </div>
</div>
</>
)
}
export default DelteConfirmatonPop; 