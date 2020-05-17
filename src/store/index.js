import { createStore } from 'redux';
import { combineReducers } from 'redux';
import loanReducer from './loanReducer';
import balanceReducer from './balanceReducer';

const store = createStore(combineReducers({
  loan: loanReducer,
  balance: balanceReducer,
}));

export default store;

