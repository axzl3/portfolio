import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage } from "../pages";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
    />
  );
};

export default App;
