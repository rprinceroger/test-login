import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Making the Axios GET request instead of POST
      const response = await axios({
        method: 'POST',
        url: 'http://statistics-staging.viribuzmedia.com/umbraco/Api/ViribuzAgentAuth/SubmitLogin',
        withCredentials: false,
        params: {
          username,
          password
        },
      });

      console.log(response.data);
      setMessage('Login successful');
    } catch (error) {
      console.error(error);
      setMessage('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
