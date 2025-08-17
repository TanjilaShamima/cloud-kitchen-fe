import React from "react";

// Tailwind CSS styles can be applied directly in the JSX elements.
// Remove the import for the CSS file if you are fully switching to Tailwind.

const LocationSearchSection = () => {
  return (
    <div className="location-search-section p-6 bg-gray-100 rounded-lg shadow-md min-h-[400px] flex flex-col items-center justify-center">
      <div className="w-full lg:w-[60%] mx-auto">
        <h2 className="location-search-title text-xl font-semibold text-gray-800 mb-4">
          Sign up for free delivery on your first order
        </h2>
        <div className="location-search-container flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg shadow-md">
          <input
            type="text"
            className="location-search-input flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
          <button className="location-search-locate-btn px-4 py-2 bg-transparent text-gray-500 rounded-md -ml-[150px]">
            Locate me
          </button>
          <button className="location-search-find-btn px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-gradient ml-10">
            Find food
          </button>
        </div>
        <a
          href="#"
          className="location-search-login-link mt-4 inline-block text-blue-500 hover:underline"
        >
          Log in to see saved addresses
        </a>
      </div>
    </div>
  );
};

export default LocationSearchSection;
