/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

//STORE -> GLOBALIZED STATE

//ACTION -> DESCRIBES WHAT YOU WANT TO DO -- GIVE ACTION A NAME (ex: increment)
//ACTION IS A FUNCTION THAT RETURNS AN OBJECT

const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

//REDUCER -> CHECKS ACTION, BASED ON ACTION MODIFIES THE STORE
//*****DESCRIBES HOW ACTIONS TRANSFER STATE INTO NEXT STATE
//taking in  initial state of our counter, which is 0, and an action
//this is our initial state
const counter = (state = 0, action) => {
  switch (action.type) {
    //based on type of action
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};
//CREATING OUR STORE - HOLDS ALL OF OUR STATE
let store = createStore(counter);

//DISPLAY IT IN THE CONSOLE
store.subscribe(() => console.log(store.getState()));

//DISPATCH -> EXECUTES THE ACTION TO THE REDUCER, REDUCER SAYS WHAT TO DO, STORE GETS UPDATED
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById('root'));
