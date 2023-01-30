import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/AuthContext.js';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const { user, setUser } = useUser();

  const handleLogOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      {!user && <Redirect to="/auth/sign-in" />}

      {user && (
        <div>
          <h2>Packing List for {user.email}</h2>
          <button onClick={handleLogOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
