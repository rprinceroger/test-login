import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import SideNav from "../SideNav/SideNav.js";

import "./navbar.css";


function Header({ getBrandText }) {
  const location = useLocation();
  const [selectedCampaign, setSelectedCampaign] = useState("Campaign");
  const [selectedFirm, setSelectedFirm] = useState("All Firms");
  const [isOpenCampaign, setIsOpenCampaign] = useState(false);
  const [isOpenFirm, setIsOpenFirm] = useState(false);

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const handleCampaignSelect = (value) => {
    setSelectedCampaign(value);
    setIsOpenCampaign(!isOpenCampaign);
  };

  const handleFirmSelect = (value) => {
    setSelectedFirm(value);
    setIsOpenFirm(!isOpenFirm);
  };

  // Function to get page title based on current endpoint
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/main":
        return <span className="page-title">Intake Control Center</span>;
      case "/coverage":
        return <span className="page-title">Waterfall Coverage Schedule</span>;
      case "/database":
        return <span className="page-title">Agent Database</span>;
      case "/report":
        return <span className="page-title">Agent Report Form</span>;
      case "/schedule":
        return <span className="page-title">Agent Schedule Form</span>;
      case "/retainer":
        return <span className="page-title">Retainer Tracker Sheet</span>;
      default:
        return "";
    }
  };

  // Function to get additional text based on current endpoint
  const getAdditionalText = () => {
    switch (location.pathname) {
      case "/main":
        return <span className="page-additional-text">Your current intake summary and activity.</span>;
      case "/coverage":
        return <span className="page-additional-text">Your current intake summary and activity.</span>;
      case "/database":
        return <span className="page-additional-text">Your current intake summary and activity.</span>;
      case "/report":
        return <span className="page-additional-text">Your current intake summary and activity.</span>;
      case "/schedule":
        return <span className="page-additional-text">Your current intake summary and activity.</span>;
      case "/retainer":
        return <span className="page-additional-text">Your current intake summary and activity.</span>;
      default:
        return "";
    }
  };


  const shouldHideDropdowns = () => {
    return ["/report", "/schedule", "/retainer"].includes(location.pathname);
  };

  return (
    <Navbar bg="white" expand="lg" className="sticky-top" style={{ paddingTop: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #ccc' }} >
      <Container fluid>

        <Navbar.Brand href="#home">
          {getPageTitle()}
          <div>{getAdditionalText()}</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>

          </Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon"></span>
              </Nav.Link>
            </Nav.Item>

            {!shouldHideDropdowns() && (
              <>
                <DropdownButton
                  as={Nav.Item}
                  id="campaignDropdown"
                  title={
                    <>
                      {selectedCampaign}{' '}
                      <FontAwesomeIcon icon={faChevronDown} />
                    </>
                  }
                  variant="default"
                  className="m-0 custom-dropdown"
                  style={{ color: 'black' }}
                >
                  <Dropdown.Item
                    onClick={() => handleCampaignSelect("CAMP")}
                  >
                    CAMP
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCampaignSelect("NEC")}
                  >
                    NEC
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCampaignSelect("MVA")}
                  >
                    MVA
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCampaignSelect("TALC")}
                  >
                    TALC
                  </Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                  as={Nav.Item}
                  id="firmDropdown"
                  title={
                    <>
                      {selectedFirm}{' '}
                      <FontAwesomeIcon icon={faChevronDown} />
                    </>
                  }
                  variant="default"
                  className="m-0 custom-dropdown"
                >
                  <Dropdown.Item
                    onClick={() => handleFirmSelect("Meyer")}
                  >
                    Meyer
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleFirmSelect("SR")}
                  >
                    SR
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleFirmSelect("Stanley")}
                  >
                    Stanley
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleFirmSelect("Lawfty")}
                  >
                    Lawfty
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleFirmSelect("LP")}
                  >
                    LP
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleFirmSelect("Warren")}
                  >
                    Warren
                  </Dropdown.Item>
                </DropdownButton>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
