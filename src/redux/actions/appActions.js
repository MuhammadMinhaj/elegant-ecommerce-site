import types from '../types';

const {
  TOGGLE_CART_DRAWER, USER_LOGIN_TOGGLE_MODAL, USER_SIGNUP_TOGGLE_MODAL, TOGGLE_WISHLIST_DRAWER
} = types.appTypes;

const methods = {};

/**
 * This action is used to toggle the cart drawer
 * @param {}
 * @return {}
 * * */
methods.handleClickToggleCartDrawer = () => (dispatch) => {
  dispatch({
    type: TOGGLE_CART_DRAWER
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
/**
 * This action is used to toggle the wishlist drawer
 * @param {}
 * @return {}
 * * */
methods.handleClickToggleWishlistDrawer = () => (dispatch) => {
  dispatch({
    type: TOGGLE_WISHLIST_DRAWER
  });
};

export default methods;
