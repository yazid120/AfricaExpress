import React from 'react';


const CartItem = ({ item, decrease_qte, increase_qte, QteProduct }) => {
  return (
    <div key={item.id} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="flex items-center justify-between w-full pt-1">
        <p className="text-base font-black leading-none text-gray-800 dark:text-white">
          {item.name}
        </p>
        <div className="flex items-center justify-between pt-5">
          <p className="text-base font-black leading-none text-gray-800 dark:text-white">
            price: {item.price}
          </p>
        </div>
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
