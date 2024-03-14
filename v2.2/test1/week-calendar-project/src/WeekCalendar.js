import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import moment from "moment";
import { nanoid } from "nanoid";

const WeekCalendar = () => {
  const [events, setEvents] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const fullCalendarRef = useRef(null);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setSelectedTime(moment(arg.dateStr).format('HH:mm'));
    setShowEventModal(true);
  };

  const handleCloseEventModal = () => {
    setSelectedDate("");
    setSelectedTime("");
    setEventTitle("");
    setShowEventModal(false);
  };

  const handleAddEvent = () => {
    const newEvent = {
      id: nanoid(),
      title: eventTitle,
      date: selectedDate,
      time: selectedTime,
    };
    setEvents([...events, newEvent]);
    localStorage.setItem('events', JSON.stringify([...events, newEvent]));
    handleCloseEventModal();
  };

  return (
    <Container>
      <Row>
        <Col>
          <FullCalendar
            ref={fullCalendarRef}
            plugins={[timeGridPlugin]}
            initialView="timeGridWeek"
            selectable={true}
            events={events}
            dateClick={handleDateClick}
          />
        </Col>
      </Row>
      <Modal show={showEventModal} onHide={handleCloseEventModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter event title" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formEventTime">
              <Form.Label>Time</Form.Label>
              <Form.Control type="text" readOnly value={selectedTime} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEventModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEvent}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default WeekCalendar;
