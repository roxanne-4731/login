import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import auth from './modules/auth';
import app from './modules/app';

Vue.use(Vuex);

export default new Store({
  modules: {
    auth,
    app
  }
});
