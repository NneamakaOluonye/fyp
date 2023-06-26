<template>
  <AuthLayout
    title="Create Account"
    description="Hello, provide your details below to create your account."
    height="100%"
  >
    <d-box is="form" @submit.prevent="register">
      <d-box class="col">
        <d-box>
          <d-textfield v-model="payload.first_name" label="First Name" placeholder="First Name" />
        </d-box>
        <d-box>
          <d-textfield v-model="payload.last_name" label="Last Name" placeholder="Last Name" />
        </d-box>
      </d-box>

      <d-box class="col">
        <d-box>
          <d-textfield type="tel" v-model="payload.mobile_no" :number="true" label="Phone Number" placeholder="Phone Number" />
        </d-box>
        <d-box>
          <d-textfield v-model="payload.username" label="Username" placeholder="Username" />
        </d-box>
      </d-box>

      <d-textfield
        class="mt-3"
        placeholder="example@gmail.com"
        label="Email Address"
        v-model="payload.email"
        type="email"
      ></d-textfield>

      <d-box class="col">
        <d-textfield
          placeholder="Enter password"
          label="Password"
          :is-password="true"
          v-model="payload.password"
        ></d-textfield>
        <d-textfield
          placeholder="Enter password confirmation"
          label="Confirm Password"
          :is-password="true"
          v-model="payload.password_confirmation"
        ></d-textfield>
      </d-box>

      <d-box margin-top="25px" class="small__card">
        <d-box is="p" class="info__text">
          You are currently registering as a Student, do you want to register as an
          <router-link :to="{name: 'instructor_register'}" class="basic-link">Instructor?</router-link>
        </d-box>
      </d-box>

      <d-box is="hr" margin-top="25px" />

      <d-box is="p" class="info__text" margin-top="20px">
        Already have an account?
        <router-link class="basic-link" :to="{name: 'login'}">Sign in</router-link>
      </d-box>

      <d-button
        margin-top="15px"
        color-scheme="primary"
        text="Create Account "
        :responsive="true"
        :loading="isSubmitLoading"
      />
      <d-box is="p" class="info__text" margin-top="20px">
        By clicking ‘Create my account’ above, you accept our
        <router-link class="basic-link" :to="{name: 'login'}">Privacy Policy</router-link>
        and
        <router-link class="basic-link" :to="{name: 'login'}">Terms of use</router-link>
      </d-box>
    </d-box>
  </AuthLayout>
</template>

<script setup>
import {
  DBox,
  DTextfield,
  DText,
  DDropdown,
  DButton,
  useToast
} from "@deposits/ui-kit-vue";
import { RouterLink, useRouter } from "vue-router";
import AuthLayout from "~/layouts/AuthLayout.vue";
import useMetadata from "~/composables/useMetadata";
import { reactive, ref } from "vue";
import { useAxios } from "~/composables/useAxios";
import useLocalStorage from "~/composables/local-storage";

const router = useRouter();
const title = router.currentRoute.value.meta.title;
const payload = reactive({
  role: "student",
  first_name: "",
  last_name: "",
  username: "",
  mobile_no: "",
  email: "",
  password: "",
  password_confirmation: ""
});
const isSubmitLoading = ref(false);
const { pushToast } = useToast();
const {
  addDataToLocalStorage
} = useLocalStorage();

useMetadata({
  title: title,
  description: title
});

const register = () => {
  isSubmitLoading.value = true;

  useAxios({
    url: `/register`,
    payload: payload,
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });
        addDataToLocalStorage({
          verification: {
            email: payload.email,
            status: "pending"
          }
        });

        router.push({ name: "verify-email" });
      } else {
        pushToast({
          description: data.message,
          colorScheme: "error"
        });
      }
    },
    final: () => {
      isSubmitLoading.value = false;
    }
  });
};
</script>
<style scoped lang="scss">
.forgot__password__box {
  margin-top: 20px;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.info__text {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #575757;
  width: 368px;
}

.col {
  display: flex;
  gap: 20px;
  margin-top: 20px;

  & > div {
    flex-grow: 1;
  }
}

.small__card {
  background-color: #fff4c2;
  padding: 20px;
  border-radius: 5px;
}
</style>