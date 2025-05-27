import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const HomeLayout = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />

      <main className="flex-grow flex items-center justify-center">
        <div className="stack  w-3/4">
          <div>a</div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
