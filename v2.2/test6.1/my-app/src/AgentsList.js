// AgentsList.js

import React from 'react';
import AgentCard from './AgentCard';

const agentsData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    hours: 40,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    hours: 35,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  // Add more agent data as needed
];

function AgentsList() {
  return (
    <div className="agents-list">
      {agentsData.map(agent => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}

export default AgentsList;
