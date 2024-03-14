import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SideNavData } from '../../components/SideNav/SideNav.js';

import viribuz from "../../assets/icons/viribuz.png";
import main from "../../assets/icons/main.png";
import coverage from "../../assets/icons/coverage.png";
import databaseIcon from "../../assets/icons/database.png";
import report from "../../assets/icons/report.png";
import schedule from "../../assets/icons/schedule.png";
import retainer from "../../assets/icons/retainer.png";

const MobileNavbar = () => {
  const navbarStyle = {
    backgroundColor: '#6941c6',
    marginTop: '-1rem'
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 767px) {
            .mobile-navbar {
              display: block !important;
            }
          }
        `}
      </style>
      <Navbar style={navbarStyle} expand="lg" className="mobile-navbar">
        <Container>
          <Navbar.Brand href="main">
            <img
              src={viribuz}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Viribuz Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              {SideNavData.map((item, index) => (
                <Nav.Item key={index}>
                  <Nav.Link href="#">
                    {index === 0 && <img src={main} alt="Main" style={{ paddingRight: '10px', width: '25px' }} />}
                    {index === 1 && <img src={coverage} alt="Coverage" style={{ paddingRight: '10px', width: '25px' }} />}
                    {index === 2 && <img src={databaseIcon} alt="Database" style={{ paddingRight: '10px', width: '25px' }} />}
                    {index === 3 && <img src={report} alt="Report" style={{ paddingRight: '10px', width: '25px' }} />}
                    {index === 4 && <img src={schedule} alt="Schedule" style={{ paddingRight: '10px', width: '25px' }} />}
                    {index === 5 && <img src={retainer} alt="Retainer" style={{ paddingRight: '10px', width: '25px' }} />}
                    {item.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MobileNavbar;
