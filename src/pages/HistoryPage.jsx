// import React from "react";
import MainLayout from "../layouts/MainLayout";
import History from "../components/History/History";

const HistoryPage = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <History />
      </div>
    </MainLayout>
  );
};

export default HistoryPage;
