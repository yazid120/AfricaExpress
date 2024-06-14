import React from 'react';

function ProductInfos({ ProductArticle, HandleAddToCart, HandleWishlist, HandleDecreaseQte, HandleIncreaseQte, articleQte }) {
  return (
    <>
     <div>
  <div>
    <h2 className="text-3xl font-semibold uppercase mb-2">
      {ProductArticle.name}
    </h2>
    <div className="flex items-center mb-4">
      <div className="flex gap-1 text-sm text-yellow-400">
        <span>
          <i className="fa-solid fa-star" />
        </span>
        <span>
          <i className="fa-solid fa-star" />
        </span>
        <span>
          <i className="fa-solid fa-star" />
        </span>
        <span>
          <i className="fa-solid fa-star" />
        </span>
        <span>
          <i className="fa-solid fa-star" />
        </span>
      </div>
      <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
    </div>
    <div className="space-y-2">
      <p className="text-gray-800 font-semibold space-x-2">
        <span>Availability: </span>
        <span className="text-green-600">In Stock</span>
      </p>
      <p className="space-x-2">
        <span className="text-gray-800 font-semibold">Brand: </span>
        <span className="text-gray-600">{ProductArticle.brand && ProductArticle.brand.brand_name}</span>
      </p>
      <p className="space-x-2">
        <span className="text-gray-800 font-semibold">Category: </span>
        {/* <span className="text-gray-600">{ProductArticle['categories'].cat_name}</span> */}
      </p>
      <p className="space-x-2">
        <span className="text-gray-800 font-semibold">SKU: </span>
        <span className="text-gray-600">BE45VGRT</span>
      </p>
    </div>
    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
      <p className="text-xl text-primary font-semibold">{ProductArticle.price_unit}</p>
      <p className="text-base text-black line-through">$55.00</p>
    </div>
    <label className="" htmlFor="">description</label>
    <p className="mt-4 text-gray-600">
      {ProductArticle.product_description}
    </p>

    <div className="flex space-x-4 mt-5">
      <button onClick={HandleWishlist} className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Add to Wishlist
      </button>
      <button onClick={HandleAddToCart} className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Add to Cart
      </button>
    </div>
    {/* Add other product information here */}
    {/* Example: Size, Color, Quantity, Add to Cart, Wishlist, Social Share */}
  </div>
</div>
    </>
  );
}

export default ProductInfos;
