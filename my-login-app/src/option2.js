import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

	const handleLogin = async () => {
	  try {
	    const response = await fetch('http://statistics-staging.viribuzmedia.com/umbraco/Api/ViribuzAgentAuth/SubmitLogin', {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify({ username, password }),
	    });

	    if (!response.ok) {
	      throw new Error('Failed to fetch');
	    }

	    const data = await response.json();

	    if (data.success) {
	      setMessage(data.message);
	      setToken(data.token);
	    } else {
	      setMessage('Login failed. Please try again.');
	    }
	  } catch (error) {
	    console.error('Error:', error.message);
	    setMessage('Failed to fetch. Please check your network connection.');
	  }
	};


  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
      {token && <p>Your token: {token}</p>}
    </div>
  );
};

export default Login;
