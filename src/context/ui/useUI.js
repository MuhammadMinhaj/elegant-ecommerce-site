'use client';
import { useContext } from 'react';
import { stateUIContext } from './context';

/**
 * @returns {import('./types').UIState} The current UI state
 */
const useUI = () => {
  const state = useContext(stateUIContext);

  if (!state) throw new Error('useUI must be within UIProvider');

  return state;
};

export default useUI;
