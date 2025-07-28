import React from "react";
import Navbar from "./layouts/navBar/NavBar";

const App: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100 w-screen">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Main Content</h1>
      </div>
    </div>
  );
};

export default App;
