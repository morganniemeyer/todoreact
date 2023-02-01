import { useState, useContext } from 'react';
import { createContext } from 'react';
import { getUser } from '../services/auth.js';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const data = useContext(UserContext);

  if (!data) {
    throw new Error('I see you are trying to useUser, where is your buddy UserProvider?');
  }
  return data;
};

export { UserProvider, useUser };
