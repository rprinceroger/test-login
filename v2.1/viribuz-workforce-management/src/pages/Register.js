import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

import UserContext from "../UserContext";

function Register() {
  const { user } = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailExists, setEmailExists] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const checkEmailExists = () => {
    fetch(`${process.env.REACT_APP_API_URL}/users/checkEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data received from the server
        setEmailExists(data.emailExists);

        if (data.emailExists) {
          Swal.fire({
            icon: 'error',
            text: 'Email is already taken. Please choose a different one.'
          });
        }
      })
      .catch((error) => {
        console.error("Error checking email:", error);
      });
  };

  function registerUser(e) {
    e.preventDefault();

    if (emailExists) {
      Swal.fire({
        icon: 'error',
        text: 'Email is already taken. Please choose a different one.'
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: 'error',
        text: 'Invalid email format. Please enter a valid email address.'
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        text: 'Passwords do not match. Please enter matching passwords.'
      });
      return;
    }

    // Move the password matching check here, after the email validation
    if (!isValidPassword(password)) {
      Swal.fire({
        icon: 'error',
        text: 'Invalid password. Please enter a valid password.'
      });
      return;
    }

    fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");

          Swal.fire({
            icon: 'success',
            text: 'Thank you for registering!'
          }).then(() => {
            navigate("/");
          });
        } else {
          Swal.fire({
            icon: 'error',
            text: 'Error occurred. Please check your details and try again later.'
          });
        }
      });
  }

  // Add a function to validate the password
  function isValidPassword(password) {
    // Minimum length of 8 characters
    const minLength = 8;

    // Regular expressions for additional checks
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check if all criteria are met
    const isLengthValid = password.length >= minLength;
    const areAllCriteriaMet = hasUppercase && hasLowercase && hasDigit && hasSpecialChar;

    return isLengthValid && areAllCriteriaMet;
  }

  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

    useEffect(() => {
      // Regular expression for a simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        emailRegex.test(email) && // Check if email is valid
        password !== "" &&
        confirmPassword !== "" &&
        password === confirmPassword &&
        document.getElementById("agreeCheckbox").checked // Check if the checkbox is checked
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }, [
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    ]);

  return user.id !== null ? (
    <Navigate to="/main" />
  ) : (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Card className="mb-4 shadow-lg" style={{ backgroundColor: 'white', borderColor: 'none', marginTop: '5rem' }}>
            <Card.Body className="p-4">
              <Card
                variant="gradient"
                bg="primary"
                border="light"
                borderRadius="lg"
                text="white"
                p={3}
                mb={4}
                textAlign="center"
              >
                <h4 className="font-weight-medium ml-2 mt-2">Join us today</h4>
                <p className="button-text my-1 ml-2">
                  Enter your email and password to register
                </p>
              </Card>

              <Form onSubmit={registerUser}>
                <Form.Control
                  type="text"
                  className="mb-2"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ color: 'inherit' }}
                />
                <Form.Control
                  type="text"
                  className="mb-2"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ color: 'inherit' }}
                />
                <Form.Control
                  type="email"
                  className="mb-2"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    checkEmailExists(); // Call the function on each change
                  }}
                  style={{ color: 'inherit' }}
                />
                <Form.Control
                  type="password"
                  className="mb-2"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ color: 'inherit' }}
                />
                <Form.Control
                  type="password"
                  className="mb-2"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ color: 'inherit' }}
                />
                <div className="register-checkbox-link">
                  <input
                    type="checkbox"
                    id="agreeCheckbox"
                    onChange={() => {
                      // Call the useEffect when the checkbox state changes
                      setIsActive(!isActive);
                    }}
                  />
                  <label htmlFor="agreeCheckbox" className="button-text font-weight-bold ml-1">
                    I agree the <span>Terms and Conditions</span>
                  </label>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  fullWidth
                  mt={4}
                  mb={1}
                  disabled={!isActive}
                >
                  Sign Up
                </Button>

                <p className="button-text text-center" style={{ color: 'inherit' }}>
                  Already have an account?{" "}
                  <Link to="/" className="font-weight-medium">
                    Sign In
                  </Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
