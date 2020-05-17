import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  // get the balance from Redux store using useSelector
  const balance = useSelector(state => state.balance.balance);
  const loan = useSelector(state => state.loan.loan);
  const dispatch = useDispatch();

  function handleLoan() {
    return dispatch({
      type: 'APPLIED',
      payload: true,
    });
  }

  return (
    <>
      <h1>Balance: {balance}</h1>
      <h2>
        {
          loan ? 'Loan Applied' : 'Apply for Loan'
        }
      </h2>
      <button
        disabled={loan ? true : false}
        onClick={handleLoan}
      >
        Get Loan
      </button>
    </>
  )
}

export default Home;