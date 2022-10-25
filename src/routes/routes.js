import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
