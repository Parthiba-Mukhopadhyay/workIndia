import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col items-center">
      <img
        src={window.innerWidth < 640 ? '/assets/small.png' : '/assets/medium.png'} // Display different images based on screen size
        alt={item.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
      <p className="text-gray-700 mb-2">MRP: ₹{item.price.toFixed(2)}</p>
      <p className="text-gray-600">{item.shipping_method}</p>
    </div>
  );
};

export default ItemCard;
