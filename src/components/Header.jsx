import React, { useState } from 'react';

const Header = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleSortChange = (option) => {
    onSort(option);
    setDropdownVisible(false); // Close dropdown after selecting an option
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 flex justify-between items-center z-50">
      <h1 className="text-3xl font-bold">Explore</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-l-md border border-gray-300"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-300 text-blue-600 p-2 rounded-r-md"
        >
          Search
        </button>
      </div>
      <div className="relative">
        <button
          onClick={() => setDropdownVisible(!dropdownVisible)}
          className="p-2 rounded-md border border-gray-300 text-blue-600"
        >
          Filter
        </button>
        {dropdownVisible && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <button
              onClick={() => handleSortChange('price-high-low')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Price: High to Low
            </button>
            <button
              onClick={() => handleSortChange('price-low-high')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Price: Low to High
            </button>
            <button
              onClick={() => handleSortChange('same-day-delivery')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Same Day Delivery
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
