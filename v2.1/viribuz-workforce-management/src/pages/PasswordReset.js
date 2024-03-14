import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import Swal from "sweetalert2";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  // Update isActive when email, newPassword, or confirmPassword change
  useEffect(() => {
    setIsActive(email !== "" && newPassword !== "" && confirmPassword !== "");
  }, [email, newPassword, confirmPassword]);

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    // Validate email, new password, and confirm password
    if (!email || !newPassword || !confirmPassword) {
      Swal.fire({
        title: "Incomplete Form",
        icon: "error",
        text: "Please fill in all the fields.",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        title: "Password Mismatch",
        icon: "error",
        text: "New password and confirm password do not match.",
      });
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/resetPassword`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      // Check the response from the server and handle accordingly
      if (response.ok) {
        // Password reset successful
        Swal.fire({
          title: "Password Reset Successful",
          icon: "success",
          text: "Your password has been successfully reset.",
        });
      } else {
        // Password reset failed
        Swal.fire({
          title: "Password Reset Failed",
          icon: "error",
          text: data.message || "An error occurred while resetting your password. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Password reset error:", error);
      Swal.fire({
        title: "Password Reset Failed",
        icon: "error",
        text: "An error occurred while resetting your password. Please try again later.",
      });
    }

    // Clear form fields
    setEmail("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col md={4}>
          <Card className="shadow-lg" style={{ backgroundColor: 'white', borderColor: 'none', marginTop: '10rem' }}>
            <Card.Body>
              <h4 className="text-center mb-4" style={{ color: 'inherit' }}>Password Reset</h4>
              <Form onSubmit={handlePasswordReset}>
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
                <Form.Group controlId="formNewPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{ color: 'inherit' }}
                    required
                    name="newPassword"
                  />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ color: 'inherit' }}
                    required
                    name="confirmPassword"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" block disabled={!isActive}>
                  Reset Password
                </Button>
              </Form>
              <div className="text-center mt-3">
                <span>
                  Remember your password?{' '}
                  <span className="text-primary">
                    <Link to="/">Sign in</Link>
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

export default PasswordReset;
