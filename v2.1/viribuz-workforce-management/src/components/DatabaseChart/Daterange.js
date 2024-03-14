import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from 'react-icons/fa';

import './Daterange.css';

const CustomDatePicker = ({ selected, onChange, placeholder }) => (
  <div className="datepicker-wrapper">
    <label>{placeholder}:</label>
    <div className="custom-datepicker-input">
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="MM/dd/yyyy"
        placeholderText={`Select ${placeholder}`}
      />
    </div>
  </div>
);

const CustomInput = React.forwardRef(({ value, onClick, onChange }, ref) => (
  <div className="custom-input" onClick={onClick} ref={ref}>
    <FaCalendar className="calendar-icon" />
    {value}
    <input type="hidden" value={value} onChange={() => {}} />
  </div>
));

const Daterange = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="daterange-container">
      <CustomDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholder="Start Date"
      />

      <CustomDatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholder="End Date"
      />
    </div>
  );
};

export default Daterange;
