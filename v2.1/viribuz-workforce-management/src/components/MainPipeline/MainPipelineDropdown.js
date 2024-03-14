import React, { useState } from 'react';
import { Table, Container, Card, Form, DropdownButton, Dropdown } from 'react-bootstrap';

import "./mainpipeline.css";

const MainPipelineDropdown = () => {
    const [selectedCampaign, setSelectedCampaign] = useState("Campaign");
    const [selectedNewDropdown, setSelectedNewDropdown] = useState("Day 1-3");

    const handleCampaignSelect = (campaign) => {
        setSelectedCampaign(campaign);
    };

    const handleNewDropdownSelect = (option) => {
        setSelectedNewDropdown(option);
    };

    return (
        <div style={{ marginBottom: '4rem' }}>
            <div className="card">
                <DropdownButton
                    id="campaignDropdown"
                    title={selectedCampaign}
                    variant="default"
                    className="m-0 custom-dropdown"
                    style={{ color: 'black', position: 'absolute', top: 0, right: '11rem' }}
                >
                    <Dropdown.Item onClick={() => handleCampaignSelect("NEC")}>NEC</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCampaignSelect("TALC")}>TALC</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCampaignSelect("CL")}>CL</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCampaignSelect("MVA")}>MVA</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    id="newDropdown"
                    title={selectedNewDropdown}
                    variant="default"
                    className="m-0 custom-dropdown"
                    style={{ color: 'black', position: 'absolute', top: 0, right: '1rem' }}
                >
                    <Dropdown.Item onClick={() => handleNewDropdownSelect("Days 4-7")}>Days 4-7</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleNewDropdownSelect("Days 8-31")}>Days 8-31</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleNewDropdownSelect("Days 32-60")}>Days 32-60</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleNewDropdownSelect("Days 61-90")}>Days 61-90</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleNewDropdownSelect("Days 90+")}>Days 90+</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    );
};

export default MainPipelineDropdown;
