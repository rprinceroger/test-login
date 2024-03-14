import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import editIcon from '../../../assets/icons/edit.png';
import delIcon from '../../../assets/icons/delete.png';

import '../retainertracker.css';

const CAMPTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    campaign: '',
    lawFirm: '',
    retainer: '',
    leadName: '',
    retainerMethod: '',
    systemUsed: '',
    medicalRecord: '',
    retainerPushed: '',
  });
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Load data from local storage on component mount
    const savedData = JSON.parse(localStorage.getItem('camptable_data')) || [];
    setTableData(savedData);
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    // Clear form data on close
    setFormData({
      campaign: '',
      lawFirm: '',
      retainer: '',
      leadName: '',
      retainerMethod: '',
      systemUsed: '',
      medicalRecord: '',
      retainerPushed: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitForm = () => {
    // Save data to local storage and update tableData
    const newData = [...tableData, formData];
    localStorage.setItem('camptable_data', JSON.stringify(newData));
    setTableData(newData);

    closeModal();
  };

  const onDeleteClick = (rowIndex) => {
    // Remove the row from data and update local storage
    const newData = [...tableData];
    newData.splice(rowIndex, 1);
    localStorage.setItem('camptable_data', JSON.stringify(newData));
    setTableData(newData);
  };

  const onEditClick = (rowIndex) => {
    // Populate the modal with data from the selected row
    const selectedRow = tableData[rowIndex];
    setFormData(selectedRow);
    openModal();
  };

  // Sample options for Campaign, Law Firm, and Medical Record
  const campaignOptions = ['CAMP', 'NEC', 'MVA', 'TALC'];
  const lawFirmOptions = ['Meyer', 'SR', 'Stanley', 'Lawfty', 'LP', 'Warren'];
  const medicalRecordOptions = ['YES', 'NO', 'N/A'];
  const retainerPushedOptions = ['YES', 'NO', 'N/A', 'PAUSED'];

  return (
    <div className="container-fluid" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
      <div className="card bg-white card-with-box-shadow">
        <div className="card-body">
          <h3 className="card-title d-flex justify-content-between align-items-center" style={{ color: 'black' }}>
            Camp Lejeune
            <div>
              <button
                className="btn"
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  fontSize: '14px',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
                onClick={openModal}
              >
                Add Lead +
              </button>
            </div>
          </h3>
          <div className="scrollable-table" style={{ maxHeight: '450px', overflowY: 'auto' }}>
            <table className="table">
              <thead className="thead-fixed">
                <tr>
                  <th scope="col">Campaign</th>
                  <th scope="col">Law Firm</th>
                  <th scope="col">Retainer/LT</th>
                  <th scope="col">Lead Name</th>
                  <th scope="col">Retainer Method</th>
                  <th scope="col">System Used</th>
                  <th scope="col">Medical Record</th>
                  <th scope="col">Retainer Pushed</th>
                  <th scope="col"></th> {/* New column for icons */}
                </tr>
              </thead>
              <tbody>
                {/* Render data from local storage */}
                {tableData.map((rowData, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{rowData.campaign}</td>
                    <td>{rowData.lawFirm}</td>
                    <td>{rowData.retainer}</td>
                    <td>{rowData.leadName}</td>
                    <td>{rowData.retainerMethod}</td>
                    <td>{rowData.systemUsed}</td>
                    <td>{rowData.medicalRecord}</td>
                    <td>{rowData.retainerPushed}</td>
                    <td>
                      {/* Icons for edit and delete */}
                      <img
                        src={delIcon}
                        alt="Delete"
                        onClick={() => onDeleteClick(rowIndex)}
                        style={{
                          cursor: 'pointer',
                          marginRight: '5px',
                          filter: 'brightness(1.2)',
                          transition: 'filter 0.3s ease-in-out',
                          borderRadius: '20%', // Set border-radius
                        }}
                        className="retainer-icon-hover-glow"
                      />
                      <img
                        src={editIcon}
                        alt="Edit"
                        onClick={() => onEditClick(rowIndex)}
                        style={{
                          cursor: 'pointer',
                          filter: 'brightness(1.2)',
                          transition: 'filter 0.3s ease-in-out',
                          borderRadius: '20%', // Set border-radius
                        }}
                        className="retainer-icon-hover-glow"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* React-Bootstrap Modal */}
      <Modal show={modalVisible} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'black', fontWeight: 'bold' }}>Camp Lejeune</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Form fields go here */}
            <Form.Group controlId="formCampaign">
              <Form.Label>Campaign:</Form.Label>
              <Dropdown onSelect={(selectedOption) => setFormData((prevData) => ({ ...prevData, campaign: selectedOption }))}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: '100%', border: '1px solid #cbcbcb' }}>
                  {formData.campaign || 'Select Campaign'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {campaignOptions.map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <div className="row mb-3">
              <div className="col-6">
                <Form.Group controlId="formLawFirm">
                  <Form.Label>Law Firm:</Form.Label>
                  <Dropdown onSelect={(selectedOption) => setFormData((prevData) => ({ ...prevData, lawFirm: selectedOption }))}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: '100%', border: '1px solid #cbcbcb' }}>
                      {formData.lawFirm || 'Select Law Firm'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {lawFirmOptions.map((option) => (
                        <Dropdown.Item key={option} eventKey={option}>
                          {option}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group controlId="formRetainer">
                  <Form.Label>Retainer/LT:</Form.Label>
                  <Dropdown
                    onSelect={(selectedOption) => setFormData((prevData) => ({ ...prevData, retainer: selectedOption }))}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: '100%', border: '1px solid #cbcbcb' }}>
                      {formData.retainer || 'Select Retainer/LT'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {medicalRecordOptions.map((option) => (
                        <Dropdown.Item key={option} eventKey={option}>
                          {option}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </div>
            </div>

            <Form.Group controlId="formLeadName">
              <Form.Label>Lead Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Lead Name"
                name="leadName"
                value={formData.leadName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formRetainerMethod">
              <Form.Label>Retainer Method:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Retainer Method"
                name="retainerMethod"
                value={formData.retainerMethod}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formSystemUsed">
              <Form.Label>System Used:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter System Used"
                name="systemUsed"
                value={formData.systemUsed}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="row mb-3">
              <div className="col-6">
                <Form.Group controlId="formMedicalRecord">
                  <Form.Label>Medical Record:</Form.Label>
                  <Dropdown
                    onSelect={(selectedOption) => setFormData((prevData) => ({ ...prevData, medicalRecord: selectedOption }))}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: '100%', border: '1px solid #cbcbcb' }}>
                      {formData.medicalRecord || 'Select Option'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {medicalRecordOptions.map((option) => (
                        <Dropdown.Item key={option} eventKey={option}>
                          {option}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group controlId="formRetainerPushed">
                  <Form.Label>Retainer Pushed:</Form.Label>
                  <Dropdown
                    onSelect={(selectedOption) => setFormData((prevData) => ({ ...prevData, retainerPushed: selectedOption }))}
                  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: '100%', border: '1px solid #cbcbcb' }}>
                      {formData.retainerPushed || 'Select Option'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {retainerPushedOptions.map((option) => (
                        <Dropdown.Item key={option} eventKey={option}>
                          {option}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </div>
            </div>

            {/* Repeat for other form fields */}
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ marginBottom: '1rem', marginRight: '1rem' }}>
          <Button
            variant="secondary"
            onClick={closeModal}
            style={{ border: '1px solid #cbcbcb' }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={submitForm}
            style={{ backgroundColor: '#7F56D9', borderColor: '#7F56D9', color: 'white' }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CAMPTable;