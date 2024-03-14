import React from "react";

import { Container, Row } from "react-bootstrap";

import RetainerMVATable from "../components/RetainerTracker/RetainerMVATable/RetainerMVATable.js";
import RetainerTALCTable from "../components/RetainerTracker/RetainerTALCTable/RetainerTALCTable.js";
import RetainerNECTable from "../components/RetainerTracker/RetainerNECTable/RetainerNECTable.js";
import RetainerCAMPTable from "../components/RetainerTracker/RetainerCAMPTable/RetainerCAMPTable.js";
/*import RetainerMedicalRecord from "../components/RetainerTracker/RetainerMedicalRecord/RetainerMedicalRecord.js";*/

function Retainer() {
  return (
    <>
      <RetainerMVATable />
      <RetainerNECTable />
      <RetainerTALCTable />
      <RetainerCAMPTable />
    </>
  );
}

export default Retainer;