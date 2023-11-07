import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BsTrash } from "react-icons/bs";

const WishlistItem = ()=>{
  const image_path_uri = '../src/assets/images/Products/';
  const [WishItem, SetWishItem] = useState([]);


  useEffect(() => {
    try {
      axios.get(`http://127.0.0.1:8000/api/wishlist/items/index`)
        .then((response) => {
          SetWishItem(response.data);
        })
        .catch((error) => {
          console.error('Connection failed!!', error);
        });
    } catch (error) {
      // error failed api connection
      console.error('Connection failed !!');
    }
  }, []);

  return(
    <>
    {WishItem.map((item)=>(
      <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded" key={item.id}>
        <div className="w-28">
          <img src={image_path_uri+item.image} alt="product 6" className="w-full"/>
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 text-xl font-medium uppercase">
            {item.name}
          </h2>
          <p className="text-gray-500 text-sm">
            Availability: <span className="text-green-600">In Stock</span>
          </p>
        </div>
        <div className="text-primary text-lg font-semibold">{item.price_unit} $</div>
        <a href="#" className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary
           rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
          add to cart
        </a>
        <div className="text-2xl text-red-500">
        <BsTrash/>
       </div>
        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <i className="fa-solid fa-trash" />
        </div>
      </div>
      ))
      }
    </>
  )
}
export default WishlistItem;
