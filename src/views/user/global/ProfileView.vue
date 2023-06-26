<template>
  <dashboard-layout title="Profile">
    <d-box class="inner-content">
      <d-box class="card">
        <d-box
            display="flex"
            justify-content="center"
            flex-direction="column"
            gap="1em"
        >
          <d-box class="col">
            <d-box>
              <d-textfield disabled v-model="userData.first_name" label="First Name" placeholder="John" />
            </d-box>
            <d-box>
              <d-textfield  disabled v-model="userData.last_name" label="Last Name" placeholder="Doe" />
            </d-box>
          </d-box>
          <d-box class="col">
            <d-box>
              <d-textfield v-model="payload.middle_name" label="Middle Name" placeholder="Ben"  />
            </d-box>
            <d-box>
              <d-date-picker v-model="payload.date_of_birth" label="Date Of Birth" placeholder="10/02/1987" />
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
              <d-dropdown v-model="payload.marital_status"  label="Marital Status" placeholder="--Select Marital Status--" :options="[
              'Single',
              'Married',
            ]" />
            </d-box>
          </d-box>
          <d-box class="col">
            <d-box>
              <d-textfield label="Email Address" placeholder="example@gmail.com" v-model="userData.email" disabled/>
            </d-box>
            <d-box>
              <d-textfield label="Mobile Number" placeholder="09089898976" v-model="payload.mobile_number"/>
            </d-box>
          </d-box>
          <!-- Button -->
          <d-box margin-top="20px" class="button__group">
            <d-button
                size="huge"
                color-scheme="primary"
                text="Update Profile"
                :right-icon="ArrowRightIcon"
            />
          </d-box>
        </d-box>
      </d-box>
    </d-box>
  </dashboard-layout>
</template>

<script setup>
import { useRoleStore } from "~/stores/role";
import { RouterLink, useRouter } from "vue-router";
import { onBeforeMount, onMounted, reactive, ref } from "vue";
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
  ArrowLeftIcon,
  useToast
} from "@deposits/ui-kit-vue";
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import useLocalStorage from "~/composables/local-storage";
import { useAxios } from "~/composables/useAxios";

const router = useRouter();

const role = useRoleStore();
const isLoading = ref(false);
const loading = ref(true);
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
  email: userData.email,
  mobile_number: "",
});

const submit = () => {
  isLoading.value = true;

  useAxios({
    url: `/profile`,
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
.card {
  padding: 20px;
  background: #FFFFFF;
  border: 1px solid transparent;
  box-shadow: 0px 2px 6px rgba(174, 174, 192, 0.1);
  border-radius: 8px;
  transition: .3s ease-in-out;

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