import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Experience from "../views/Experience.vue";
import Certifications from "../views/Certifications.vue";
import HireMe from "../views/HireMe.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/experience",
      name: "experience",
      component: Experience,
    },
    {
      path: "/certifications",
      name: "certifications",
      component: Certifications,
    },
    {
      path: "/hire-me",
      name: "hire-me",
      component: HireMe,
    },
  ],

  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;