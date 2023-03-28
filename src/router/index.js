import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/upload",
    name: "Upload",
    component: () =>
      import(/* webpackChunkName: "upload" */ "../views/Upload.vue"),
  },
  {
    path: "/keepalive",
    name: "KeepAlive",
    component: () =>
      import(/* webpackChunkName: "keepalive" */ "../views/KeepAlive.vue"),
  },
  {
    path: "/life",
    name: "Life",
    component: () =>
      import(/* webpackChunkName: "life" */ "../views/Life.vue"),
  },
  {
    path: "/virtual-scroller",
    name: "VirtualScroller",
    component: () =>
      import(/* webpackChunkName: "VirtualScroller" */ "../views/VirtualScroller.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
