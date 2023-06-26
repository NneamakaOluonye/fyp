<template>
  <dashboard-layout title="Change Password">
    <d-box class="inner-content">
      <d-box class="card">
        <d-box
            display="flex"
            justify-content="center"
            flex-direction="column"
            gap="1em"
        >
          <d-box>
            <d-textfield label="Current Password" placeholder="********" :is-password="true" />
          </d-box>
          <d-box margin-top="20px">
            <d-textfield label="New Password" placeholder="********" :is-password="true" />
          </d-box>
          <d-box margin-top="20px">
            <d-textfield label="Repeat New Password" placeholder="********" :is-password="true" />
          </d-box>
          <!-- Button -->
          <d-box margin-top="20px" class="button__group">
            <d-button
                size="huge"
                color-scheme="primary"
                text="Change Password"
                :right-icon="ArrowRightIcon"
            />
          </d-box>
        </d-box>
      </d-box>
    </d-box>
  </dashboard-layout>
</template>

<script setup>
import StepsLayout from "~/layouts/StepsLayout.vue";
import { RouterLink, useRouter } from "vue-router";
import { ref } from "vue";
import {
  DBox,
  DText,
  DHeading,
  DButton,
  DDropdown,
  DSelect,
  DTextfield,
  DDatePicker,
  DFilePickerInline,
  CloseIcon,
  ArrowRightIcon,
  ArrowLeftIcon
} from "@deposits/ui-kit-vue";
import DashboardLayout from "~/layouts/DashboardLayout.vue";

const router = useRouter();

const steps = ref([
  {
    "text": "Personal Details"
  },
  {
    "text": "Residential Address"
  },
  {
    "text": "Employment Details"
  },
  {
    "text": "Next Of Kin Details"
  },
  {
    "text": "Bank Account Details"
  },
  {
    "text": "Means Of Identification"
  }
]);
const currentStep = ref(0);

const setCurrentStep = index => {
  currentStep.value = index;
};
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  background: #FFFFFF;
  border: 1px solid transparent;
  box-shadow: 0px 2px 6px rgba(174, 174, 192, 0.1);
  border-radius: 8px;
  transition: .3s ease-in-out;
  width: 45%;

  .title {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 800;
    line-height: 25px;
    font-size: 25px;
    color: var(--light-primary-800);
  }
}

.col {
  display: flex;
  gap: 20px;
  margin-top: 20px;

  &:first-child {

    margin-top: 0;
  }

  & > div {
    flex-grow: 1;
  }
}

.button__group {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

hr {
  border-color: gray;
  opacity: .1;
}
</style>