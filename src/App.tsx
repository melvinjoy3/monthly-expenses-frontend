import React from "react";
import Navbar from "@/layouts/navBar/NavBar";
import MainLayout from "./layouts/mainLayout/MainLayout";

const App: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100 w-screen">
      <Navbar />
      <div className="p-6 bg-backgroundWhite">
        <MainLayout />
      </div>
    </div>
  );
};

export default App;
