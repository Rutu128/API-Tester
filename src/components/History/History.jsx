import { useState, useEffect } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = JSON.parse(localStorage.getItem("apiHistory") || "[]");
    setHistory(savedHistory);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Request History</h2>
      {history.length === 0 ? (
        <p className="text-gray-500">No requests made yet.</p>
      ) : (
        <div className="space-y-4">
          {history.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 mb-2">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    item.method === "GET"
                      ? "bg-green-100 text-green-800"
                      : item.method === "POST"
                      ? "bg-blue-100 text-blue-800"
                      : item.method === "PUT"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.method}
                </span>
                <span className="text-gray-600">{item.url}</span>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(item.timestamp).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
