import React from 'react';

const BrandForm = () => {
  const countries = ['USA', 'Canada', 'UK', 'Australia']; // Add more countries as needed
  const alternatives = ['Alternative 1', 'Alternative 2', 'Alternative 3']; // Add more alternatives as needed

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">Brand Name</label>
        <input type="text" id="brandName" name="brandName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label htmlFor="brandInfo" className="block text-sm font-medium text-gray-700">Brand Info</label>
        <textarea id="brandInfo" name="brandInfo" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
        <select id="country" name="country" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-700">Alternatives</span>
        <ul className="mt-1 space-y-1">
          {alternatives.map((alternative, index) => (
            <li key={index} className="flex items-center space-x-2">
              <input id={`alternative-${index}`} name="alternatives" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              <label htmlFor={`alternative-${index}`} className="text-sm text-gray-900">{alternative}</label>
            </li>
          ))}
        </ul>
      </div>
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  );
};

export default BrandForm;