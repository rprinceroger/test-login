import React, { useState, useEffect, useRef } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Card, Container, Row, Col, Dropdown, Modal, Form, Button } from "react-bootstrap";
import moment from "moment";
import { nanoid } from "nanoid";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AgentsList from './AgentsList'; // Import AgentsList component

const localizer = momentLocalizer(moment);

const WaterFall = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#f3f8ff');
  const [selectedColorLabel, setSelectedColorLabel] = useState('NEC');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setSelectedSlot(null);
    setNewEvent({});
    setSelectedColor('#f3f8ff');
    setSelectedColorLabel('NEC');
    setSelectedEvent(null);
  };

  const handleSelect = (slotInfo) => {
    setSelectedSlot({
      start: moment(slotInfo.start).toDate(),
      end: moment(slotInfo.end).toDate(),
    });
    setShowModal(true);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (selectedSlot) {
      const { start, end } = selectedSlot;
      const { title } = newEvent;
      const updatedEvents = [
        ...events,
        {
          id: nanoid(),
          title,
          start,
          end,
          color: selectedColor,
        },
      ];
      setEvents(updatedEvents);
      handleClose();
    } else if (selectedEvent) {
      // Handle edit event
      const updatedEvents = events.map((event) =>
        event.id === selectedEvent.id ? { ...event, ...newEvent } : event
      );
      setEvents(updatedEvents);
      handleClose();
    }
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.filter((event) => event.id !== selectedEvent.id);
    setEvents(updatedEvents);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleColorChange = (color, label) => {
    setSelectedColor(color);
    setSelectedColorLabel(label);
  };

  return (
    <Container fluid style={{ marginTop: '2rem', marginBottom: '3rem', marginLeft: '3rem' }}>
      <Row>
        <Col md={9}>
          <Container fluid className="WaterFallContainer">
            <Calendar
              localizer={localizer}
              events={events}
              defaultView="week"
              views={['week']}
              selectable
              onSelectSlot={handleSelect}
              onSelectEvent={handleEventClick}
              style={{ height: 500 }}
              eventPropGetter={(event) => ({
                style: {
                  backgroundColor: event.color,
                  color: 'gray',
                  border: 'none',
                },
              })}
            />
          </Container>
        </Col>
        <Col md={3}>
          <AgentsList />
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent ? "Edit Event" : "Add New Event"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                name="title"
                value={(selectedEvent ? selectedEvent.title : newEvent.title) || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formStart">
              <Form.Label>Start Date and Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={selectedSlot ? moment(selectedSlot.start).format('YYYY-MM-DDTHH:mm') : ''}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formEnd">
              <Form.Label>End Date and Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={selectedSlot ? moment(selectedSlot.end).format('YYYY-MM-DDTHH:mm') : ''}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formColor">
              <Form.Label>Color</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-color">
                  {selectedColorLabel}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleColorChange('#f3f8ff', 'NEC')}>NEC</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleColorChange('#fff5f4', 'CAMP')}>CAMP</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleColorChange('#f1fcf5', 'MVA')}>MVA</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleColorChange('#fffaee', 'TALC')}>TALC</Dropdown.Item>
                  {/* Add more colors as needed */}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {selectedEvent && (
            <Button variant="danger" onClick={handleDeleteEvent}>
              Delete
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEvent}>
            {selectedEvent ? "Save Changes" : "Save Event"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default WaterFall;
