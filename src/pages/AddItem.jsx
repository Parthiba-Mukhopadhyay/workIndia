import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [shippingMethod, setShippingMethod] = useState('Not Specified');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      item: itemName,
      price: parseFloat(itemPrice),
      shipping_method: shippingMethod,
    };

    try {
      await axios.post('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12', newItem);
      alert('Item added successfully!'); // Show success alert
      navigate('/'); // Navigate back to the marketplace page
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item. Please try again.'); // Show error alert
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Add Item</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="itemName" className="block text-gray-700">Item Name</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="itemPrice" className="block text-gray-700">Item Price</label>
          <input
            type="number"
            id="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shippingMethod" className="block text-gray-700">Shipping Method</label>
          <select
            id="shippingMethod"
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Not Specified">Not Specified</option>
            <option value="Same Day Delivery">Same Day Delivery</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
