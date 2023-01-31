import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/AuthContext.js';
import Header from '../Header/Header.js';
import AddItems from './AddItems.js';
import ShowList from './ShowList.js';

export default function Todos() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  } else {
    return (
      <div>
        <Header />
        <AddItems />
        <ShowList />
      </div>
    );
  }
}
