import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Register = () => {
  const {
    createUser,
    updateUserProfile,
    signInUserWithGoogle,
    signInUserWithGithub,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    createUser(email, password)
      .then(() => {
        const userProfile = {
          displayName: name,
          photoURL: photoUrl,
        };

        updateUserProfile(userProfile)
          .then(() => {})
          .catch(error => console.error("error: ", error));

        // form reset
        form.reset();

        navigate("/");
      })
      .catch(error => setError(error.message));
  };

  // google sign in handler
  const googleLogInHandler = () => {
    signInUserWithGoogle(googleProvider)
      .then(result => {
        const user = result.user;

        console.log(user);

        // navigate to route
        navigate("/");
      })
      .catch(error => {
        setError(error.message);
        console.error(error);
      });
  };

  // github sign in handler
  const githubLogInHandler = () => {
    signInUserWithGithub(githubProvider)
      .then(result => {
        const user = result.user;

        console.log(user);

        // navigate to route
        navigate("/");
      })
      .catch(error => {
        setError(error.message);
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="border p-4 my-5 rounded-4 bg-light shadow mx-auto form">
        <h3 className="text-center text-dark">Sign Up</h3>
        <Form onSubmit={submitHandler} className="mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your full name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="url"
              placeholder="Enter photo url"
            />
          </Form.Group>
          {/* Email  */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
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
            Already have an account? <Link to="/login">log in</Link>
          </p>

          <Button
            variant="primary"
            className="mx-auto d-block fs-5"
            type="submit"
            style={{ width: "100px" }}
          >
            Sign Up
          </Button>
        </Form>
        <div className="my-3">
          <button
            onClick={googleLogInHandler}
            className="btn-outline py-1 w-100 d-flex align-items-center justify-content-center fs-5"
          >
            <FaGoogle></FaGoogle>
            <span className="d-block ms-2">Sign Up with Google</span>
          </button>
          <button
            onClick={githubLogInHandler}
            className="btn-outline py-1 w-100 d-flex align-items-center justify-content-center fs-5 mt-3"
          >
            <FaGithub></FaGithub>
            <span className="d-block ms-2">Sign Up with Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
