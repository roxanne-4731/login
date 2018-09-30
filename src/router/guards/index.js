import store from '../../store';
import * as types from '../../store/types';

export const MustBeLoggedinGuard = (to, from, next) => {
  let isLoggedin = store.getters[types.AUTH_GET_IS_LOGEDIN];
  if (isLoggedin) {
    next();
  } else {
    next('Login');
  }
};

export const MustBeNotLoggedInGauard = (to, from, next) => {
  let isLoggedin = store.getters[types.AUTH_GET_IS_LOGEDIN];
  next(!isLoggedin);
};
