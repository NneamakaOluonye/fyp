import { defineStore } from "pinia";
import { computed, ref } from "vue";
import useLocalStorage from "~/composables/local-storage";

const {
  getDataFromLocalStorage
} = useLocalStorage()

export const useRoleStore = defineStore(
  "role",
  () => {
    // STATE
    // const roles = ref([
    //   "student",
    //   "instructor"
    // ]);
    let roles = ref([
      "instructor"
    ]);

    if (getDataFromLocalStorage("user")) {
      roles = ref(getDataFromLocalStorage("user").role);
    }

    // SETTERS
    const hasRole = (new_role) => {
      return roles.value.includes(new_role);
    };

    const hasRoles = (new_roles) => {
      return new_roles.some(r=> roles.value.indexOf(r) >= 0)
    };

    const setRoles = new_roles => {
      roles.value = new_roles;
    };

    // GETTERS
    const getRoles = computed(() => {
      return roles.value;
    });

    return {
      hasRole,
      hasRoles,
      setRoles,
      getRoles
    };
  },
  {
    persist: {
      storage: localStorage
    }
  }
);
