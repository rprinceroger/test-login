import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import Swal from "sweetalert2";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from "../../UserContext";

import "./login.css";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false); // Initialize as false
  const [showPassword, setShowPassword] = useState(false);

  const authenticate = async (e) => {
    e.preventDefault();

    try {
      fetch(`${process.env.REACT_APP_API_URL}/umbraco/Api/ViribuzAgentAuth/SubmitLogin`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access) {
            localStorage.setItem("token", data.access);
            retrieveUserDetails(data.access);

            setUser({
              access: localStorage.getItem("token"),
            });

            // Display success message
            Swal.fire({
              title: "Welcome!",
              icon: "success",
              text: "You've successfully logged in!",
            });
            // Redirect to "/main" after successful login
            navigate("/main");
          } else {
            // Display error message for login failure
            Swal.fire({
              title: "Log in failed",
              icon: "error",
              text: "Check your login details and try again.",
            });
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          // Display server error message
          Swal.fire({
            title: "Server error",
            icon: "error",
            text: "An error occurred while processing your request. Please try again later.",
          });
        });
    } catch (error) {
      console.error("JSON parse error:", error);
      // Display JSON parse error message
      Swal.fire({
        title: "JSON parse error",
        icon: "error",
        text: "An error occurred while parsing the JSON response from the server.",
      });
    }

    // Clear email and password fields
    setEmail("");
    setPassword("");
  }

  // Function to retrieve user details
  const retrieveUserDetails = (token) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser({
          id: data._id,
          isAdmin: data.isAdmin,
        });
      });
  };

  useEffect(() => {
    setIsActive(email !== "" && password !== "");
  }, [email, password]);

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col md={4}>
          <Card className="shadow-lg" style={{ backgroundColor: 'white', borderColor: 'none', marginTop: '10rem' }}>
            <Card.Body>
              <h4 className="text-center mb-4" style={{ color: 'inherit' }}>Sign in</h4>
              <Form onSubmit={authenticate}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ color: 'inherit' }}
                    required
                    name="email"
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ color: 'inherit' }}
                    required
                    name="password"
                  />
                </Form.Group>
                <div className="password-reset-link">
                  <Link to="/passwordreset">Forgot your password?</Link>
                </div>
                <Button variant="primary" type="submit" block disabled={!isActive} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                  Sign in
                </Button>
              </Form>
              <div className="text-center mt-3">
                <span>
                  Don't have an account?{' '}
                  <span className="text-primary">
                    <Link to="/register">Sign up</Link>
                  </span>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
