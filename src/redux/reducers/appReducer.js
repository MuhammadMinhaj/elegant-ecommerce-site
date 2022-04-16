import types from '../types';

const { TOGGLE_DRAWER } = types.appTypes;

const initState = {
  isCartDrawerOpen: false
};

const app = (state = initState, action = { type: '', paylod: '' }) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        isCartDrawerOpen: !state.isCartDrawerOpen
      };
    default:
      return state;
  }
};

export default app;
