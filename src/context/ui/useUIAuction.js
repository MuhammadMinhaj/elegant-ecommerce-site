'use client';
import { useContext } from 'react';
import {
  SET_CART_DRAWER,
  SET_USER_LOGIN_MODAL,
  SET_USER_SIGNUP_MODAL,
  SET_WISHLIST_DRAWER
} from './constants';
import { auctionUIContext } from './context';

const useUIAuction = () => {
  const dispatch = useContext(auctionUIContext);

  if (!dispatch) throw new Error('useUIAuction must be within UIProvider');

  const openCart = () =>
    dispatch({
      type: SET_CART_DRAWER,
      payload: true
    });

  const closeCart = () =>
    dispatch({
      type: SET_CART_DRAWER,
      payload: false
    });

  const openUserLogin = () =>
    dispatch({
      type: SET_USER_LOGIN_MODAL,
      payload: true
    });

  const closeUserLogin = () =>
    dispatch({
      type: SET_USER_LOGIN_MODAL,
      payload: false
    });

  const openUserSignup = () =>
    dispatch({
      type: SET_USER_SIGNUP_MODAL,
      payload: true
    });

  const closeUserSignup = () =>
    dispatch({
      type: SET_USER_SIGNUP_MODAL,
      payload: false
    });

  const openWishlist = () =>
    dispatch({
      type: SET_WISHLIST_DRAWER,
      payload: true
    });

  const closeWishlist = () =>
    dispatch({
      type: SET_WISHLIST_DRAWER,
      payload: false
    });

  return {
    openCart,
    closeCart,
    openUserLogin,
    closeUserLogin,
    openUserSignup,
    closeUserSignup,
    openWishlist,
    closeWishlist
  };
};

export default useUIAuction;
