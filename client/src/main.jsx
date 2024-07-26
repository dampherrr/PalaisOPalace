import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getGrotte from "./services/request";

import App from "./App";
import AdvancedOptions from "./components/advancedOptions";

const router = createBrowserRouter([
  { path: "/", element: <App />, loader: getGrotte },
  {
    path: "/advanced",
    element: <AdvancedOptions />,
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
