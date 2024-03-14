import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Row, Col, Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'chart.js/auto';

import { FaCalendar } from 'react-icons/fa';
import './database.css';

import './Daterange.css';

// Sample Data for the Graph
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
    // Add more datasets for other categories
  ],
};


const ChartContainer = ({ chartData: propChartData, startDate, endDate, onStartDateChange, onEndDateChange }) => (
  <Container fluid style={{ marginTop: '2rem' }} >
    <Row>
      <Col className="d-flex justify-content-end">
        <CustomDatePicker
          selected={startDate}
          onChange={onStartDateChange}
          placeholder="From"
        />
        <CustomDatePicker
          selected={endDate}
          onChange={onEndDateChange}
          placeholder="To"
          minDate={startDate}
        />
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

const CustomDatePicker = ({ selected, onChange, placeholder, minDate }) => (
  <div className="datepicker-wrapper">
    <label>{placeholder}:</label>
    <div className="custom-datepicker-input">
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="MM/dd/yyyy"
        placeholderText={`Select ${placeholder}`}
        customInput={<CustomInput />}
        minDate={minDate}
      />
    </div>
  </div>
);

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div className="custom-input" onClick={onClick} ref={ref}>
    <FaCalendar className="calendar-icon" />
    {value}
  </div>
));

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Dummy data for demonstration purposes
  const propChartData = defaultChartData; // Use a different variable name

  useEffect(() => {
    // Additional logic if needed
  }, [startDate, endDate]);

  return (
    <ChartContainer
      chartData={propChartData} // Pass the prop with the adjusted variable name
      startDate={startDate}
      endDate={endDate}
    />
  );
};


function Database(props) {
  return (
    <>
      <div className="container-fluid" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>

        {/* Integrate the Dashboard component */}
        <Card className="card-chart bg-white card-with-box-shadow" style={{ paddingBottom: '20px' }}>
          <Dashboard />
        </Card>      

      </div>
    </>
  );
}

export default Database;
