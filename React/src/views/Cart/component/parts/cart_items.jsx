import React from 'react';


const CartItem = ({ item, decrease_qte, increase_qte, QteProduct }) => {
  const image_path_uri = '../src/assets/images/Products/';
  return (
    <div className="flex items-center justify-between border m-2 gap-6 p-4 border-gray-200 rounded" key={item.id}>
      <div className="flex items-center justify-between w-full pt-1">
      <div className="w-28">
        <img src={image_path_uri + item.image} alt="product 6" className="w-full" />
      </div>
        <p className="text-base font-black leading-none !text-black dark:!text-white">
          {item.name}
        </p>
        <p className="text-base font-black leading-none !text-black dark:!text-white">
          price unit : {item.price_unit} $
        </p>
        <div className="flex items-center space-x-2">
          <button type="button" className="cursor-pointer bg-primary text-white px-3 py-1 rounded-full" onClick={() => decrease_qte(item.id)}>-</button>
          <p>{QteProduct}</p>
          <button type="button" className="cursor-pointer bg-primary text-white px-3 py-1 rounded-full" onClick={() => increase_qte(item.id)}>+</button>
        </div>
      </div>
    </div>
  );

};


export default CartItem;
