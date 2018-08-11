import state from '@/store/modules/home/state';
import mutations from '@/store/modules/home/mutations';
import getters from '@/store/modules/home/getters';
import actions from '@/store/modules/home/actions';
import { Payload } from 'vuex';
import * as MutationTypes from '@/store/modules/home/mutation-types';
import VuexPersistence from 'vuex-persist';

export const HomeStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

// OPTIONAL! Add only if you need to persist state in browser
// The following code allows to persist the state in the browser
// One it is persisted the state is automatically read from the browser, even if the backend server is down
// Useful to store data that wont change frequently
export const HomePersist = new VuexPersistence<{HomeStore: IHomeState}, Payload> ({
  storage: window.localStorage,
  reducer: (homeState) => ({HomeStore: homeState.HomeStore}),
  filter: (mutation) => (mutation.type ===
    `HomeStore/${MutationTypes.CHANGE_HOME_TEXTS}`), // OPTIONAL Store only for this mutation with modulename
}).plugin;
