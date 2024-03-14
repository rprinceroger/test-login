import React from "react";

import { Container, Row } from "react-bootstrap";
import DatabaseChart from "../components/DatabaseChart/DatabaseChart.js";
import DatabaseAnalytics from "../components/DatabaseAnalytics/DatabaseAnalytics.js";
import MainAgentTable from "../components/MainAgentTable/MainAgentTable.js";


function Database() {
  return (
    <>
      <DatabaseChart />
      <DatabaseAnalytics />
      <MainAgentTable />
    </>
  );
}

export default Database;