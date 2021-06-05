import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
const history = createWebHistory();

const routes = [
  { path: "/", component: Home },
  {
    path: "/a/:slug",
    component: () => import("../views/Post.vue"),
    props: true,
  },
];

const router = createRouter({ history, routes });
export default router;
