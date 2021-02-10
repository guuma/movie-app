import React, { createContext, useReducer } from 'react';
import { Switch } from 'react-router-dom';

const initialState = {
  popular: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { popular: action.payload.popular };
    default:
      return state;
  }
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
});

const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>;
};

export default StoreProvider;