import React from "react";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Sidebar,
  Card,
} from "../components";

const HomeLayout = () => {
  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="flex justify-center items-center">
        <Sidebar />
      </div>
      <main className="col-span-3 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[80%] h-[70%]">
          <Card
            cardStyle={
              "bg-base-200 w-full h-full overflow-auto"
            }
            cardBodyStyle={"p-0"}
          >
            <Navbar />
            <Outlet className="flex-grow" />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
