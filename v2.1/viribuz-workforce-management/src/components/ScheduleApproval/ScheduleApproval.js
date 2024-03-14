import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import "./scheduleapproval.css";

const ApprovalCard = () => {
  const [employeeApproval, setEmployeeApproval] = useState(false);
  const [managerApproval, setManagerApproval] = useState(false);

  const handleEmployeeApprovalToggle = () => {
    setEmployeeApproval(!employeeApproval);
  };

  const handleManagerApprovalToggle = () => {
    setManagerApproval(!managerApproval);
  };

  return (

      <div className="container-fluid" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
        <Card className="card bg-white card-with-box-shadow mt-1">
          <Card.Body>
            <Row>
              <Col md={4}>
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th colSpan="2"></th>
                      <th>Week 1</th>
                      <th style={{ whiteSpace: 'nowrap' }}>PAY RECORD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="2" style={{ textAlign: 'center', verticalAlign: 'middle' }}>REGULAR</td>
                      <td  className="text-right square-cell">24</td>
                      <td className="text-right square-cell">24</td>
                    </tr>
                    <tr>
                      <td colSpan="2" style={{ textAlign: 'center', verticalAlign: 'middle' }}>HOLIDAY</td>
                      <td className="text-right square-cell">0.00</td>
                      <td className="text-right square-cell">0.00</td>
                    </tr>
                    <tr>
                      <td colSpan="2" style={{ textAlign: 'center', verticalAlign: 'middle' }}>VACATION</td>
                      <td className="text-right square-cell">0.00</td>
                      <td className="text-right square-cell">0.00</td>
                    </tr>
                    <tr>
                      <td className="square-cell" colSpan="2" style={{ backgroundColor: '#7F56D9', color: 'white', textAlign: 'center', verticalAlign: 'middle' }}>Total</td>
                      <td className="text-right square-cell">40.00</td>
                      <td className="text-right square-cell">40.00</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              <Col md={4}>
                <table className="approval-table">
                  <thead>
                    <tr>
                      <th>Time-Off Hours Balance</th>
                      <th>Approvals</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>REGULAR</td>
                      <td>
                      <div
                        className={`approval-checkbox ${employeeApproval ? 'checked' : ''}`}
                        onClick={handleEmployeeApprovalToggle}
                      >
                        {employeeApproval && <span>&#10003;</span>}
                      </div>
                        Employee Approval
                      </td>
                    </tr>
                    <tr>
                      <td>HOLIDAY</td>
                      <td>
                      <div
                        className={`approval-checkbox ${managerApproval ? 'checked' : ''}`}
                        onClick={handleManagerApprovalToggle}
                      >
                        {managerApproval && <span>&#10003;</span>}
                      </div>
                        Manager Approved
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>

            </Row>
          </Card.Body>
        </Card>
      </div>

  );
};

export default ApprovalCard;
