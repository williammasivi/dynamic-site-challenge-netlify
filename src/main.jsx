import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutRoute from "./routes/LayoutRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import Crew from "./pages/CrewPage.jsx";
import TechnologyPage from "./pages/TechnologyPage.jsx";
import "./css/index.css";

const router = createBrowserRouter([
  {
    element: <LayoutRoute />,
    path: "/",
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        path: "/destination",
        element: <DestinationPage />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <TechnologyPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
