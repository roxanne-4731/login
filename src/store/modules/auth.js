import * as authService from '../../services/auth.service';

import * as types from '../types';
import router from '../../router';
import store from '..';

const AUTH_DATA_KEY = 'AUTH_DATA_KEY';

export default {
  state: {
    isLogedin: false,
    accessToken: null,
    refreshToken: null,
    user: null
  },
  getters: {
    [types.AUTH_GET_IS_LOGEDIN]: (state) => state.isLogedin,
    [types.AUTH_GET_ACCESS_TOKEN]: (state) => state.accessToken,
    [types.AUTH_GET_USER]: (state) => state.user,
    [types.AUTH_GET_REFRESH_TOKEN]: (state) => state.refreshToken,
    [types.AUTH_GET_USER_FULLNAME]: (state) => state.user ? `${state.user.firstName} ${state.user.lastName}` : ''
  },

  mutations: {
    [types.AUTH_SET_IS_LOGEDIN]: (state, payload) => {
      state.isLogedin = payload;
    },
    [types.AUTH_SET_ACCESS_TOKEN]: (state, payload) => {
      state.accessToken = payload;
    },
    [types.AUTH_SET_REFRESH_TOKEN]: (state, payload) => {
      state.refreshToken = payload;
    },
    [types.AUTH_SET_USER]: (state, payload) => {
      state.user = payload;
    }
  },

  actions: {
    [types.AUTH_ACT_LOGIN]: (context, payload) => {
      return authService.login(payload.username, payload.password)
        .then((loginData) => {
          commitAuthData(context, loginData.access_token, loginData.refresh_token);
          return authService.whoami().then((user) => {
            context.commit(types.AUTH_SET_USER, user);
            context.dispatch(types.AUTH_ACT_STORE_AUTHDATA, loginData);
            return user;
          });
        });
    },
    [types.AUTH_ACT_STORE_AUTHDATA]: (context, payload) => {
      commitAuthData(context, payload.access_token, payload.refresh_token);
      localStorage.setItem(AUTH_DATA_KEY, JSON.stringify({
        access_token: payload.access_token,
        refresh_token: payload.refresh_token
      }));
    },
    [types.AUTH_ACT_LOGOUT]: (context) => {
      commitAuthData(context, null, null, null);
      localStorage.removeItem(AUTH_DATA_KEY);
      router.push('Login');
    },
    [types.AUTH_ACT_INITIALIZE]: (context) => {
      const authDataStr = localStorage.getItem(AUTH_DATA_KEY);
      if (!authDataStr) {
        setTimeout(() => {
          const initialPath = store.getters[types.APP_GET_INITIAL_PATH];
          router.push(initialPath);
        });
        return;
      }
      const authData = JSON.parse(authDataStr);
      commitAuthData(context, authData.access_token, authData.refresh_token);
      return authService.whoami().then((user) => {
        commitAuthData(context, authData.access_token, authData.refresh_token);
        context.commit(types.AUTH_SET_USER, user);
        setTimeout(() => {
          const initialPath = store.getters[types.APP_GET_INITIAL_PATH];
          router.push(initialPath);
        });
      }).catch((error) => {
        setTimeout(() => {
          const initialPath = store.getters[types.APP_GET_INITIAL_PATH];
          router.push(initialPath);
        });
        return error;
      });
    },
    [types.AUTH_ACT_WHOAMI]: (context) => {
      return authService.whoami().then((user) => {
        context.commit(types.AUTH_SET_USER, user);
      });
    }
  }
};

function commitAuthData({ commit }, accessToken, refreshToken) {
  commit(types.AUTH_SET_ACCESS_TOKEN, accessToken);
  commit(types.AUTH_SET_REFRESH_TOKEN, refreshToken);
  commit(types.AUTH_SET_IS_LOGEDIN, !!accessToken);
}
