import {
  SET_CART_DRAWER,
  SET_USER_LOGIN_MODAL,
  SET_USER_SIGNUP_MODAL,
  SET_WISHLIST_DRAWER
} from './constants';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_USER_LOGIN_MODAL:
      return {
        ...state,
        isUserLoginOpen: action.payload
      };
    case SET_USER_SIGNUP_MODAL:
      return {
        ...state,
        isUserSignupOpen: action.payload
      };
    case SET_WISHLIST_DRAWER:
      return {
        ...state,
        isWishlistOpen: action.payload
      };
    case SET_CART_DRAWER:
      return {
        ...state,
        isCartOpen: action.payload
      };
    default:
      return state;
  }
}
