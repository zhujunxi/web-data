import Vue from "vue";
import Router from "vue-router";

import routerMap from "./module/routerMap";

Vue.use(Router);

const router = new Router({
  routes: routerMap
});

export default router;
