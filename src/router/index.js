import { createRouter, createWebHistory } from "vue-router";
import guestRoutes from "../router/guest";
import studentRoutes from "./student";
import instructorRoutes from "./instructor";
import GlobalRoutes from "./global";
import { useRoleStore } from "~/stores/role";
import { ref } from "vue";
import useLocalStorage from "~/composables/local-storage";

const {
  getDataFromLocalStorage
} = useLocalStorage();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: guestRoutes
    .concat(studentRoutes)
    .concat(instructorRoutes)
    .concat(GlobalRoutes),

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

router.beforeEach((to) => {
  const role = useRoleStore();
  const guest_routes = ref([]);
  const token = getDataFromLocalStorage("token") ?? "";

  guestRoutes.forEach(guestRoute => {
    guest_routes.value.push(guestRoute.name);
  });

  if (to.meta.requiresAuth) {
    if (!token) {
      return { name: "login" };
    }
  }

  if (!to.meta.requiresAuth &&
    to.name !== "verify-email" &&
    to.name !== "page_not_found"
  ) {
    if (token) {
      return { name: "overview" };
    }
  }

  if (to.name === "verify-email") {
    if (!getDataFromLocalStorage("verification")) {
      return { name: "register" };
    }
  }

  if (to.name === "reset-password") {
    if (!getDataFromLocalStorage("Password_reset")) {
      return { name: "forgot-password" };
    }
  }

  if (!guest_routes.value.includes(to.name)) {
    if (!role.hasRoles(to.meta.roles)) {
      router.back();
    }
  }
});
export default router;