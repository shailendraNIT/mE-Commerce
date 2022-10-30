import React, { createContext, useContext, useReducer } from "react";

export const stateContext = createContext();

//loading data into data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

//pulling data from state context
export const useStateValue = () => useContext(stateContext);
