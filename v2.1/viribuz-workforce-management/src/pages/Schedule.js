import React from "react";

import { Container, Row } from "react-bootstrap";

import ScheduleTimeCard from "../components/ScheduleTimeCard/ScheduleTimeCard.js";
import ScheduleTimeCardAdmin from "../components/ScheduleTimeCard/ScheduleTimeCardAdmin.js";
import ScheduleApproval from "../components/ScheduleApproval/ScheduleApproval.js";


function Schedule() {
  return (
    <>
      <ScheduleTimeCard />
      <ScheduleTimeCardAdmin />
      <ScheduleApproval />
    </>
  );
}

export default Schedule;