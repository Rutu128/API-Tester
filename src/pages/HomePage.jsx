// import React from 'react';
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to API Tester
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A powerful tool for testing and debugging your API endpoints
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Simple interface for making API requests with support for all HTTP methods
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Request History</h3>
            <p className="text-gray-600">
              Keep track of your API requests and responses for future reference
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Custom Headers</h3>
            <p className="text-gray-600">
              Add and modify request headers with our intuitive interface
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;