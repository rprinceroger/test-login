import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Row, Col, Card, CardHeader, CardBody, CardTitle } from "reactstrap";

import NoPhoneCalls from "../../assets/icons/NoPhoneCalls.png";
import NoMessageSent from "../../assets/icons/NoMessageSent.png";
import NoEmailsSent from "../../assets/icons/NoEmailsSent.png";
import NoContactReachTotal from "../../assets/icons/NoContactReachTotal.png";
import NoDQ from "../../assets/icons/NoDQ.png";
import NoApptSet from "../../assets/icons/NoApptSet.png";
import NoRetainers from "../../assets/icons/NoRetainers.png";
import NoDocsSent from "../../assets/icons/NoDocsSent.png";
import NoofShowedAppts from "../../assets/icons/NoofShowedAppts.png";
import NoofRetainersSet from "../../assets/icons/NoofRetainersSet.png";
import NoofLiveTransfersSent from "../../assets/icons/NoofLiveTransfersSent.png";

import "./databaseanalytics.css";

function Analytics(props) {

  return (
    <div className="container-fluid" style={{ paddingLeft: '5rem', marginTop: '2rem', marginBottom: '3rem' }}>
        <Row>
          <h3 style={{ color: '#101828', marginLeft: '1rem', marginBottom: '1rem' }}>Intake Analytics</h3>
        </Row>

        {/* First Row */}
        <Row>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># Phone Calls</h5>
                <CardTitle tag="h3">
                  <img src={NoPhoneCalls} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the first card */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># Message Sent</h5>
                <CardTitle tag="h3">
                  <img src={NoMessageSent} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the second card */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># Emails Sent</h5>
                <CardTitle tag="h3">
                  <img src={NoEmailsSent} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the third card */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># Contact Reach</h5>
                <CardTitle tag="h3">
                  <img src={NoContactReachTotal} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the fifth card */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># DQs</h5>
                <CardTitle tag="h3">
                  <img src={NoDQ} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the eleventh card */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># Appt Set</h5>
                <CardTitle tag="h3">
                  <img src={NoApptSet} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the sixth card */}
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Second Row */}
        <Row>

          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># Retainers</h5>
                <CardTitle tag="h3">
                  <img src={NoRetainers} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the seventh card */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># Docs Sent</h5>
                <CardTitle tag="h3">
                  <img src={NoDocsSent} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the eighth card */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># of Showed Appts</h5>
                <CardTitle tag="h3">
                  <img src={NoofShowedAppts} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the ninth card */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># of Retainers Set</h5>
                <CardTitle tag="h3">
                  <img src={NoofRetainersSet} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the tenth card */}
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart bg-white card-with-box-shadow">
              <CardHeader>
                <h5 className="card-category"># of Live Transfers Sent</h5>
                <CardTitle tag="h3">
                  <img src={NoofLiveTransfersSent} alt="No Phone Calls" className="text-info" /> 155
                </CardTitle>
              </CardHeader>
              <CardBody>
                {/* Content for the eleventh card */}
              </CardBody>
            </Card>
          </Col>
        </Row>
    </div>
  );
}

export default Analytics;