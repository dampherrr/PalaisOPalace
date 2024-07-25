import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getGrotte from "./services/request";

import App from "./App";

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
    loader: getGrotte,
   
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
