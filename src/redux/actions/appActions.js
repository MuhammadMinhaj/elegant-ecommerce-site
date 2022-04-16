import types from '../types';

const { TOGGLE_DRAWER, USER_LOGIN_TOGGLE_MODAL, USER_SIGNUP_TOGGLE_MODAL } = types.appTypes;

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

/**
 * This action is used to toggle the user login and signup modal on the web
 * @param {boolean}
 * @return {}
 * * */

methods.handleClickToggleUserLoginSignupModal = (isLogin) => (dispatch) => {
  if (isLogin) {
    dispatch({
      type: USER_LOGIN_TOGGLE_MODAL
    });
  } else {
    dispatch({
      type: USER_SIGNUP_TOGGLE_MODAL
    });
  }
};

export default methods;
