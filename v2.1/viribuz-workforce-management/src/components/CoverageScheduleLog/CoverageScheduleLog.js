import React, { useState } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

import './coverageschedulelog.css';

const ScheduleLog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data
  const [data, setData] = useState([
	  {
	    agentName: 'John Doe',
	    originalScheduledDate: '01/15/2024',
	    requestedDate: '01/10/2024',
	    fromOriginal: '9:00 AM',
	    toOriginal: '4:00 PM',
	    fromRequested: '10:00 AM',
	    toRequested: '3:00 PM',
	    approveOrReject: 'Approved',
	  },
	  {
	    agentName: 'Jane Smith',
	    originalScheduledDate: '01/20/2024',
	    requestedDate: '01/12/2024',
	    fromOriginal: '11:00 AM',
	    toOriginal: '5:00 PM',
	    fromRequested: '9:30 AM',
	    toRequested: '4:30 PM',
	    approveOrReject: 'Approved',
	  },
	  {
	    agentName: 'Bob Johnson',
	    originalScheduledDate: '01/18/2024',
	    requestedDate: '01/14/2024',
	    fromOriginal: '8:30 AM',
	    toOriginal: '4:00 PM',
	    fromRequested: '10:30 AM',
	    toRequested: '3:30 PM',
	    approveOrReject: 'Rejected',
	  },
	  {
	    agentName: 'Charlie Davis',
	    originalScheduledDate: '01/22/2024',
	    requestedDate: '01/16/2024',
	    fromOriginal: '9:00 AM',
	    toOriginal: '4:00 PM',
	    fromRequested: '10:45 AM',
	    toRequested: '3:45 PM',
	    approveOrReject: 'Approved',
	  },
	  {
	    agentName: 'Jane Smith',
	    originalScheduledDate: '01/20/2024',
	    requestedDate: '01/12/2024',
	    fromOriginal: '11:00 AM',
	    toOriginal: '5:00 PM',
	    fromRequested: '9:30 AM',
	    toRequested: '4:30 PM',
	    approveOrReject: 'Approved',
	  },
	  {
	    agentName: 'Bob Johnson',
	    originalScheduledDate: '01/18/2024',
	    requestedDate: '01/14/2024',
	    fromOriginal: '8:30 AM',
	    toOriginal: '4:00 PM',
	    fromRequested: '10:30 AM',
	    toRequested: '3:30 PM',
	    approveOrReject: 'Rejected',
	  },
	  {
	    agentName: 'Charlie Davis',
	    originalScheduledDate: '01/22/2024',
	    requestedDate: '01/16/2024',
	    fromOriginal: '9:00 AM',
	    toOriginal: '4:00 PM',
	    fromRequested: '10:45 AM',
	    toRequested: '3:45 PM',
	    approveOrReject: 'Approved',
	  },
	    {
	    agentName: 'John Doe',
	    originalScheduledDate: '01/15/2024',
	    requestedDate: '01/10/2024',
	    fromOriginal: '9:00 AM',
	    toOriginal: '4:00 PM',
	    fromRequested: '10:00 AM',
	    toRequested: '3:00 PM',
	    approveOrReject: 'Approved',
	  },
	  {
	    agentName: 'Jane Smith',
	    originalScheduledDate: '01/20/2024',
	    requestedDate: '01/12/2024',
	    fromOriginal: '11:00 AM',
	    toOriginal: '5:00 PM',
	    fromRequested: '9:30 AM',
	    toRequested: '4:30 PM',
	    approveOrReject: 'Approved',
	  },
	  {
	    agentName: 'Alice Brown',
	    originalScheduledDate: '01/25/2024',
	    requestedDate: '01/18/2024',
	    fromOriginal: '9:30 AM',
	    toOriginal: '5:00 PM',
	    fromRequested: '11:00 AM',
	    toRequested: '4:00 PM',
	    approveOrReject: 'Approved',
	  },
	  {
	    agentName: 'Charlie Davis',
	    originalScheduledDate: '01/22/2024',
	    requestedDate: '01/16/2024',
	    fromOriginal: '9:00 AM',
	    toOriginal: '4:00 PM',
	    fromRequested: '10:45 AM',
	    toRequested: '3:45 PM',
	    approveOrReject: 'Approved',
	  },
    // Add more sample data as needed
  ]);

  const pageSize = 5; // Number of rows per page

const renderTableRows = (pageNumber) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return data.slice(startIndex, endIndex).map((row, index) => (
    <tr key={index}>
      <td>{row.agentName}</td>
      <td>{row.originalScheduledDate}</td>
      <td>{row.fromOriginal}</td>
      <td>{row.toOriginal}</td>
      <td>{row.requestedDate}</td>
      <td>{row.fromRequested}</td>
      <td>{row.toRequested}</td>
      <td style={{ color: row.approveOrReject === 'Approved' ? 'green' : 'red' }}>{row.approveOrReject}</td>
    </tr>
  ));
};

  const totalPages = Math.ceil(data.length / pageSize);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container-fluid" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
      <Card className="mb-4 bg-white" style={{ borderTop: '3px solid #7b50d5', color: 'black' }}>
        <Card.Header>
          <h5 className="card-title">Change Schedule Request Log</h5>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Agent Name</th>
                <th>Original Scheduled Date</th>
                <th>From</th>
                <th>To</th>
                <th>Requested Date</th>
                <th>From</th>
                <th>To</th>
                <th>Approve/Reject</th>
              </tr>
            </thead>
            <tbody>{renderTableRows(currentPage)}</tbody>
          </Table>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              Page <span id="currentPage">{currentPage}</span> of <span id="totalPages">{totalPages}</span>
            </div>
            <nav aria-label="Page navigation" className="d-flex justify-content-end">
              <ul className="pagination">
                <li className="page-item" onClick={handlePrevPage}>
                  <button className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo; Previous</span>
                  </button>
                </li>
                <li className="page-item" onClick={handleNextPage}>
                  <button className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">Next &raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ScheduleLog;
