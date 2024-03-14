import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { Container, Modal, Button, Dropdown } from "react-bootstrap";

import maindaterange from "../../assets/icons/maindaterange.png";

import "./maincalendar.css";
import "./calendar.css";

const renderEventContent = ({ event }) => {
  const startTime = moment(event.start).format('LT');
  const endTime = event.end ? moment(event.end).format('LT') : '';

  const eventStyle = {
    marginBottom: '2px',
    fontSize: '14px',
    borderLeft: `3px solid ${event.borderColor}`,
    paddingLeft: '8px',
  };

  const timeStyle = {
    fontSize: '12px',
    color: '#777',
  };

  return (
    <div style={eventStyle}>
      <div style={{ fontSize: '14px' }}>{event.title}</div>
      <div style={timeStyle}>
        {event.extendedProps.agent} | {startTime} - {endTime}
      </div>
    </div>
  );
};

function MainCalendar() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    // Fetch initial events
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  // Sample data for agents and campaigns
  const agentOptions = ["Agent 1", "Agent 2", "Agent 3"];
  const campaignOptions = ["CAMP", "NEC", "MVA", "TALC"];

  const campaignColors = {
    NEC: {
      borderColor: "#B2DDFF",
      backgroundColor: "#EFF8FF",
      fontColor: "#175CD3",
    },
    TALC: {
      borderColor: "#FEDF89",
      backgroundColor: "#FFFAEB",
      fontColor: "#B54708",
    },
    CAMP: {
      borderColor: "#FECDCA",
      backgroundColor: "#FEF3F2",
      fontColor: "#B42318",
    },
    MVA: {
      borderColor: "#ABEFC6",
      backgroundColor: "#ECFDF3",
      fontColor: "#067647",
    },
  };

  useEffect(() => {
    const fetchEvents = () => {
      const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
      const filteredEvents = storedEvents.filter((event) => {
        const eventYear = moment(event.start).year();
        const eventMonth = moment(event.start).month() + 1;
        return eventYear === selectedYear && eventMonth === selectedMonth;
      });
      setEvents(filteredEvents);
    };

    fetchEvents();
  }, [selectedYear, selectedMonth]);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);

    setStartDate(moment(info.event.start).format("YYYY-MM-DD"));
    setEndDate(info.event.end ? moment(info.event.end).format("YYYY-MM-DD") : "");
    setSelectedAgent(info.event.extendedProps.agent || "");
    setSelectedCampaign(info.event.extendedProps.campaign || "");

    // Extracting fromTime and toTime from the existing event
    const { fromTime, toTime } = info.event.extendedProps;

    // Ensure default values are provided for fromTime and toTime
    setFromTime(fromTime || "");
    setToTime(toTime || "");

    setShowModal(true);
  };

  const handleSelect = (info) => {
    setShowModal(true);
    setSelectedEvent(null);

    setStartDate(info.startStr);
    setEndDate(info.endStr || "");
    setSelectedAgent("");
    setSelectedCampaign("");

    // Reset fromTime and toTime based on the selected time range
    if (info.start instanceof Date) {
      setFromTime(moment(info.start).format("HH:mm"));
      setToTime(info.end ? moment(info.end).format("HH:mm") : ""); // Check if info.end is available
    } else {
      setFromTime("");
      setToTime("");
    }

    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setDangerAlert(false);
  };

  const handleFormSubmit = () => {
    console.log("Handling form submit");

    // Log relevant information before constructing the formData object
    console.log("Selected Event:", selectedEvent);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Selected Agent:", selectedAgent);
    console.log("Selected Campaign:", selectedCampaign);
    console.log("From Time:", fromTime);
    console.log("To Time:", toTime);

    const formData = {
      id: selectedEvent ? selectedEvent.id : uuidv4(),
      start: startDate,
      end: endDate,
      backgroundColor: campaignColors[selectedCampaign].backgroundColor,
      borderColor: campaignColors[selectedCampaign].borderColor,
      fontColor: campaignColors[selectedCampaign].fontColor,
      extendedProps: { agent: selectedAgent, campaign: selectedCampaign, fromTime, toTime },
    };

    if (formData.end && formData.end <= formData.start) {
      setDangerAlert(true);
      return;
    }

    // Find the index of the event with the same ID in the current events array
    const eventIndex = events.findIndex((event) => event.id === formData.id);

    // If the event with the same ID exists, update it; otherwise, add the new event
    const updatedEvents = eventIndex !== -1 ? [...events] : [...events, formData];
    if (eventIndex !== -1) {
      updatedEvents[eventIndex] = formData;
    }

    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    console.log("Updated events:", updatedEvents);
    console.log("Local storage:", localStorage.getItem("events"));
    setShowModal(false);
  };

  const calendarRef = React.createRef();

  const handleYearChange = (year) => {
    setSelectedYear(parseInt(year));
    const newDate = calendarRef.current.getApi().getDate();
    newDate.setFullYear(year);
    calendarRef.current.getApi().gotoDate(newDate);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(parseInt(month));
    const newDate = calendarRef.current.getApi().getDate();
    newDate.setMonth(month - 1); // Months are zero-based in JavaScript
    calendarRef.current.getApi().gotoDate(newDate);
  };

  return (
    <>
      <Container fluid className="mobile-padding-reset" style={{ paddingLeft: '5rem', marginTop: '2rem' }}>
        <div className="d-flex justify-content-between mb-5" style={{ marginRight: '5px', alignItems: 'center', }}>
          <p style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: 'auto', marginRight: '5px' }}>Year</p>
          <Dropdown onSelect={handleYearChange}>
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
              <img src={maindaterange} alt="Range" style={{ paddingRight: '10px' }} />{selectedYear}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey={moment().year()}>Current Year</Dropdown.Item>
              <Dropdown.Item eventKey={moment().year() - 1}>{moment().year() - 1}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <p style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '5px', marginRight: '5px' }}>Month</p>
          <Dropdown onSelect={handleMonthChange}>
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
              <img src={maindaterange} alt="Range" style={{ paddingRight: '10px' }} />{moment.months()[selectedMonth - 1]}
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

        <FullCalendar
          ref={calendarRef}
          key={`${selectedYear}-${selectedMonth}`}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "",
            center: "title",
            right: "",
          }}
          events={events.map(event => ({
            ...event,
            borderColor: campaignColors[event.extendedProps.campaign].borderColor,
            backgroundColor: campaignColors[event.extendedProps.campaign].backgroundColor,
            fontColor: campaignColors[event.extendedProps.campaign].fontColor,
          }))}
          eventClick={handleEventClick}
          selectable={true}
          select={handleSelect}
          eventContent={renderEventContent}
        />

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: 'bold' }}>
              {selectedEvent ? "Edit Event" : "Edit Agent Schedule"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="alert alert-danger"
              role="alert"
              style={{ display: dangerAlert ? "block" : "none" }}
            >
              End date should be greater than start date.
            </div>
            <form onSubmit={(e) => e.preventDefault()}>

              <div className="form-group">
                <label htmlFor="agent-dropdown">Select Agent *</label>
                <select
                  id="agent-dropdown"
                  className="form-control"
                  value={selectedAgent}
                  onChange={(e) => setSelectedAgent(e.target.value)}
                  required
                >
                  <option value="" disabled>Select an agent</option>
                  {agentOptions.map((agent, index) => (
                    <option key={index} value={agent}>
                      {agent}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="campaign-dropdown">Select Campaign *</label>
                <select
                  id="campaign-dropdown"
                  className="form-control"
                  value={selectedCampaign}
                  onChange={(e) => setSelectedCampaign(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a campaign</option>
                  {campaignOptions.map((campaign, index) => (
                    <option key={index} value={campaign}>
                      {campaign}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="start-date">Start date *</label>
                <input
                  type="date"
                  className="form-control"
                  id="start-date"
                  placeholder="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between">
                  <div style={{ flex: 1, marginRight: '10px' }}>
                    <label htmlFor="from-time">From *</label>
                    <input
                      type="time"
                      className="form-control"
                      id="from-time"
                      placeholder="HH:MM"
                      value={fromTime}
                      onChange={(e) => setFromTime(e.target.value)}
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="to-time">To *</label>
                    <input
                      type="time"
                      className="form-control"
                      id="to-time"
                      placeholder="HH:MM"
                      value={toTime}
                      onChange={(e) => setToTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <Button variant="secondary" onClick={handleModalClose} style={{ border: '1px solid #cbcbcb', borderRadius: '10px', width: '13.5rem', }}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleFormSubmit} style={{ backgroundColor: '#7F56D9', borderRadius: '10px', color: 'white', width: '13.5rem', }}>
              {selectedEvent ? "Save Changes" : "Save"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default MainCalendar;
