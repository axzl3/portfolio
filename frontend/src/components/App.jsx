import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { AboutPage, ResumePage } from "../pages";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: AboutPage,
      },
      {
        path: "/resume",
        Component: ResumePage,
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
