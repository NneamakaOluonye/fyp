<template>
  <dashboard-layout title="Student Details">
    <d-box class="inner-content">
      <d-box class="main-content">
        <d-box display="flex">
          <d-box class="card" width="60%">
            <d-box class="card-header">
              <d-text class="card-header-text text-gray-900" font-weight="700"
              >Student Details
              </d-text
              >
            </d-box>
            <d-box class="card-body">
              <d-box
                  display="flex"
                  justify-content="space-between"
                  align-items="center"
                  border-bottom="0.5px solid #E2E8F0"
                  padding-bottom="16px"
              >
                <d-box
                    display="flex"
                    align-items="center"
                    flex-direction="row"
                    gap="10px"
                >
                  <d-avatar
                      status="blue"
                      size="medium"
                      :avatar="{ name: 'Tedjere Diegbe' }"
                  ></d-avatar>
                  <d-text
                      color="#2A2E33"
                      font-weight="500"
                      font-size="20px"
                      font-Family="circular std"
                  >
                    {{ activeCourse.name }}
                  </d-text>
                </d-box>
              </d-box>
              <!-- Contact ID -->
              <d-box
                  display="flex"
                  justify-content="space-between"
                  align-items="center"
                  border-bottom="0.5px solid #E2E8F0"
                  padding-top="25px"
                  padding-bottom="5px"
              >
                <d-box>
                  <d-text
                      font-weight="450"
                      class="text-cool-grey-500"
                      font-size="14px"
                  >
                    Student ID
                  </d-text>
                </d-box>
                <d-box display="flex">
                  <d-text
                      font-weight="500"
                      font-size="16px"
                      class="text-cool-grey-900"
                      margin-right="10px"
                  >
                    {{ activeCourse.unique_id }}
                  </d-text>
                </d-box>
              </d-box>
              <!-- Email -->
              <d-box
                  display="flex"
                  justify-content="space-between"
                  align-items="center"
                  border-bottom="0.5px solid #E2E8F0"
                  padding-top="25px"
                  padding-bottom="5px"
              >
                <d-box>
                  <d-text
                      font-weight="450"
                      class="text-cool-grey-500"
                      font-size="14px"
                  >
                    Email Address
                  </d-text>
                </d-box>
                <d-box display="flex" gap="10px" align-items="center">
                  <d-text font-weight="500">{{ activeCourse.email }}</d-text>
                </d-box>
              </d-box>
              <!-- Phone Number -->
              <d-box
                  display="flex"
                  justify-content="space-between"
                  align-items="center"
                  border-bottom="0.5px solid #E2E8F0"
                  padding-top="25px"
                  padding-bottom="5px"
              >
                <d-box>
                  <d-text
                      font-weight="450"
                      class="text-cool-grey-500"
                      font-size="14px"
                  >
                    Phone Number
                  </d-text>
                </d-box>
                <d-box display="flex">
                  <d-text
                      font-weight="500"
                      font-size="16px"
                      class="text-cool-grey-900"
                  >
                    {{ activeCourse.mobile_no }}
                  </d-text>
                </d-box>
              </d-box>
              <!-- Date Added -->
              <d-box
                  display="flex"
                  justify-content="space-between"
                  align-items="center"
                  border-bottom="0.5px solid #E2E8F0"
                  padding-top="25px"
                  padding-bottom="5px"
              >
                <d-box>
                  <d-text
                      font-weight="450"
                      class="text-cool-grey-500"
                      font-size="14px"
                  >
                    Date Registered
                  </d-text>
                </d-box>
                <d-box display="flex">
                  <d-text
                      font-weight="500"
                      font-size="16px"
                      class="text-cool-grey-900"
                  >
                    {{ activeCourse.created_at }}
                  </d-text>
                </d-box>
              </d-box>
              <!-- Tags -->
            </d-box>
          </d-box>
        </d-box>
      </d-box>
    </d-box>
  </dashboard-layout>
</template>

<script setup>
import {
  DBox,
  DText,
  MessageIcon,
  DBadge,
  CopyFilledIcon,
  DAvatar,
  DButton, useToast
} from "@deposits/ui-kit-vue";
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import { useRoleStore } from "~/stores/role";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import useLocalStorage from "~/composables/local-storage";
import { useAxios } from "~/composables/useAxios";

onMounted(() => {
  getStudent();
});

const router = useRouter();
const activeCourse = ref({});
const loading = ref(false);
const id = ref(router.currentRoute.value.params.id);
const role = useRoleStore();
const { pushToast } = useToast();
const {
  getDataFromLocalStorage
} = useLocalStorage();

const getStudent = () => {
  useAxios({
    url: `/get-student`,
    payload: {
      unique_id: id.value
    },
    callback: (data) => {
      if (data.status === "success") {
        activeCourse.value = data.data;
      } else {
        router.back();
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.amount {
  display: flex;
  align-items: baseline;
  font-weight: 500;
  font-size: 24px;
  color: #121a26;
  margin-top: 10px;

  .sub {
    font-size: 12px;
  }
}

.tab {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  gap: 4px;
  background: #F1F5F9;
  border-radius: 8px;

  .individual__tab {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 16px;
    gap: 10px;
    border-radius: 6px;
    cursor: pointer;

    &.tab_active {
      background: #F5F8FA;
      border: 1px solid #E1E7EC;
      box-shadow: 0px 1px 2px rgba(27, 31, 35, 0.04);
    }
  }
}

</style>