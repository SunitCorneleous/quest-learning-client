import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const LogIn = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signInUser(email, password)
      .then(() => {
        // form reset
        form.reset();

        // navigate to route
        navigate("/");
      })
      .catch(error => {
        console.error("error: ", error);
        setError(error.message);
      });
  };
  return (
    <div className="container">
      <div className="border p-4 my-5 rounded-4 bg-light shadow mx-auto form">
        <h3 className="text-center">Log In</h3>
        <Form onSubmit={submitHandler} className="mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          {/* show error */}
          <Form.Text className="text-muted ">
            <span className="text-danger"> {error}</span>
          </Form.Text>

          <p>
            Don't have an account? <Link to="/signup">sign up</Link>
          </p>

          <Button
            variant="primary"
            className="mx-auto d-block w-25 fs-5 login"
            type="submit"
          >
            Log In
          </Button>
        </Form>

        <div className="my-3">
          <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center fs-5">
            <FaGoogle></FaGoogle>
            <span className="d-block ms-2">Continue with Google</span>
          </button>
          <button className="btn btn-outline-dark w-100 mt-3 d-flex align-items-center justify-content-center fs-5">
            <FaGithub></FaGithub>
            <span className="d-block ms-2">Continue with Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
