import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

import "./reportform.css";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    agentName: '',
    campaign: '',
    phoneCalls: '',
    messageSent: '',
    emailSent: '',
    disqualified: '',    
    liveTransfersSent: '',
    appointmentSet: '',
    retainers: '',
    documentsSent: '',
    showedAppointments: '',
    retainersSet: '',
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const currentDate = new Date().toLocaleString();
    setRecords([...records, { ...formData, saveDate: currentDate }]);
    setFormData({
      date: '',
      agentName: '',
      campaign: '',
      phoneCalls: '',
      messageSent: '',
      emailSent: '',
      disqualified: '',    
      liveTransfersSent: '',
      appointmentSet: '',
      retainers: '',
      documentsSent: '',
      showedAppointments: '',
      retainersSet: '',
    });
  };

  return (
  	<div className="container-fluid" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
	    <Container className="container-fluid mt-5" style={{ color: 'inherit' }}>
	      <Row className="justify-content-end">
	        {/* First Card - Date, Name, Campaign */}
	        <Col md={6}>
	          <Card className="mb-4 bg-white">
	            <Card.Body>
	              <Form.Group className="mb-3">
	                <Form.Label>Date</Form.Label>
	                <Form.Control
	                  type="date"
	                  name="date"
	                  value={formData.date}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>
	              <Form.Group className="mb-3">
	                <Form.Label>Agent Name</Form.Label>
	                <Form.Control
	                  type="text"
	                  name="agentName"
	                  value={formData.agentName}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>
	              <Form.Group className="mb-3">
	                <Form.Label>Campaign</Form.Label>
	                <Form.Control
	                  type="text"
	                  name="campaign"
	                  value={formData.campaign}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>
	            </Card.Body>
	          </Card>
	        </Col>

	        {/* Second Card - Other Fields */}
	        <Col md={6}>
	          <Card className="mb-4 bg-white">
	            <Card.Body>

	              {/* Form.Label for additional fields */}
	              <Form.Group className="mb-3">
	                <Form.Label>Phone Calls</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="phoneCalls"
	                  value={formData.phoneCalls}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              <Form.Group className="mb-3">
	                <Form.Label>Message Sent</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="messageSent"
	                  value={formData.messageSent}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              <Form.Group className="mb-3">
	                <Form.Label>Email Sent</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="emailSent"
	                  value={formData.emailSent}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              <Form.Group className="mb-3">
	                <Form.Label>Disqualified</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="disqualified"
	                  value={formData.disqualified}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              <Form.Group className="mb-3">
	                <Form.Label>Number of Live Transfers Sent</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="liveTransfersSent"
	                  value={formData.liveTransfersSent}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              <Form.Group className="mb-3">
	                <Form.Label>Number of Appointment Set</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="appointmentSet"
	                  value={formData.appointmentSet}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              <Form.Group className="mb-3">
	                <Form.Label>Number of Retainers</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="retainers"
	                  value={formData.retainers}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              <Form.Group className="mb-3">
	                <Form.Label>Number of Documents Sent</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="documentsSent"
	                  value={formData.documentsSent}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              <Form.Group className="mb-3">
	                <Form.Label>Number of Showed Appointments</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="showedAppointments"
	                  value={formData.showedAppointments}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              <Form.Group className="mb-3">
	                <Form.Label>Number of Retainers Set</Form.Label>
	                <Form.Control
	                  type="number"
	                  name="retainersSet"
	                  value={formData.retainersSet}
	                  onChange={handleChange}
	                  style={{ color: 'inherit' }}
	                />
	              </Form.Group>

	              {/* Buttons Row */}
	              <Row className="mb-3">
	                <Col>
										<Button className="glow-button" style={{ border: '1px solid #cbcbcb', backgroundColor: 'white', color: 'black', marginLeft: '45%' }}>
										  Cancel
										</Button>{' '}
										<Button className="glow-button" onClick={handleSave} style={{ backgroundColor: '#7F56D9', color: 'white' }}>
										  Submit
										</Button>
	                </Col>
	              </Row>
	            </Card.Body>
	          </Card>
	        </Col>
	      </Row>

	      {/* Display Records as a List */}
	      <Row className="mt-4">
	        <Col>
	          <ul>
	            {records.map((record, index) => (
	              <li key={index}>
	                {Object.keys(record).map((fieldName) => (
	                  <div key={fieldName}>
	                    <strong>{fieldName}:</strong> {record[fieldName]}
	                  </div>
	                ))}
	              </li>
	            ))}
	          </ul>
	        </Col>
	      </Row>
	    </Container>
    </div>
  );
};

export default ReportForm;
