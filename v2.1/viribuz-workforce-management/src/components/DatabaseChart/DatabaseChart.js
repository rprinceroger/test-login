import React, { useState, useEffect } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { Row, Col, Card } from "reactstrap";
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'chart.js/auto';
import { FaCalendar } from 'react-icons/fa';
import moment from 'moment';
import './database.css';
import './Daterange.css';

const defaultChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Total Attempts',
      data: [701, 714, 726, 732, 744, 756, 762, 774, 786, 792, 804, 816],
      borderColor: '#7F56D9',
      borderWidth: 2,
      fill: false,
    },
    {
      label: '# of Retainers',
      data: [601, 613, 626, 639, 643, 656, 669, 673, 686, 699, 703, 716],
      borderColor: '#B692F6',
      borderWidth: 2,
      fill: false,
    },
    {
      label: 'Live Transfers',
      data: [401, 413, 421, 434, 442, 455, 463, 476, 484, 497, 505, 518],
      borderColor: '#53389E',
      borderWidth: 2,
      fill: false,
    },
    {
      label: 'Documents Sent',
      data: [201, 214, 228, 234, 248, 254, 268, 274, 288, 294, 308, 314],
      borderColor: '#DDD5F3',
      borderWidth: 2,
      fill: false,
    },
  ],
};

const ChartContainer = ({ chartData: propChartData, startDate, endDate }) => {
  return (
    <Container fluid style={{ marginTop: '2rem' }} >
      <Row>
        <Col className="d-flex justify-content-end">
          <div className="datepicker-wrapper">
            <label>Year:</label>
            <Dropdown onSelect={(year) => console.log(year)}>
              <Dropdown.Toggle
                variant="info"
                id="dropdown-year"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  border: '1px solid #cbcbcb',
                  borderRadius: '10px',
                  margin: '2px',
                }}
              >
                {moment().year()}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey={moment().year()}>Current Year</Dropdown.Item>
                <Dropdown.Item eventKey={moment().year() - 1}>{moment().year() - 1}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="datepicker-wrapper">
            <label>Month:</label>
            <Dropdown onSelect={(month) => console.log(month)}>
              <Dropdown.Toggle
                variant="info"
                id="dropdown-month"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  border: '1px solid #cbcbcb',
                  borderRadius: '10px',
                  margin: '2px',
                }}
              >
                {moment.months()[moment().month()]}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {moment.months().map((month, index) => (
                  <Dropdown.Item key={index + 1} eventKey={index + 1}>
                    {month}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {propChartData.datasets && propChartData.datasets.length > 0 ? (
            <Line key={Math.random()} data={propChartData} />
          ) : (
            <p>No data available</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const propChartData = defaultChartData;

  useEffect(() => {
    // Additional logic if needed
  }, [startDate, endDate]);

  return (
    <ChartContainer
      chartData={propChartData}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

function Database(props) {
  return (
    <>
      <div className="container-fluid" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
        <Card className="card-chart bg-white card-with-box-shadow" style={{ paddingBottom: '20px' }}>
          <Dashboard />
        </Card>      
      </div>
    </>
  );
}

export default Database;
