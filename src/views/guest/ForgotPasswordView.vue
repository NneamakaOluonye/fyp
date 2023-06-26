<template>
  <AuthLayout
    title="Forgot Password?"
  >
    <d-box>
      <d-textfield
        class="mt-1"
        placeholder="Email"
        label="Enter your email to recover your account"
        :left-icon="InboxIcon"
        v-model="payload.email"
      ></d-textfield>

      <d-button
        class="mt-3"
        color-scheme="primary"
        text="Recover my account"
        :responsive="true"
        :loading="loading"
        @click="sendCode"
      />

      <d-box margin-top="15px" class="text-center" is="p">
        Remember your password?
        <router-link :to="{name: 'login'}" class="basic-link font-weight-500 light-primary-action-color"
                     font-size="14px">
          Login Instead
        </router-link>
      </d-box>
    </d-box>
  </AuthLayout>
</template>

<script setup>
import {
  DBox,
  DTextfield,
  DButton,
  InboxIcon, useToast
} from "@deposits/ui-kit-vue";
import { RouterLink, useRouter } from "vue-router";
import AuthLayout from "~/layouts/AuthLayout.vue";
import useMetadata from "~/composables/useMetadata";
import { reactive, ref } from "vue";
import { useAxios } from "~/composables/useAxios";
import useLocalStorage from "~/composables/local-storage";

const router = useRouter();
useMetadata({
  title: "LMS || Verify Email",
  description: "LMS || Verify Email"
});
const loading = ref(false)

const payload = reactive({
  email: ""
})
const { pushToast } = useToast();
const {
  addDataToLocalStorage
} = useLocalStorage();

const sendCode = () => {
  loading.value = true

  useAxios({
    url: `/forgot-password`,
    payload: payload,
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });
        addDataToLocalStorage({
          Password_reset: {
            email: payload.email
          }
        })

        router.push({name: 'reset-password'});
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
<style scoped>

</style>
