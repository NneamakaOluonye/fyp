<template>
  <AuthLayout title="Verify Registration" description="A Six digit code has been sent to the email registered">
    <d-box class="verify__registration" is="form" @submit.prevent="verifyCode">
      <d-box class="center">
        <img src="/images/verify-registration.png" alt="verify-registration">
      </d-box>
      <d-box class="pin">
        <d-pin-input
          class="mt-3"
          label="Enter the code"
          v-model="payload.code"
        ></d-pin-input>
        <d-text class="pin__text basic-link" v-if="!resendingOTP" @click="resendOTP">Resend OTP</d-text>
      </d-box>

      

      <d-button
        margin-top="20px"
        color-scheme="primary"
        text="Continue"
        :responsive="true"
        :loading="loading"
      />
    </d-box>
  </AuthLayout>
</template>

<script setup>
import { DBox, useToast, DText, DButton, DPinInput } from "@deposits/ui-kit-vue";
import { RouterLink, useRouter } from "vue-router";
import AuthLayout from "~/layouts/AuthLayout.vue";
import useMetadata from "~/composables/useMetadata";
import { reactive, ref } from "vue";
import { useAxios } from "~/composables/useAxios";
import useLocalStorage from "~/composables/local-storage";

const router = useRouter();
const title = router.currentRoute.value.meta.title;
const resendingOTP = ref(false);
const loading = ref(false);
const { pushToast } = useToast();
const {
  addDataToLocalStorage,
  getDataFromLocalStorage
} = useLocalStorage();
const payload = reactive({
  email: getDataFromLocalStorage("verification").email,
  code: ""
});

useMetadata({
  title: title,
  description: title
});

const resendOTP = () => {
  resendingOTP.value = true;
  loading.value = true;

  useAxios({
    url: `/resend-verification-mail`,
    payload: {
      email: payload.email
    },
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });
      } else {
        pushToast({
          description: data.message,
          colorScheme: "error"
        });
      }
    },
    final: () => {
      resendingOTP.value = false;
      loading.value = false;
    }
  });
};

const verifyCode = () => {
  resendingOTP.value = true;
  loading.value = true;

  useAxios({
    url: `/verify-email`,
    payload: payload,
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
      resendingOTP.value = false;
      loading.value = false;
    }
  });
};
</script>
<style scoped lang="scss">
.verify__registration {
  margin-top: 45px;

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 419px;
    margin: 0 auto;
  }

  img {
    width: 278px;
  }

  .text {
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 17px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #8692A6;
    margin-top: 10px;
  }

  .pin {
    display: flex;
    align-items: center;
    flex-direction: column;

    .pin__text {
      font-family: 'Circular Std';
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      margin-top: 3rem;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 600px) {
  .verify__registration {
    .center {
      width: 100%;
    }
  }
}
</style>
