import * as types from '../types';

export default {
  state: {
    isSidebarOpen: true,
    initialPath: '/login'
  },
  getters: {
    [types.APP_GET_IS_SIDEBAR_OPEN]: (state) => state.isSidebarOpen,
    [types.APP_GET_INITIAL_PATH]: (state) => state.initialPath
  },
  mutations: {
    [types.APP_SET_IS_SIDEBAR_OPEN]: (state, payload) => {
      state.isSidebarOpen = payload;
    },
    [types.APP_SET_INITIAL_PATH]: (state, payload) => {
      state.initialPath = payload;
    }
  }
};
