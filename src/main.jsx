/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import Students from "./routes/Students";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Teacher from "./routes/Teacher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/student/:sectionNumber",
    element: <Students />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
