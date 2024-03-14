import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import editIcon from '../../../assets/icons/edit.png';
import delIcon from '../../../assets/icons/delete.png';

const MedicalRecord = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log('Modal opened');
  };

  const closeModal = () => {
    setShowModal(false);
    console.log('Modal closed');
  };

  const submitForm = () => {
    // Implement your form submission logic here
    alert("Form submitted!");
    closeModal();
  };

  const generateSampleData = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        retainerType: i % 2 === 0 ? 'Retainer' : 'LT',
        lawFirm: `Law Firm ${String.fromCharCode(65 + i % 4)}`,
        leadName: `Lead ${i}`,
      });
    }
    return data;
  };

  const sampleData = generateSampleData();

  return (
    <div className="container-fluid" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
      <div className="card bg-white card-with-box-shadow">
        <div className="card-body">
          <h3 className="card-title d-flex justify-content-between align-items-center" style={{ color: 'black' }}>
            Medical Record
            <button className="btn" onClick={openModal} style={{ cursor: 'pointer', backgroundColor: 'white', fontSize: '14px', padding: '5px 10px', borderRadius: '4px', border: '1px solid #ccc' }}>Add Lead +</button>
          </h3>
          <div className="scrollable-table" style={{ maxHeight: '450px', overflowY: 'auto' }}>
            <table className="table">
              <thead className="thead-fixed">
                <tr>
                  <th scope="col">Law Firm</th>
                  <th scope="col">Lead Name</th>
                  <th scope="col" colSpan="2" style={{ textAlign: 'center' }}>Type of Information</th>
                  <th scope="col" colSpan="2"></th> {/* New column for icons */}
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.lawFirm}</td>
                    <td>{row.leadName}</td>
                    <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', wordBreak: 'break-word' }}>Here's a sample Medical description for these table.</td>
                    <td style={{ textAlign: 'right' }}>
                      <img src={delIcon} alt="Delete" onClick={() => console.log('Delete clicked')} style={{ cursor: 'pointer', marginLeft: '5px' }} />
                      <img src={editIcon} alt="Edit" onClick={openModal} style={{ cursor: 'pointer' }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;
