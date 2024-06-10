import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import Configurateur from "./components/Configurateur";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/Configurateur",
    element: <Configurateur />,
  },
]);

export default router;
