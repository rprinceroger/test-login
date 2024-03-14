import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { UserProvider } from "./UserContext";
import Navbar from "./components/Navbar/Navbar.js";
import MobileNavbar from "./componentMobile/MobileNavbar/MobileNavbar.js";
import SideNav from "./components/SideNav/SideNav.js";

import Login from "./components/Login/Login.js";
import Logout from "./components/Logout/Logout.js";
import Register from "./components/Register/Register.js";
import Error from "./pages/Error.js";
import PasswordReset from "./components/PasswordReset/PasswordReset.js";

import Main from "./pages/Main.js";
import Coverage from "./pages/Coverage.js";
import Database from "./pages/Database.js";
import Report from "./pages/Report.js";
import Schedule from "./pages/Schedule.js";
import Retainer from "./pages/Retainer.js";

import './App.css';

const routes = [
  { path: "/main", brandText: "Main Screen" },
  { path: "/coverage", brandText: "Waterfall Coverage Schedule" },
  { path: "/database", brandText: "Agent Data Base" },
  { path: "/report", brandText: "Agent Report Form" },
  { path: "/schedule", brandText: "Agent Schedule Form" },
  { path: "/retainer", brandText: "Retainer Tracker Sheet" },
  // ... (other routes)
];

function App() {
  // State to manage user data
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  const [isCollapsed, setCollapsed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); // Define isMobileView state

  // Function to clear user data from localStorage
  const unsetUser = () => {
    localStorage.clear();
  };

  const getBrandText = (pathname) => {
    const matchedRoute = routes.find(route => pathname === route.path);
    return matchedRoute ? matchedRoute.brandText : "Default Brand";
  };

  // Effect to fetch user data from the API on component mount
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (typeof data._id !== "undefined") {
          setUser({
            id: data._id,
            isAdmin: data.isAdmin,
          });
        } else {
          setUser({
            id: null,
            isAdmin: null,
          });
        }
      });
  }, []);

  // Effect to update isMobileView state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the threshold as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <Row>
          {/* Navbar */}
          {!isMobileView && (
            <Col sm={3} md={2} className="sidebar">
              <SideNav />
            </Col>
          )}
          <Col>
            {isMobileView ? <MobileNavbar /> : <Navbar getBrandText={getBrandText} />}
            <Container fluid>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/passwordreset" element={<PasswordReset />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<Error />} />
                <Route path="/main" element={<Main />} />
                <Route path="/coverage" element={<Coverage />} />
                <Route path="/database" element={<Database />} />
                <Route path="/report" element={<Report />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/retainer" element={<Retainer />} />       
              </Routes>
            </Container>
          </Col>
        </Row>
      </Router>
    </UserProvider>
  );
}

export default App;
