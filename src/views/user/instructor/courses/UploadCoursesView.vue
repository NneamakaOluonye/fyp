<template>
  <dashboard-layout title=" Upload Courses">
    <d-box class="inner-content">
      <d-card class="main_content">
        <d-box is="form" @submit.prevent="submit">
          <d-box>
            <d-text class="title">Upload Courses</d-text>
          </d-box>
          <d-box is="hr" margin="20px 0" />
          <d-box class="upload__content">
            <d-textfield v-model="payload.name" label="Course name" size="large" placeholder="Course Name" />
          </d-box>
          <d-box display="flex" flex-direction="row" margin-top="20px" gap="1em">
            <d-box>
              <d-textfield v-model="payload.course_term" size="large" placeholder="Enter duration in days"
                           :only-Numbers="true" :left-icon="CalendarIcon" />
            </d-box>
            <d-box margin-top="1em">
              <d-text>Days</d-text>
            </d-box>
          </d-box>
          <d-box margin-top="1em">
            <d-wysiwyg v-model="payload.desc" label="Course Description" placeholder="Enter course Description" />
          </d-box>
          <d-box margin-top="1em">
            <d-file-picker @change="setFile" @cleared="clearFile" :accepts="['.xls','.pptx','.docx','.xlsx','.pdf','.mpeg', '.mp4', '.mkv']" />
          </d-box>
          <d-box margin-top="1em">
            <d-button size="large" color-Scheme="primary" :loading="loading" text="Submit" responsive />
          </d-box>
        </d-box>
      </d-card>
    </d-box>
  </dashboard-layout>
</template>
<script setup>
import {
  DBox,
  DCard,
  DText,
  DTextfield,
  DButton,
  DFilePicker,
  DWysiwyg,
  CalendarIcon,
  useToast
} from "@deposits/ui-kit-vue";
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import useLocalStorage from "~/composables/local-storage";
import { useAxios } from "~/composables/useAxios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const { pushToast } = useToast();
const {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  removeLocalStorage
} = useLocalStorage();

const loading = ref(false);
const router = useRouter()

const payload = reactive({
  name: "",
  desc: "",
  media: "",
  course_term: ""
});
const submit = () => {
  loading.value = true;

  useAxios({
    url: `/add-course`,
    payload: payload,
    is_file: true,
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });

        router.push({ name: "course_list" })
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

const setFile = file => payload.media = file;

const clearFile = () => payload.media = "";
</script>
<style lang="scss" scoped>
.main_content {
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.title {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 800;
  line-height: 25px;
  font-size: 25px;
  color: var(--light-primary-800);
}
</style>