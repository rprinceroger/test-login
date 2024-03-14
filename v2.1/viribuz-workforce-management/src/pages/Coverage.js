import React from "react";

import { Container, Row } from "react-bootstrap";
import CoverageWaterfall from "../components/CoverageWaterfall/CoverageWaterfall.js";
import CoverageWaterfallDay from "../components/CoverageWaterfall/CoverageWaterfallDay/CoverageWaterfallDay.js";
import CoverageScheduleLog from "../components/CoverageScheduleLog/CoverageScheduleLog.js";
import CoverageScheduleApproval from "../components/CoverageScheduleApproval/CoverageScheduleApproval.js";
import MainPipelineDropdown from "../components/MainPipeline/MainPipelineDropdown.js";
import MainPipeline from "../components/MainPipeline/MainPipeline.js";
import MainPipeline2 from "../components/MainPipeline/MainPipeline2.js";


function Coverage() {
  return (
    <>
      <CoverageWaterfall />
      <CoverageWaterfallDay />
      <MainPipelineDropdown />
      <MainPipeline />
      <MainPipeline2 />
      <CoverageScheduleLog />
      <CoverageScheduleApproval />
    </>
  );
}

export default Coverage;