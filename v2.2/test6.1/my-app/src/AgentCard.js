// AgentCard.js

import React from 'react';

function AgentCard({ agent }) {
  const { name, email, hours, avatar } = agent;

  return (
    <div className="agent-card">
      <div className="left">
        <img src={avatar} alt="Agent Avatar" className="avatar" />
        <div className="agent-info">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div className="right">
        <p>{hours} hours</p>
      </div>
    </div>
  );
}

export default AgentCard;
