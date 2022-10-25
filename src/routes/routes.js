import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Category from "../components/Category";
import Courses from "../components/Courses";
import CoursesHome from "../components/CoursesHome";
import Faq from "../components/Faq";
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
      {
        path: "/courses",
        element: <Courses></Courses>,
        children: [
          {
            path: "/courses",
            element: <CoursesHome></CoursesHome>,
            loader: () => fetch("http://localhost:5000/courses"),
          },
          {
            path: "/courses/categories/:id",
            element: <Category></Category>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/categories/${params.id}`),
          },
        ],
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
