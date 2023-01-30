import React from 'react';
import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useState('');

  if (user) {
    return <Redirect to="/items" />;
  }
  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <label>Email</label>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      >
        Password
      </label>
      <input />
      <button onClick={submitAuth}>Submit</button>
    </div>
  );
}
