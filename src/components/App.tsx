import React from "react";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Frontend Boilerplate 2024
        </h1>
        <p className="text-gray-700">
          This is a simple boilerplate for React with Vite and Tailwind CSS.
        </p>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => alert("Hello, world!")}
        >
          Click me!
        </button>
      </div>
    </div>
  );
};
