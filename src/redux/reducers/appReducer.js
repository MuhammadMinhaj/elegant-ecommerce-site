import types from '../types';

const {
  TOGGLE_CART_DRAWER, USER_LOGIN_TOGGLE_MODAL, USER_SIGNUP_TOGGLE_MODAL, TOGGLE_WISHLIST_DRAWER
} = types.appTypes;

const initState = {
  isCartDrawerOpen: false,
  isUserLoginModalOpen: false,
  isUserSignupModalOpen: false,
  isWishlistDrawerOpen: false
};

const app = (state = initState, action = { type: '', paylod: '' }) => {
  switch (action.type) {
    case TOGGLE_CART_DRAWER:
      return {
        ...state,
        isCartDrawerOpen: !state.isCartDrawerOpen
      };
    case USER_LOGIN_TOGGLE_MODAL:
      return {
        ...state,
        isUserLoginModalOpen: !state.isUserLoginModalOpen,
        isUserSignupModalOpen: false
      };
    case USER_SIGNUP_TOGGLE_MODAL:
      return {
        ...state,
        isUserSignupModalOpen: !state.isUserSignupModalOpen,
        isUserLoginModalOpen: false
      };
    case TOGGLE_WISHLIST_DRAWER:
      return {
        ...state,
        isWishlistDrawerOpen: !state.isWishlistDrawerOpen
      };
    default:
      return state;
  }
};

export default app;
