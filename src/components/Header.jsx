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
    <div className="bg-gray-400 text-black p-4 flex justify-between items-center">
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
          className="p-2 rounded-md border-2 border-gray-300 text-white-600"
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
