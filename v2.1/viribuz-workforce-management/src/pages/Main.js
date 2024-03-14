import React from "react";

import { Container, Row } from "react-bootstrap";

import MainCalendar from "../components/MainCalendar/MainCalendar.js";

import MainAgentTable from "../components/MainAgentTable/MainAgentTable.js";
import MainShiftManager from "../components/MainShiftManager/MainShiftManager.js";
import MainPipelineDropdown from "../components/MainPipeline/MainPipelineDropdown.js";
import MainPipeline from "../components/MainPipeline/MainPipeline.js";
import MainPipeline2 from "../components/MainPipeline/MainPipeline2.js";

function Main() {
  return (
    <>
      <MainCalendar />
      <MainAgentTable />
      <MainShiftManager />
      <MainPipelineDropdown />
      <MainPipeline />
      <MainPipeline2 />
    </>
  );
}

export default Main;