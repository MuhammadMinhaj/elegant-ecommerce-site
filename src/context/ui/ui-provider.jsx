'use client';
import { useReducer } from 'react';
import { auctionUIContext, stateUIContext } from './context';
import reducer from './reducer';

/**
 * @type {import('./types').UIState}
 */
const initState = {
  isCartOpen: false,
  isUserLoginOpen: false,
  isUserSignupOpen: false,
  isWishlistOpen: false
};

export default function UIProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <stateUIContext.Provider value={state}>
      <auctionUIContext.Provider value={dispatch}>{children}</auctionUIContext.Provider>
    </stateUIContext.Provider>
  );
}
