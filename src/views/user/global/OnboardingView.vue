<template>
  <steps-layout
    :steps="steps"
    :current-step="currentStep"
  >
    <template #backBtn>
      <d-box display="flex" align-items="center" font-weight="400" font-size="16px"
             class="text-cool-grey-400 secondary-font btn-text-dark" cursor="pointer"
             @click="currentStep > 0 ? setCurrentStep(currentStep - 1) : router.back()"
      >
        <d-box is="img" src="/icons/back.svg" margin-right="10px" />
        <d-text>Back</d-text>
      </d-box>
    </template>

    <template #closeBtn>
      <close-icon @click="router.back()" />
    </template>

    <d-box v-if="currentStep === 0">
      <d-box
        display="flex"
        justify-content="center"
        flex-direction="column"
        gap="1em"
        max-width="700px"
        padding-top="3em"
      >
        <d-box class="col">
          <d-box>
            <d-textfield v-model="payload.first_name" label="First Name" placeholder="John" />
          </d-box>
          <d-box>
            <d-textfield v-model="payload.last_name" label="Last Name" placeholder="Doe" />
          </d-box>
        </d-box>
        <d-box class="col">
          <d-box>
            <d-textfield v-model="payload.middle_name" label="middle Name" placeholder="Ben" />
          </d-box>
          <d-box>
            <d-date-picker v-model="payload.date_of_birth" label="Date Of Birth" placeholder="DD/MM/YYYY" />
          </d-box>
        </d-box>
        <d-box class="col">
          <d-box>
            <d-dropdown v-model="payload.gender" label="Gender" placeholder="--Select gender--" :options="[
              'Male',
              'Female'
            ]" />
          </d-box>
          <d-box>
            <d-dropdown v-model="payload.marital_status" label="Marital Status" placeholder="--Select Marital Status--" :options="[
              'Single',
              'Married'
            ]" />
          </d-box>
        </d-box>
        <d-box class="col">
          <d-box>
            <d-textfield disabled v-model="userData.email" label="Email Address" placeholder="johndoe@gmail.com" />
          </d-box>
          <d-box>
            <d-textfield v-model="payload.mobile_no" label="Mobile Number" placeholder="080 000 0000" />
          </d-box>
        </d-box>
        <!-- Button -->
        <d-box margin-top="20px" class="button__group">
          <d-button
            size="huge"
            text="Back"
            disabled
            :left-icon="ArrowLeftIcon"
          />
          <d-button
            size="huge"
            color-scheme="primary"
            text="Continue"
            :right-icon="ArrowRightIcon"
            @click="setCurrentStep(1)"
          />
        </d-box>
      </d-box>
    </d-box>
    <d-box v-if="currentStep === 1">
      <d-box
        display="flex"
        justify-content="center"
        flex-direction="column"
        gap="1em"
        max-width="700px"
        padding-top="3em"
      >
        <d-box class="col">
          <d-box>
            <d-country-dropdown
              v-model="payload.country"
              label="country"
              placeholder="Your country"
              option-title="name"
              option-value="name"
              :dropDown="true"
            />
          </d-box>
          <d-box>
            <d-textfield v-model="payload.street" label="Street" placeholder="26 King George V Road" />
          </d-box>
        </d-box>
        <d-box class="col">
          <d-box>
            <d-textfield v-model="payload.state" label="State" placeholder="Abuja" />
          </d-box>
          <d-box>
            <d-textfield v-model="payload.lga" label="Local Government Area" placeholder="Bwari" />
          </d-box>
        </d-box>

        <!-- Button -->
        <d-box margin-top="20px" class="button__group">
          <d-button
            size="huge"
            text="Back"
            :left-icon="ArrowLeftIcon"
            @click="setCurrentStep(0)"
          />
          <d-button
            size="huge"
            color-scheme="primary"
            text="Continue"
            :right-icon="ArrowRightIcon"
            @click="setCurrentStep(2)"
          />
        </d-box>
      </d-box>
    </d-box>
    <d-box v-if="currentStep === 2">
      <d-box
        display="flex"
        justify-content="center"
        flex-direction="column"
        gap="1em"
        max-width="700px"
        padding-top="3em"
      >
        <d-box class="col">
          <d-box>
            <d-dropdown v-model="payload.means_of_identification" label="Means Of Identification" placeholder="--Select your means of identification--" :options="[
              'Voters Card',
              'Passport',
              'National Identification Number (NIN)'
            ]" />
          </d-box>
          <d-box>
            <d-textfield v-model="payload.means_of_identification_number" label="ID Number" placeholder="ju47839" />
          </d-box>
        </d-box>
        <!-- Button -->
        <d-box margin-top="20px" class="button__group">
          <d-button
            size="huge"
            text="Back"
            :left-icon="ArrowLeftIcon"
            :disabled="isLoading"
            @click="setCurrentStep(4)"
          />
          <d-button
            size="huge"
            color-scheme="primary"
            text="Submit"
            :right-icon="ArrowRightIcon"
            :loading="isLoading"
            @click="submit"
          />
        </d-box>
      </d-box>
    </d-box>
    <d-box v-if="currentStep === 3">
      <d-box
        display="flex"
        justify-content="center"
        flex-direction="column"
        gap="1em"
        max-width="700px"
        padding-top="3em"
      >
        <d-box class="status__card" v-if="status == 'success'">
          <d-box class="status__img" is="img" src="/icons/success.svg" alt="Success" />
          <d-text class="status__title">
            Thanks for Onboarding 😊
          </d-text>
          <d-text class="status__text">
            Your data has been sent and is under review, you will be notified when approved!
          </d-text>
          <d-box class="status__btn">
            <d-button
              size="huge"
              responsive
              color-scheme="primary"
              text="Back to dashboard"
              :right-icon="ArrowRightIcon"
              @click="router.push({name: 'overview'})"
            />
          </d-box>
        </d-box>
        <d-box class="status__card" v-else>
          <d-box class="status__img" is="img" src="/icons/error.svg" alt="Success" />
          <d-text class="status__title">
            Sorry, your onboarding failed! 😔
          </d-text>
          <d-text class="status__text">
            Your onboarding data was incorrect & unsuccessful. Please try again later.
          </d-text>
          <d-box class="status__btn">
            <d-button
              size="huge"
              responsive
              color-scheme="danger"
              text="Back to dashboard"
              :right-icon="ArrowRightIcon"
            />
          </d-box>
        </d-box>
      </d-box>
    </d-box>
    <d-loader :loading="loading" :full-page="true" />
  </steps-layout>
</template>

<script setup>
import StepsLayout from "~/layouts/StepsLayout.vue";
import { useRoleStore } from "~/stores/role";
import { RouterLink, useRouter } from "vue-router";
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import {
  DBox,
  DText,
  DHeading,
  DButton,
  DDropdown,
  DTextfield,
  DDatePicker,
  DCountryDropdown,
  CloseIcon,
  ArrowRightIcon,
  ArrowLeftIcon, useToast,
  DLoader
} from "@deposits/ui-kit-vue";
import useLocalStorage from "~/composables/local-storage";
import { useAxios } from "~/composables/useAxios";

const router = useRouter();

const steps = ref([
  {
    "text": "Personal Details"
  },
  {
    "text": "Residential Address"
  },
  {
    "text": "Means Of Identification"
  },
  {
    "text": "Onboarding Status"
  }
]);
const currentStep = ref(0);
const role = useRoleStore();
const isLoading = ref(false);
const loading = ref(true);
const status = ref("");
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
  middle_name: "",
  date_of_birth: "",
  gender: "",
  marital_status: "",
  mobile_no: "",
  country: "",
  street: "",
  state: "",
  lga: "",
  means_of_identification: "",
  means_of_identification_number: ""
});

onBeforeMount(() => {
  checkStatus()
})

const setCurrentStep = index => {
  currentStep.value = index;
};

const checkStatus = () => {
  if (userData.middle_name && userData.status.id == 2) {
    router.back()
  } else {
    loading.value = false
  }
}

const submit = () => {
  isLoading.value = true;

  useAxios({
    url: `/onboarding`,
    payload: payload,
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });

        addDataToLocalStorage({
          user: data.data
        });

        setCurrentStep(3);
        status.value = "success";
      } else {
        pushToast({
          description: data.message,
          colorScheme: "error"
        });

        // status.value = "error";
      }
    },
    final: () => {
      isLoading.value = false;
    }
  });
};
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  gap: 20px;
  margin-top: 20px;

  & > div {
    flex-grow: 1;
  }
}

.button__group {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

.status__card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 72px 30px 56px 30px;
  text-align: center;

  .status__title {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 32px;
    color: #334155;
    margin-top: 48px;
  }

  .status__text {
    font-family: var(--primary-font);
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #64748B;
    font-weight: 500;
    margin-top: 7px;
  }

  .status__btn {
    margin-top: 29px;
  }
}

</style>