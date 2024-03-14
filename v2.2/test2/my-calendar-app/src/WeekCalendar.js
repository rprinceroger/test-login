import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { Container, Modal, Button } from "react-bootstrap";

import "./weekcalendar.css";

const WeekCalendar = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setStartDate(moment(info.event.start).format("YYYY-MM-DD"));
    setEndDate(info.event.end ? moment(info.event.end).format("YYYY-MM-DD") : "");
    setFromTime(moment(info.event.start).format("HH:mm"));
    setToTime(info.event.end ? moment(info.event.end).format("HH:mm") : "");
    setShowModal(true);
  };

  const handleSelect = (info) => {
    setShowModal(true);
    setSelectedEvent(null);
    setStartDate(info.startStr);
    setEndDate(info.endStr || "");
    setFromTime(moment(info.start).format("HH:mm"));
    setToTime(info.end ? moment(info.end).format("HH:mm") : "");
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = () => {
    const formData = {
      id: selectedEvent ? selectedEvent.id : uuidv4(),
      start: startDate + "T" + fromTime,
      end: endDate + "T" + toTime,
    };

    // Update events
    const updatedEvents = selectedEvent
      ? events.map((event) => (event.id === formData.id ? formData : event))
      : [...events, formData];

    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setShowModal(false);
  };

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <>
      <Container>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          events={events}
          eventClick={handleEventClick}
          select={handleSelect}
          slotDuration="00:30:00" // 30-minute slot duration
        />
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent ? "Edit Event" : "Add Event"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="start-date">Start Date:</label>
                <input
                  type="date"
                  className="form-control"
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="from-time">From:</label>
                <input
                  type="time"
                  className="form-control"
                  id="from-time"
                  value={fromTime}
                  onChange={(e) => setFromTime(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="to-time">To:</label>
                <input
                  type="time"
                  className="form-control"
                  id="to-time"
                  value={toTime}
                  onChange={(e) => setToTime(e.target.value)}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleFormSubmit}>
              {selectedEvent ? "Update Event" : "Add Event"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default WeekCalendar;
