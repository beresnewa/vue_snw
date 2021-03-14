import { createRouter, createWebHistory } from "vue-router";

import NotFound from "../components/nav/NotFound.vue";
import Auth from "../components/auth/Auth.vue";
import UserProfile from "../components/profile/UserProfile.vue";
import Reg from "../components/registr/Reg.vue"


const routes = [
  {
    path: "/",
    redirect: "/profile"
  },
  {
    path: "/:notFound(.*)",
    component: NotFound
  },
  {
    name: "auth",
    path: "/login",
    meta: { notNeedsAuth: true},
    component: Auth
  },
  {
    name: "profile",
    path: "/profile",
    component: UserProfile
  },
  {
    name: "registration",
    path: "/registration",
    meta: { notNeedsAuth: true},
    component: Reg
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(function(to, _from, next) {
  if (to.meta.needsAuth) {
    if (localStorage.getItem("token") === null) {
      console.log("Needs auth!");
      next({ name: "auth" });
    }
    next();
  }
  if (to.meta.notNeedsAuth) {
    if (localStorage.getItem("token") !== null) {
      console.log("Not Needs auth!");
      next({ name: "profile" });
    }
    next();
  }
  // next();
});

export default router;
