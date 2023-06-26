<template>
  <dashboard-layout title="Overview">
    <d-box class="inner-content">
      <d-box class="intro">
        <d-text class="greetings">Hi, Welcome Back</d-text>
        <d-box display="flex" flex-direction="row " gap="4px">
          <d-text class="intro__text" v-model="payload.first_name">{{userData.first_name}}</d-text>
          <d-text class="intro__text" v-model="payload.last_name">{{userData.last_name}}</d-text>
        </d-box>
      </d-box>
      <d-box is="hr" />
      <d-box v-if="!userData.middle_name || !userData.status.id == 2">
        <d-box margin-top="20px" v-if="role.hasRole('student')">
          <d-alert
            message="Kindly complete your onboarding process to start enrolling for courses"
            color-scheme="warning"
            :closable="true">
            <template #button>
              <d-button
                color-scheme="primary"
                text="get started now"
                size="medium"
                @click="router.push({name: 'onboarding'})"
              />
            </template>
          </d-alert>
        </d-box>
        <d-box margin-top="20px" v-else>
          <d-alert
            message="Kindly complete your onboarding process to start uploading  courses"
            color-scheme="warning"
            :closable="true">
            <template #button>
              <d-button
                color-scheme="primary"
                text="get started now"
                size="medium"
                @click="router.push({name: 'onboarding'})"
              />
            </template>
          </d-alert>
        </d-box>
      </d-box>
      <student-overview v-if="role.hasRole('student')" />
      <instructor-overview v-if="role.hasRole('instructor')" />
    </d-box>
  </dashboard-layout>
</template>

<script setup>
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import { useRoleStore } from "~/stores/role";
import { useRouter } from "vue-router";
import {
  DBox,
  DText,
  DAlert,
  DButton, useToast
} from "@deposits/ui-kit-vue";
import StudentOverview from "~/components/user/overview/StudentOverview.vue";
import InstructorOverview from "~/components/user/overview/InstructorOverview.vue";
import useLocalStorage from "~/composables/local-storage";
import {reactive} from "vue";

const router = useRouter();
const role = useRoleStore();
const { pushToast } = useToast();
const {
  getDataFromLocalStorage,
  addDataToLocalStorage
} = useLocalStorage();

const userData = getDataFromLocalStorage("user")
const payload = reactive({
  user_id: userData.id,
  first_name: userData.first_name,
  last_name: userData.last_name,
});

</script>

<style lang="scss" scoped>
.intro {
  margin: 15px 0 30px;

  .greetings {
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: var(--light-primary-900);
  }

  .intro__text {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    color: var(--light-primary-700);
  }
}
</style>