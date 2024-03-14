import React, { useState } from 'react';
import "./mainagenttable.css"


// Sample data for the table
const data = [
  { firstName: 'John', lastName: 'Doe', campaign: 'Campaign A', account: 'Account A', pipelineAssignment: 'Pipeline 1', startTime: '2023-01-01', endTime: '2023-01-10', retainers: 3, documentsSent: 15, callsMade: 10, messagesSent: 20 },
  { firstName: 'Jane', lastName: 'Doe', campaign: 'Campaign B', account: 'Account B', pipelineAssignment: 'Pipeline 2', startTime: '2023-02-01', endTime: '2023-02-15', retainers: 5, documentsSent: 20, callsMade: 8, messagesSent: 25 },
  { firstName: 'Bob', lastName: 'Johnson', campaign: 'Campaign C', account: 'Account C', pipelineAssignment: 'Pipeline 3', startTime: '2023-03-01', endTime: '2023-03-10', retainers: 2, documentsSent: 10, callsMade: 15, messagesSent: 18 },
  { firstName: 'Alice', lastName: 'Smith', campaign: 'Campaign D', account: 'Account D', pipelineAssignment: 'Pipeline 4', startTime: '2023-04-01', endTime: '2023-04-15', retainers: 4, documentsSent: 18, callsMade: 12, messagesSent: 22 },
  { firstName: 'Charlie', lastName: 'Brown', campaign: 'Campaign E', account: 'Account E', pipelineAssignment: 'Pipeline 5', startTime: '2023-05-01', endTime: '2023-05-20', retainers: 6, documentsSent: 25, callsMade: 20, messagesSent: 30 },
  // Additional data for page 2
  { firstName: 'David', lastName: 'Williams', campaign: 'Campaign F', account: 'Account F', pipelineAssignment: 'Pipeline 6', startTime: '2023-06-01', endTime: '2023-06-15', retainers: 3, documentsSent: 12, callsMade: 18, messagesSent: 24 },
  { firstName: 'Eva', lastName: 'Davis', campaign: 'Campaign G', account: 'Account G', pipelineAssignment: 'Pipeline 7', startTime: '2023-07-01', endTime: '2023-07-10', retainers: 5, documentsSent: 22, callsMade: 15, messagesSent: 20 },
  { firstName: 'Frank', lastName: 'Miller', campaign: 'Campaign H', account: 'Account H', pipelineAssignment: 'Pipeline 8', startTime: '2023-08-01', endTime: '2023-08-15', retainers: 4, documentsSent: 20, callsMade: 10, messagesSent: 28 },
  { firstName: 'Grace', lastName: 'Johnson', campaign: 'Campaign I', account: 'Account I', pipelineAssignment: 'Pipeline 9', startTime: '2023-09-01', endTime: '2023-09-20', retainers: 6, documentsSent: 25, callsMade: 22, messagesSent: 35 },
  { firstName: 'Harry', lastName: 'Smith', campaign: 'Campaign J', account: 'Account J', pipelineAssignment: 'Pipeline 10', startTime: '2023-10-01', endTime: '2023-10-15', retainers: 2, documentsSent: 15, callsMade: 12, messagesSent: 18 }
  // Add more data as needed
];

const AgentsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of rows per page

  const renderTableRows = (pageNumber) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return data.slice(startIndex, endIndex).map((row, index) => (
      <tr key={index}>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
        <td>{row.campaign}</td>
        <td>{row.account}</td>
        <td>{row.pipelineAssignment}</td>
        <td>{row.startTime}</td>
        <td>{row.endTime}</td>
        <td>{row.retainers}</td>
        <td>{row.documentsSent}</td>
        <td>{row.callsMade}</td>
        <td>{row.messagesSent}</td>
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
      
      <div id="agents-table-css" className="card" style={{ borderTop: '3px solid #7b50d5', color: 'black', }}>
        <div className="card-body">
          <h3 className="ml-0 mt-0" style={{ color: 'black' }}>Agents</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Campaign</th>
                <th>Account</th>
                <th>Pipeline Assignment</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Retainers</th>
                <th>Documents Sent</th>
                <th>Calls Made</th>
                <th>Messages Sent</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              {renderTableRows(currentPage)}
            </tbody>
          </table>
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
        </div>
      </div>
    </div>
  );
};

export default AgentsTable;
