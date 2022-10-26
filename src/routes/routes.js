import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Category from "../components/CoursePage/Category";
import CheckoutRoute from "../components/CheckoutRoute";
import CourseDetails from "../components/CoursePage/CourseDetails";
import Courses from "../components/CoursePage/Courses";
import CoursesHome from "../components/CoursePage/CoursesHome";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Main from "../layout/Main";
import LogIn from "./../components/LogIn";
import Register from "./../components/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";

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
            loader: () => fetch("https://quest-learning.vercel.app/courses"),
          },
          {
            path: "/courses/categories/:id",
            element: <Category></Category>,
            loader: ({ params }) =>
              fetch(
                `https://quest-learning.vercel.app/categories/${params.id}`
              ),
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
      {
        path: "/course-details/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://quest-learning.vercel.app/courses/${params.id}`),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckoutRoute></CheckoutRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://quest-learning.vercel.app/courses/${params.id}`),
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
