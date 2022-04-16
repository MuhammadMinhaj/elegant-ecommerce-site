import types from '../types';

const { TOGGLE_DRAWER } = types.appTypes;

const methods = {};

/**
 * This action is used to toggle the cart drawer
 * @param {}
 * @return {}
 * * */
methods.handleClickToggleDrawer = () => (dispatch) => {
  dispatch({
    type: TOGGLE_DRAWER
  });
};

export default methods;
