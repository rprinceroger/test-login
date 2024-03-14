import React from 'react';

const agents = [
  {
    id: 1,
    name: 'Bulbasaur',
    email: 'Bulbasaur@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
  },
  {
    id: 4,
    name: 'Charmander',
    email: 'Charmander@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png'
  },
  {
    id: 7,
    name: 'Squirtle',
    email: 'Squirtle@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'
  },
  {
    id: 10,
    name: 'Caterpie',
    email: 'Caterpie@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png'
  },
  {
    id: 11,
    name: 'Metapod',
    email: 'Metapod@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png'
  },
  {
    id: 16,
    name: 'Pidgey',
    email: 'Pidgey@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png'
  },
  {
    id: 19,
    name: 'Rattata',
    email: 'Rattata@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png'
  },
  {
    id: 21,
    name: 'Spearow',
    email: 'Spearow@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png'
  },
  {
    id: 23,
    name: 'Ekans',
    email: 'john@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png'
  },
  {
    id: 25,
    name: 'Pikachu',
    email: 'Pikachu@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png'
  },
  {
    id: 35,
    name: 'Clefairy',
    email: 'Clefairy@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png'
  },
  {
    id: 39,
    name: 'Jigglypuff',
    email: 'Jigglypuff@example.com',
    hours: 8,
    avatarUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png'
  },
  // Add more agent objects as needed
];

const AgentsList = () => {
  return (
    <div className="agents-list-container" style={{ border: '1px solid #ccc', padding: '10px', width: '90%', height: '31rem', overflowY: 'auto' }}>
      <h2>Agents</h2>
      <p>Schedule for this week</p>
      <div className="agents-list">
        <div className="agents-list-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <p>Employee</p>
          <p>Hours</p>
        </div>
        {agents.map(agent => (
          <div key={agent.id} className="agent-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={agent.avatarUrl} alt={agent.name} style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }} />
              <div>
                <p style={{ margin: '0', marginBottom: '5px' }}>{agent.name}</p>
                <p style={{ margin: '0' }}>{agent.email}</p>
              </div>
            </div>
            <p>{agent.hours} hours</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsList;
