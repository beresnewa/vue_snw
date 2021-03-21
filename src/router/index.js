import { createRouter, createWebHistory } from "vue-router";

import NotFound from "../components/nav/NotFound.vue";
import Auth from "../components/auth/Auth.vue";
import UserProfile from "../components/profile/UserProfile.vue";
import Reg from "../components/registr/Reg.vue";
import Users from '../components/users/Users.vue';
import Followers from '../components/followers/Followers.vue';
import Upload from '../components/upload/Upload.vue';


const routes = [
  {
    path: "/",
    // redirect: "/profile"
  },
  {
    path: "/:notFound(.*)",
    component: NotFound
  },
  {
    name: "auth",
    path: "/login",
    meta: { needsAuth: false},
    component: Auth,
    
  },
  {
    name: "profile",
    path: "/profile",
    meta: { needsAuth: true},
    component: UserProfile,
    
  },
  {
    name: "registration",
    path: "/registration",
    meta: { needsAuth: false},
    component: Reg,
  },
  {
    name: "users",
    path: "/users",
    meta: { needsAuth: true},
    component: Users,
    
  },
  {
    name: "followers",
    path: "/followers",
    meta: { needsAuth: true},
    component: Followers,
    
  },
  {
    name: "upload",
    path: "/upload",
    meta: { needsAuth: true},
    component: Upload,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach(function(to, _from, next) {
  const token = localStorage.getItem("token");
  if (to.meta.needsAuth) {
    if (!token) {
      console.log("Needs auth!");
      next({ name: "auth" });
    } else {
      next()
    }
  }
  if (!to.meta.needsAuth) {
    if (token) {
      console.log("Not Needs auth!");
      next({ name: "profile" });
    } else {
      next()
    }
  }
})

export default router;
