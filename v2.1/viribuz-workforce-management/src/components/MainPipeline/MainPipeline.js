import React, { useState } from 'react';
import { Table, Container, Card, Form, DropdownButton, Dropdown } from 'react-bootstrap';

import "./mainpipeline.css";

const Pipeline = () => {
    const [formData, setFormData] = useState({
        surveySubmitted: Array(7).fill(''),
        persequiVerified: Array(7).fill(''),
        manualFU: Array(7).fill(''),
        persequiAlert: Array(7).fill(''),
        unresponsive: Array(7).fill(''),
        apptBooked: Array(7).fill(''),
        apptNoShow: Array(7).fill(''),
        documentsSent: Array(7).fill(''),
        nonResponsiveX2: Array(7).fill(''),
    });

    const handleInputChange = (pipeline, agentIndex, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [pipeline]: prevData[pipeline].map((val, index) =>
                index === agentIndex ? value : val
            ),
        }));
    };

    return (
        <div className="container-fluid mobile-padding-reset" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
            <Card className="container-fluid card mt-4" style={{ backgroundColor: 'white', borderTop: '3px solid #7b50d5'}}>
                <Card.Body>
                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th>Pipeline</th>
                                <th>Agent 1</th>
                                <th>Agent 2</th>
                                <th>Agent 3</th>
                                <th>Agent 4</th>
                                <th>Agent 5</th>
                                <th>Agent 6</th>
                                <th>Agent 7</th>
                                <th>Reachout 1</th>
                                <th>Reachout 2</th>
                                <th>Reachout 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow
                                pipeline="Survey Submitted"
                                data={formData.surveySubmitted}
                                onInputChange={handleInputChange}
                            />
                            <TableRow
                                pipeline="Persequi Verified"
                                data={formData.persequiVerified}
                                onInputChange={handleInputChange}
                            />
                            <TableRow
                                pipeline="Manual F/U"
                                data={formData.manualFU}
                                onInputChange={handleInputChange}
                            />
                            <TableRow
                                pipeline="Persequi Alert"
                                data={formData.persequiAlert}
                                onInputChange={handleInputChange}
                            />
                            <TableRow
                                pipeline="Unresponsive"
                                data={formData.unresponsive}
                                onInputChange={handleInputChange}
                            />
                            <TableRow
                                pipeline="Appt Booked"
                                data={formData.apptBooked}
                                onInputChange={handleInputChange}
                            />
                            <TableRow
                                pipeline="Appt No Show"
                                data={formData.apptNoShow}
                                onInputChange={handleInputChange}
                            />
                            <TableRow
                                pipeline="Documents Sent"
                                data={formData.documentsSent}
                                onInputChange={handleInputChange}
                            />
                            <TableRow
                                pipeline="Non Responsive x 2"
                                data={formData.nonResponsiveX2}
                                onInputChange={handleInputChange}
                            />
                            {/* Add more rows as needed */}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

const TableRow = ({ pipeline, data, onInputChange }) => {
    return (
        <tr>
            <td>{pipeline}</td>
            {data.map((value, index) => (
                <td key={index}>
                    <Form.Control
                        type="text"
                        placeholder="Enter data"
                        value={value}
                        onChange={(e) => onInputChange(pipeline, index, e.target.value)}
                    />
                </td>
            ))}
            <td style={{ paddingLeft: '2.5rem' }}>
                <Form.Check type="checkbox" id={`${pipeline}-reachout1`} className="violet-check" />
            </td>
            <td style={{ paddingLeft: '2.5rem' }}>
                <Form.Check type="checkbox" id={`${pipeline}-reachout2`} className="violet-check" />
            </td>
            <td style={{ paddingLeft: '2.5rem' }}>
                <Form.Check type="checkbox" id={`${pipeline}-reachout3`} className="violet-check" />
            </td>
        </tr>
    );
};


export default Pipeline;
