import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { ThemeContext } from "./../contexts/ThemeProvider";
import { AuthContext } from "../contexts/AuthProvider";

const Home = () => {
  const { dark } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  return (
    <div className={`${dark === "dark" ? "home-dark" : "home"}`}>
      <section className="py-3 my-3 container text-center">
        <h2 className="fw-bold">Start your quest with Quest Learning today</h2>
        <p>
          Learning Quest Offers a variety of courses on web technologies which
          will enrich your knowledge of web technologies.
        </p>

        <div
          className="my-5 d-flex justify-content-around w-50 mx-auto"
          style={{ fontSize: "5rem", color: "#568eea" }}
        >
          <FaHtml5></FaHtml5>
          <FaCss3></FaCss3>
          <IoLogoJavascript></IoLogoJavascript>
          <FaReact></FaReact>
          <IoLogoFirebase></IoLogoFirebase>
        </div>

        <p style={{ fontSize: "1.8rem" }}>Find Out More!</p>
        <Link className="btn p-3 fs-5" to="/courses">
          Our Courses
        </Link>
      </section>

      <section
        className={`py-5 mx-auto my-3 container rounded shadow-sm 
        ${dark === "dark" ? "home-card-dark" : "home-card"}`}
      >
        <h3 className="w-75 text-center mx-auto">
          Sign up today to find out more about our courses and get premium
          contents
        </h3>

        <div className="d-flex flex-column align-item-center justify-content-center mt-5">
          <Link
            to={user ? "/" : "/signup"}
            style={{ width: "300px" }}
            className="btn mx-auto fs-3"
          >
            Sign up today
          </Link>

          <p className="text-center mt-5">Already have an account?</p>
          <Link className="mx-auto " to="/login">
            <button
              disabled={user}
              className="btn-outline fs-3"
              style={{ width: "300px" }}
            >
              Log In
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
