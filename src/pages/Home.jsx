import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  // get the balance from Redux store using useSelector
  const balance = useSelector(state => state.balance)
  return (
    <h1>Balance: {balance}</h1>
  )
}

export default Home;