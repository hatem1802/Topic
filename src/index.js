import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Homepage from "./Views/Homepage";

const router = createHashRouter ([
  {
    path: "/",
    element:(<Homepage/>)
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
)