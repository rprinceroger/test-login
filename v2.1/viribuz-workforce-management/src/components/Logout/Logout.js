import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./logout.css";

function Logout() {
  const navigate = useNavigate();

  // Add useEffect to clear localStorage on component mount
  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
  }, []);

  const handleSignIn = () => {
    // Navigate to the sign-in page ("/")
    navigate("/");
  };

  return (
    <>
      <Container fluid>
        <Row style={{ marginLeft: '20rem' }}>
          <h3 style={{ margin: '2rem 0 0', padding: '10px', color: 'inherit' }}>
            Thank you for your hard work and see you again!
          </h3>
          <Button
            variant="primary"
            size="sm"
            onClick={handleSignIn}
            style={{ marginTop: '2rem', height: '30px', maxWidth: '80px' }}
            className="d-flex align-items-center"
          >
            Sign In
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Logout;
