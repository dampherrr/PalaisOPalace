import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import getGrotte from "./services/request";

import App from "./App";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Description from "./pages/Description";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getGrotte,
      },

      {
        path: "/search",
        element: <Search />,
        loader: getGrotte,
      },
      {
        path: "/grotte/:nom",
        element: <Description />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
