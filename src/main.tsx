import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./Routes/ErrorPage";
import Home from "./Routes/Home";
import Root from "./Routes/Root";
import WorkoutPage from "./Routes/WorkoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "workout/upper-chest",
        element: <WorkoutPage />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
