
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import * as types from './store/types';
import LoadingButtonComponent from './share/component/loading-button.component';
Vue.config.productionTip = false

import FloatingLabeledInputComponent from './share/component/floating-labeled-input.component';
import VueTheMask from 'vue-the-mask'

Vue.component('floating-labeled-input', FloatingLabeledInputComponent);
Vue.component('loading-button', LoadingButtonComponent);

Vue.use(VueTheMask);

store.dispatch(types.AUTH_ACT_INITIALIZE);

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
