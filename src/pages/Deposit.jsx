import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Deposit = () => {
  const balance = useSelector(state => state.balance);
  const dispatch = useDispatch();

  function handleDeposit() {
    return dispatch({ type: 'DEPOSIT', payload: 10 });
  }
  return (
    <>
      <h2>Balance: {balance}</h2>
      <button onClick={handleDeposit} >Deposit</button>
    </>
  )
}

export default Deposit;