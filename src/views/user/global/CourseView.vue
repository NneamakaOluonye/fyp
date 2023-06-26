<template>
  <dashboardLayout title="Course Details">
    <d-box class="inner-content">
      <d-box class="main-content">
        <d-box class="details" display="flex">
          <d-box class="card card-main-width main_header_padding">
            <d-box class="card-header">
              <d-text class="card-header-text text-gray-900" font-weight="700"
              >Course Details
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
                <d-box>
                  <d-text
                    font-weight="450"
                    class="text-cool-grey-500"
                    font-size="14px"
                  >
                    Course Name
                  </d-text>
                  <d-text class=" title">
                    {{ activeCourse.name }}
                  </d-text>
                </d-box>
              </d-box>
              <d-box class="  course_details">
                <d-box>
                  <d-text
                    font-weight="450"
                    class="text-cool-grey-500"
                    font-size="14px"
                  >
                    course reference
                  </d-text>
                </d-box>
                <d-box display="flex" class="mobile-setup">
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
              <d-box class="course_details">
                <d-box>
                  <d-text
                    font-weight="450"
                    class="text-cool-grey-500"
                    font-size="14px"
                  >
                    Instructor
                  </d-text>
                </d-box>
                <d-box
                  display="flex"
                  gap="10px"
                  align-items="center"
                  class="mobile-setup"
                >
                  <d-box display="flex" gap="10px" align-items="center">
                    <d-avatar
                      status="blue"
                      size="small"
                      :avatar="{ name: activeCourse.user ? activeCourse.user.name : '' }"
                    ></d-avatar>
                    <d-text class="light-primary-action-color" font-weight="500"
                    >{{ activeCourse.user ? activeCourse.user.name : "" }}
                    </d-text
                    >
                  </d-box>
                </d-box>
              </d-box>
              <d-box class="  course_details">
                <d-box>
                  <d-text
                    font-weight="450"
                    class="text-cool-grey-500"
                    font-size="14px"
                  >
                    Date
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
              <d-box class="course_details">
                <d-box>
                  <d-text
                    font-weight="450"
                    class="text-cool-grey-500"
                    font-size="14px"
                  >
                    Course Media
                  </d-text>
                </d-box>
                <d-box display="flex"
                       gap="10px"
                       align-items="center"
                       class="mobile-setup">
                  <d-box>
                    <d-button is="a" :href="activeCourse.media" target="_blank" text="View" size="small" />
                  </d-box>
                </d-box>
              </d-box>
              <d-box class="course_details" v-if="role.hasRoles(['instructor'])">
                <d-box>
                  <d-text
                    font-weight="450"
                    class="text-cool-grey-500"
                    font-size="14px"
                  >
                    Course Material
                  </d-text>
                </d-box>
                <d-box display="flex"
                       gap="10px"
                       align-items="center"
                       class="mobile-setup">
                  <d-box>
                    <d-button text="Upload" size="small" />
                  </d-box>
                </d-box>
              </d-box>
              <d-box margin-top="20px">
                <d-button :loading="loading" @click="enroll" v-if="role.hasRoles(['student'])" text="Enroll"
                          size="medium"
                          color-scheme="primary" />
              </d-box>
            </d-box>
          </d-box>
        </d-box>
      </d-box>
    </d-box>
  </dashboardLayout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  DBox,
  DText,
  DBadge,
  CopyFilledIcon,
  DAvatar,
  DButton,
  CloseIcon,
  DStepper, useToast
} from "@deposits/ui-kit-vue";
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import { useAxios } from "~/composables/useAxios";
import { useRouter } from "vue-router";
import { useRoleStore } from "~/stores/role";
import useLocalStorage from "~/composables/local-storage";

onMounted(() => {
  getCourse();
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

const getCourse = () => {
  useAxios({
    url: `/get-course`,
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
const enroll = () => {
  loading.value = true;

  useAxios({
    url: `/enroll-course`,
    payload: {
      course_id: activeCourse.value.id,
      user_id: getDataFromLocalStorage("user").id
    },
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });

        // router.push({ name: "course_list" });
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

<style lang="scss" scoped>
.inner-content {
  width: 75%;
}

.title {
  display: flex;
  align-items: baseline;
  font-weight: 500;
  font-size: 24px;
  color: #121a26;
  margin-top: 10px;
}

body .main-content .card .card-body {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.sub__title {
  font-style: normal;
  font-weight: 450;
  font-size: 12px;
  line-height: 15px;
  color: #878b9a;
}

.sub__content {
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #525964;
}

.course_details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #e2e8f0;
  padding-top: 25px;
  padding-bottom: 5px;
}

.mobile-setup {
  justify-content: flex-end;
}

.details {
  @media screen and (min-width: 320px) and (max-width: 765px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;

    .card-main-width {
      width: 100%;
    }
    .card-sub-width {
      width: 100%;
    }
    .course_details {
      display: block;
      flex-direction: column;
      align-items: start;
    }
    .mobile-setup {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
