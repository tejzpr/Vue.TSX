import Vue from 'vue';
import Router, { Route, RawLocation } from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
    // Implement Authentication Check Here
    next();
});

export default router;
