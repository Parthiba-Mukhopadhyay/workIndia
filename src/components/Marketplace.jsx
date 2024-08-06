import React, { useEffect, useState } from 'react';
import axios from 'axios';
import smallImage from '../assets/small.png';
import mediumImage from '../assets/medium.png';

const Marketplace = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {items.length === 0 ? (
        <p>Loading items...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
              <img
                src={smallImage}
                alt={item.item}
                className="w-full h-48 object-cover block sm:hidden"
              />
              <img
                src={mediumImage}
                alt={item.item}
                className="w-full h-48 object-cover hidden sm:block"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.item}</h2>
                <p className="text-lg font-bold">MRP: ₹{item.price}</p>
                <p className="text-gray-600">Shipping: {item.shipping_method}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;
