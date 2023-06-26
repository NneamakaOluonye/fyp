<template>
  <AuthLayout
      title="Log in"
      description="Please, provide your login details below to access your account."
  >
    <d-box is="form" @submit.prevent="login">
      <d-textfield
          class="mt-3"
          placeholder="Input your User Email Address"
          label="Email Address"
          v-model="payload.email"
      ></d-textfield>

      <d-textfield
          class="mt-3"
          placeholder="Enter password"
          label="Password"
          :is-password="true"
          v-model="payload.password"
      ></d-textfield>

      <d-box class="forgot__password__box">
        Forgot your password?
        <router-link :to="{name: 'forgot-password'}" class="basic-link">
          Reset Password
        </router-link>
      </d-box>

      <d-button
          is="button"
          class="mt-2"
          color-scheme="primary"
          text="Login"
          :responsive="true"
          :loading="loading"
      />
      <d-box is="p" class="info__text" margin-top="15px">
        Don't have an account? Sign up as an
        <router-link :to="{name: 'instructor_register'}" class="basic-link">Instructor</router-link>
      </d-box>
    </d-box>
  </AuthLayout>
</template>

<script setup>
import {
  DBox,
  DTextfield,
  DText,
  DButton,
  DDropdown, useToast
} from "@deposits/ui-kit-vue";
import { RouterLink, useRouter } from "vue-router";
import AuthLayout from "~/layouts/AuthLayout.vue";
import useMetadata from "~/composables/useMetadata";
import { reactive, ref } from "vue";
import { useRoleStore } from "~/stores/role";
import { useAxios } from "~/composables/useAxios";
import useLocalStorage from "~/composables/local-storage";

const router = useRouter();
const title = router.currentRoute.value.meta.title;
const payload = reactive({
  email: "",
  password: ""
});
const role = useRoleStore();
const loading = ref(false)
useMetadata({
  title: title,
  description: title
});
const { pushToast } = useToast();
const {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  removeLocalStorage
} = useLocalStorage();

const login = () => {
  loading.value = true

  useAxios({
    url: `/login`,
    payload: payload,
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });

        removeLocalStorage()
        addDataToLocalStorage(data.data)
        role.setRoles(data.data.user.role);

        router.push({ name: "overview" });
      } else {
        pushToast({
          description: data.message,
          colorScheme: "error"
        });
      }
    },
    final: () => {
      loading.value = false;
    }
  });
};
</script>
<style scoped lang="scss">
.forgot__password__box {
  margin-top: 3rem;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  line-height: 20px;
}

.info__text {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  line-height: 20px;
  color: #575757;
  margin-top: 50px;
}
</style>