import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { HomeStore, HomePersist } from '@/store/modules/home';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const plugins: any[] = [];
if (debug) {
  plugins.push(createLogger({}));
}
// OPTIONAL! Add only if you need to persist state in browser
// Add banner persist plugin
plugins.push(HomePersist);

export default new Vuex.Store({
  modules: {
    HomeStore,
  },
  plugins,
});
