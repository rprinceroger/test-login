import React, { useState } from 'react';
import { Container, Card, Dropdown, Button, Table, Form, Row, Col } from 'react-bootstrap';

import "./scheduletimecard.css";
import "./custom-style.css";


const CampaignCell = ({ onSelectCampaign }) => (
  <td>
    <CampaignDropdown onSelectCampaign={onSelectCampaign} />
  </td>
);

const CampaignDropdown = ({ onSelectCampaign }) => {
  const campaigns = ['CAMP', 'NEC', 'MVA', 'TALC'];

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="campaignDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid #D0D5DD',
          marginTop: '2rem',
        }}
      >
        Campaign
      </button>
      <div className="dropdown-menu" aria-labelledby="campaignDropdown">
        {campaigns.map((campaign) => (
          <a key={campaign} className="dropdown-item" href="#" onClick={() => onSelectCampaign(campaign)}>
            {campaign}
          </a>
        ))}
      </div>
    </div>
  );
};

const TimeCard = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [payPeriod, setPayPeriod] = useState('00/00/00-00/00/00 Weekly');
  const payPeriods = ['01/01/22-07/01/22 Weekly', '08/01/22-14/01/22 Weekly'];
  const campaigns = ['CAMP', 'NEC', 'MVA', 'TALC'];
  const firms = ['Meyer', 'SR', 'Stanley', 'Lawfty', 'LP', 'Warren'];

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
  };

  const handlePayPeriodChange = (selectedPayPeriod) => {
    setPayPeriod(selectedPayPeriod);
  };

  const handleCampaignChange = (selectedCampaign, day) => {
    
  };

  return (
    <div className="container-fluid" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
      <Card className="card bg-white card-with-box-shadow" style={{ paddingBottom: '20px' }}>
        <Card.Header>
          <Row>
            <Col md={6}>
              <h3 className="card-title">Time Cards</h3>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row className="d-flex align-items-center">
            <Col md={1} className="scheduletimecard-year">
              <Form.Group>
                <Form.Label>Year</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle id="yearDropdown" style={{ backgroundColor: 'white', color: 'black', border: '1px solid #D0D5DD' }}>
                    {year}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleYearChange(2022)}>2022</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleYearChange(2023)}>2023</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleYearChange(2024)}>2024</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Col>
            <Col md={2} className="scheduletimecard-payperiod">
              <Form.Group>
                <Form.Label>Pay Period</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="payPeriodDropdown" style={{ backgroundColor: 'white', color: 'black', border: '1px solid #D0D5DD' }}>
                    {payPeriod}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {payPeriods.map((period) => (
                      <Dropdown.Item key={period} onClick={() => handlePayPeriodChange(period)}>
                        {period}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Col>
            <Col md={3} className="scheduletimecard-runreport" style={{ marginRight: '0', marginTop: '1.2rem' }}>
              <Button className="btn" style={{ backgroundColor: '#7F56D9', color: 'white' }}>
                Run Report
              </Button>
            </Col>
            <Col md={2} className="scheduletimecard-savetimecard" style={{ marginRight: '0', marginTop: '1.2rem' }}>
              <Button className="btn" style={{ backgroundColor: 'white', color: '#7F56D9', border: '1px solid #D6BBFB' }}>
                Save Time Card
              </Button>
            </Col>
            <Col md={2} className="scheduletimecard-exittimecard" style={{ marginRight: '0', marginTop: '1.2rem' }}>
              <Button className="btn" style={{ backgroundColor: 'white', color: 'black', border: '1px solid #D0D5DD' }}>
                Exit Time Card
              </Button>
            </Col>
          </Row>

          <div className="mt-4">
            <Table>
              {/* ... table content ... */}
              <thead>
                <tr>
                  <th colSpan="2">Week 1</th>
                  <th>SAT</th>
                  <th>SUN</th>
                  <th>MON</th>
                  <th>TUE</th>
                  <th>WED</th>
                  <th>THU</th>
                  <th>FRI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2">Regular</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="campaignDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Campaign
                      </button>
                      <div className="dropdown-menu" aria-labelledby="campaignDropdown">
                        {campaigns.map((campaign) => (
                          <a key={campaign} className="dropdown-item" href="#">
                            {campaign}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="campaignDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Campaign
                      </button>
                      <div className="dropdown-menu" aria-labelledby="campaignDropdown">
                        {campaigns.map((campaign) => (
                          <a key={campaign} className="dropdown-item" href="#">
                            {campaign}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="campaignDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Campaign
                      </button>
                      <div className="dropdown-menu" aria-labelledby="campaignDropdown">
                        {campaigns.map((campaign) => (
                          <a key={campaign} className="dropdown-item" href="#">
                            {campaign}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="campaignDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Campaign
                      </button>
                      <div className="dropdown-menu" aria-labelledby="campaignDropdown">
                        {campaigns.map((campaign) => (
                          <a key={campaign} className="dropdown-item" href="#">
                            {campaign}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="campaignDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Campaign
                      </button>
                      <div className="dropdown-menu" aria-labelledby="campaignDropdown">
                        {campaigns.map((campaign) => (
                          <a key={campaign} className="dropdown-item" href="#">
                            {campaign}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="campaignDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Campaign
                      </button>
                      <div className="dropdown-menu" aria-labelledby="campaignDropdown">
                        {campaigns.map((campaign) => (
                          <a key={campaign} className="dropdown-item" href="#">
                            {campaign}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="campaignDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Campaign
                      </button>
                      <div className="dropdown-menu" aria-labelledby="campaignDropdown">
                        {campaigns.map((campaign) => (
                          <a key={campaign} className="dropdown-item" href="#">
                            {campaign}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  {/* Repeat this block for other days */}
                </tr>

                <tr>
                  <td colSpan="2"></td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="firmDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Firm
                      </button>
                      <div className="dropdown-menu" aria-labelledby="firmDropdown">
                        {firms.map((firm) => (
                          <a key={firm} className="dropdown-item" href="#">
                            {firm}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="firmDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Firm
                      </button>
                      <div className="dropdown-menu" aria-labelledby="firmDropdown">
                        {firms.map((firm) => (
                          <a key={firm} className="dropdown-item" href="#">
                            {firm}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="firmDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Firm
                      </button>
                      <div className="dropdown-menu" aria-labelledby="firmDropdown">
                        {firms.map((firm) => (
                          <a key={firm} className="dropdown-item" href="#">
                            {firm}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="firmDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Firm
                      </button>
                      <div className="dropdown-menu" aria-labelledby="firmDropdown">
                        {firms.map((firm) => (
                          <a key={firm} className="dropdown-item" href="#">
                            {firm}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="firmDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Firm
                      </button>
                      <div className="dropdown-menu" aria-labelledby="firmDropdown">
                        {firms.map((firm) => (
                          <a key={firm} className="dropdown-item" href="#">
                            {firm}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="firmDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Firm
                      </button>
                      <div className="dropdown-menu" aria-labelledby="firmDropdown">
                        {firms.map((firm) => (
                          <a key={firm} className="dropdown-item" href="#">
                            {firm}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="firmDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          border: '1px solid #D0D5DD',
                          marginTop: '2rem',
                        }}
                      >
                        Firm
                      </button>
                      <div className="dropdown-menu" aria-labelledby="firmDropdown">
                        {firms.map((firm) => (
                          <a key={firm} className="dropdown-item" href="#">
                            {firm}
                          </a>
                        ))}
                      </div>
                    </div>
                  </td>
                  {/* Repeat this block for other days */}
                </tr>


                {/* Add more rows as needed */}

                <tr>
                  <td colSpan="2">Holidays</td>
                  <td><Form.Control type="number" id="satTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="sunTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="monTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="tueTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="wedTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="thuTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="friTotal" defaultValue="8" /></td>
                </tr>

                <tr>
                  <td colSpan="2">Vacation</td>
                  <td><Form.Control type="number" id="satTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="sunTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="monTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="tueTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="wedTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="thuTotal" defaultValue="8" /></td>
                  <td><Form.Control type="number" id="friTotal" defaultValue="8" /></td>
                </tr>

              </tbody>


            </Table>
          </div>
        </Card.Body>
        <Card.Footer className="container-fluid" style={{ borderTop: '1px solid #7F56D9' }}>

            <tbody style={{ border: 'none' }}>
              <tr>
                <td colSpan="3" style={{ paddingRight: '1rem' }}>Total Hours:</td>
                <td style={{ paddingRight: '4.5rem' }}><Form.Control type="number" id="satTotal" defaultValue="0" /></td>
                <td style={{ paddingRight: '4.5rem' }}><Form.Control type="number" id="sunTotal" defaultValue="0" /></td>
                <td style={{ paddingRight: '4.5rem' }}><Form.Control type="number" id="monTotal" defaultValue="0" /></td>
                <td style={{ paddingRight: '4.5rem' }}><Form.Control type="number" id="tueTotal" defaultValue="0" /></td>
                <td style={{ paddingRight: '4.5rem' }}><Form.Control type="number" id="wedTotal" defaultValue="0" /></td>
                <td style={{ paddingRight: '4.5rem' }}><Form.Control type="number" id="thuTotal" defaultValue="0" /></td>
                <td style={{ paddingRight: '4.5rem' }}><Form.Control type="number" id="friTotal" defaultValue="0" /></td>
              </tr>
            </tbody>

        </Card.Footer>
      </Card>
    </div>
  );
};

export default TimeCard;
