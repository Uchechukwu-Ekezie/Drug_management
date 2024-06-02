// src/components/login/LoginHealthcare.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../data/users';
import '../../css/Login.css';

const LoginHealthcare = ({ handleAuthentication }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.role === 'healthcare' && u.username === username && u.password === password);
    if (user) {
      handleAuthentication(true, 'healthcare');
      setError('');
      navigate('/dashboard/healthcare');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Healthcare Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginHealthcare;
