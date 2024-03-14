import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Agents = () => {
  const agentData = [
    "Agent 1",
    "Agent 2",
    "Agent 3",
    "Agent 4",
    "Agent 5",
    "Agent 6",
    "Agent 7",
    "Agent 8",
    "Agent 9",
    "Agent 10"
  ];

  return (
      <Form.Group>
        <Form.Control as="select" defaultValue="" custom style={{ width: '150px', marginRight: '10px' }}>
          <option value="" disabled>Select an agent</option>
          {agentData.map((agent, index) => (
            <option key={index} value={agent}>
              {agent}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
  );
};

export default Agents;
