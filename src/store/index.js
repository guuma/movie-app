import React, { createContext, useReducer } from 'react';
import { Switch } from 'react-router-dom';

const initialState = {
  popular: [],
  selected: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { ...state, popular: action.payload.popular };
    case 'SET_SELECTED':
      return { ...state, selected: action.payload.selected}
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
