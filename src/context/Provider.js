import { useMemo, useReducer } from 'react';
import actions from './actions';
import Context from './context';
import reducers from './reducers';

const initState = {
  isLoading: false
};

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducers, initState);
  const appActions = actions(dispatch, state);
  const value = useMemo(() => ({ state, ...appActions }), [state]);
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
