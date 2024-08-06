import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const BottomComponent = ({ onLayoutChange }) => {
  const navigate = useNavigate(); // Initialize navigation

  const handleColumnLayout = () => {
    onLayoutChange('column');
  };

  const handleGridLayout = () => {
    onLayoutChange('grid');
  };

  const handleAddItem = () => {
    navigate('/add-item'); // Navigate to the Add Item page
  };

  const handleButton4 = () => {};
  const handleButton5 = () => {};

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 text-white flex justify-around">
      <button
        onClick={handleColumnLayout}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Column View
      </button>
      <button
        onClick={handleGridLayout}
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
      >
        Grid View
      </button>
      <button
        onClick={handleAddItem}
        className="bg-yellow-600 px-4 py-2 rounded hover:bg-yellow-700"
      >
        Add Item
      </button>
      <button
        onClick={handleButton4}
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
      >
        Button 4
      </button>
      <button
        onClick={handleButton5}
        className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
      >
        Button 5
      </button>
    </div>
  );
};

export default BottomComponent;
