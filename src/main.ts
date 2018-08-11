
import Promise from 'bluebird';
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import router from './router';
import UUID from 'vue-uuid';
import store from './store';
import VuexRouterSync from 'vuex-router-sync';
import BootstrapVue from 'bootstrap-vue';
import { config } from '@/../app.config';

Vue.config.devtools = config.debug;

axios.defaults.baseURL = config.apiEndpoint;
axios.interceptors.request.use(
  (request) => {
    const log = config.debug;
    if (!log) {
      return request;
    }
    return request;
  },
  (error) => {
    return error;
  },
);

Vue.use(BootstrapVue);
Vue.use(UUID);

(window as any).Promise = Promise;
VuexRouterSync.sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#root');
