import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
