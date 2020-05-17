import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Withdraw = () => {
  const balance = useSelector(state => state.balance.balance);
  const dispatch = useDispatch();

  function handleWithdraw() {
    return dispatch({ type: 'WITHDRAW', payload: 10 });
  }

  return (
    <>
      <h2>Balance: {balance}</h2>
      <button disabled={balance <= 0 ? true : false} onClick={handleWithdraw}>Withdraw</button>
    </>
  )
}

export default Withdraw;