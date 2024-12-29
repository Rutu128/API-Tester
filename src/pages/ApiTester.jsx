// import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ApiTester from '../components/ApiTester/ApiTester';

const ApiTesterPage = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">API Tester</h1>
        <ApiTester />
      </div>
    </MainLayout>
  );
};

export default ApiTesterPage;
