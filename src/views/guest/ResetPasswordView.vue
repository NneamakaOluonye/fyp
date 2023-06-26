<template>
  <AuthLayout
    title="Reset Your Password"
  >
    <d-box>
      <form @submit.prevent="verifyCode">
        <d-box margin-y="1rem">
          <d-pin-input
            :no-of-characters="6"
            placeholder="-"
            label="Code"
            v-model="payload.code"
          />
        </d-box>

        <d-box margin-top="2rem">
          <d-textfield
            :is-password="true"
            label="New Password"
            placeholder="Enter your new password"
            v-model="payload.password"
          />
        </d-box>

        <d-box margin-top="2rem">
          <d-textfield
            :is-Password="true"
            label="Re-Enter New password"
            placeholder="Re-enter your new password"
            v-model="payload.password_confirmation"
          />
        </d-box>

        <d-box v-if="!resendingCode" is="p" class="info__text" text-align="center" margin-top="3rem">
          Not received a code?
          <d-box is="span" cursor="pointer" class="basic-link" @click="sendCode">Resend Code</d-box>
        </d-box>
        <d-box margin-y="1rem">
          <d-button
            size="xlarge"
            color-scheme="primary"
            responsive
            :loading="loading"
          >Continue
          </d-button>
        </d-box>
        <d-box margin-top="2rem">
          <d-text center font-face="circularSTD" class="info__text"
          >Remember your password?
            <d-text
              class="basic-link"
              :is="RouterLink"
              text-decoration="none"
              :to="{name: 'login'}"
            >Sign In
            </d-text>
          </d-text>
        </d-box>
      </form>
    </d-box>
  </AuthLayout>
</template>

<script setup>
import {
  DBox,
  DText,
  DTextfield,
  DButton,
  DPinInput,
  useToast
} from "@deposits/ui-kit-vue";
import { RouterLink, useRouter } from "vue-router";
import AuthLayout from "~/layouts/AuthLayout.vue";
import useMetadata from "~/composables/useMetadata";
import { reactive, ref } from "vue";
import { useAxios } from "~/composables/useAxios";
import useLocalStorage from "~/composables/local-storage";

const router = useRouter();
useMetadata({
  title: "LMS || Reset Password",
  description: "LMS || Reset Password"
});

const { pushToast } = useToast();
const {
  addDataToLocalStorage,
  getDataFromLocalStorage
} = useLocalStorage();
const stage = ref(1);
const loading = ref(false);
const resendingCode = ref(false);
const payload = reactive({
  code: "",
  password: "",
  password_confirmation: "",
  email: ""
});

const sendCode = () => {
  loading.value = true;
  resendingCode.value = true;

  useAxios({
    url: `/forgot-password`,
    payload: {
      email: getDataFromLocalStorage("Password_reset").email
    },
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });

        router.push({ name: "login" });
      } else {
        pushToast({
          description: data.message,
          colorScheme: "error"
        });
      }
    },
    final: () => {
      resendingCode.value = false;
      loading.value = false;
    }
  });
};

const verifyCode = () => {
  loading.value = true;

  useAxios({
    url: `/reset-password`,
    payload: {
      ...payload,
      email: getDataFromLocalStorage("Password_reset").email
    },
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });

        router.push({ name: "login" });
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
