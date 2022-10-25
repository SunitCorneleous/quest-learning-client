import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Category from "../components/Category";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import CoursesHome from "../components/CoursesHome";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Main from "../layout/Main";
import LogIn from "./../components/LogIn";
import Register from "./../components/Register";

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
      {
        path: "/course-details/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
    ],
  },
]);
