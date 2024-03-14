// Import necessary modules
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Main from "../../pages/Main.js";
import Coverage from "../../pages/Coverage.js";
import Database from "../../pages/Database.js";
import Report from "../../pages/Report.js";
import Schedule from "../../pages/Schedule.js";
import Retainer from "../../pages/Retainer.js";

import viribuz from "../../assets/icons/viribuz.png";
import main from "../../assets/icons/main.png";
import coverage from "../../assets/icons/coverage.png";
import database from "../../assets/icons/database.png";
import report from "../../assets/icons/report.png";
import schedule from "../../assets/icons/schedule.png";
import retainer from "../../assets/icons/retainer.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './sidenav.css';

export const SideNavData = [
  {
    type: "collapse",
    name: "Main Screen",
    key: "main",
    icon: <img src={main} alt="Main Screen Icon" style={{ paddingRight: '5px', width: '25px', marginLeft: '10px' }} />,
    route: "/main",
    component: Main,
  },
  {
    type: "collapse",
    name: "Water Fall Coverage Schedule",
    key: "coverage",
    icon: <img src={coverage} alt="Water Fall Coverage Schedule Icon" style={{ paddingRight: '5px', width: '25px', marginLeft: '10px' }} />,
    route: "/coverage",
    component: Coverage,
  },
  {
    type: "collapse",
    name: "Agent Data Base",
    key: "database",
    icon: <img src={database} alt="Agent Data Base Icon" style={{ paddingRight: '5px', width: '25px', marginLeft: '10px' }} />,
    route: "/database",
    component: Database,
  },
  {
    type: "collapse",
    name: "Agent Report Form",
    key: "report",
    icon: <img src={report} alt="Agent Report Form Icon" style={{ paddingRight: '5px', width: '25px', marginLeft: '10px' }} />,
    route: "/report",
    component: Report,
  },
  {
    type: "collapse",
    name: "Agent Schedule Form",
    key: "schedule",
    icon: <img src={schedule} alt="Agent Schedule Form Icon" style={{ paddingRight: '5px', width: '25px', marginLeft: '10px' }} />,
    route: "/schedule",
    component: Schedule,
  },
  {
    type: "collapse",
    name: "Retainer Tracker Sheet",
    key: "retainer",
    icon: <img src={retainer} alt="Retainer Tracker Sheet Icon" style={{ paddingRight: '5px', width: '25px', marginLeft: '10px' }} />,
    route: "/retainer",
    component: Retainer,
  },
];

// Sample user data
const sampleUser = {
  name: "Pikachu the Airbender",
  email: "pikachu@example.com",
  avatar: "https://i.pinimg.com/564x/8f/97/bd/8f97bdd5169501e5b80b8a5f701d2ef7.jpg",
};

const SideNav = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <div
      className={`sidenav ${isCollapsed ? 'collapsed' : ''}`}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      style={{ zIndex: 1000 }}
    >
      <div className="brand-container" onClick={handleToggleCollapse}>
        <img src={viribuz} alt="Viribuz" className={`brand-logo ${isCollapsed ? 'collapsed' : ''}`} />
        {!isCollapsed && <span className="brand-name">VIRIBUZ</span>}
        <FontAwesomeIcon icon={isCollapsed ? faAngleRight : faAngleLeft} className="collapse-icon" style={{ color: isCollapsed ? 'transparent' : 'transparent' }} />
      </div>

      {SideNavData.map((item) => (
        <NavLink
          key={item.key}
          to={item.route}
          activeClassName="active-tab"
        >
          <span>{item.icon}</span>
          <span>{isCollapsed ? '' : item.name}</span>
        </NavLink>
      ))}

      <div
        className="user-info"
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '15px',
          cursor: 'pointer',
          marginLeft: '10px',
          display: 'flex', // Add flex display
          alignItems: 'center', // Align items vertically
        }}
      >
        <img src={sampleUser.avatar} alt="User Avatar" style={{ marginRight: '10px', width: '30px', borderRadius: '50%' }} />
        <div>
          <span style={{ display: 'block' }}>{isCollapsed ? '' : sampleUser.name}</span>
          <span style={{ display: 'block', fontSize: '0.8rem' }}>{isCollapsed ? '' : sampleUser.email}</span>
        </div>
        {!isCollapsed && <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: '3rem' }} />}
      </div>
    </div>
  );
};

export default SideNav;
