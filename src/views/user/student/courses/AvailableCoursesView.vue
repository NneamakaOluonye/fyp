<template>
  <dashboard-layout title="Courses">
    <d-box class="card" margin="2em">
      <d-box display="flex" flex-direction="row" gap="1em" justify-content="space-between">
        <d-box>
          <d-text class="title">Available Courses</d-text>
        </d-box>
      </d-box>
      <d-box is="hr" margin="20px 0" />
      <d-box v-if="courseData.length > 0">
        <d-table
          enable-csv-export
          enable-customize-view
          button-actions-alignment="right"
          :columns="courseInfo"
          :data="courseData"
          :paginate="true"
          generatedCsvName="Student courses"
          :loading="true"
          :search="true"
          paginate-right
          color-scheme="primary"
        >
          <template v-slot:item.status="item">
            <d-badge
              :subtle="true"
              font-weight="bold"
              size="huge"
              :text="item.status"
              :color-scheme="item.colorScheme"
            />
          </template>
          <template v-slot:item.action="item">
            <d-button
              color-scheme="primary"
              text="View"
              size="medium"
              @click="router.push({name: 'course_detail', params: { id: item.course_id }})"
            />
          </template>
        </d-table>
      </d-box>
      <empty-state v-else />
    </d-box>
  </dashboard-layout>
</template>
<script setup>
import { DBox, DTable, DButton, DBadge, DText, useToast } from "@deposits/ui-kit-vue";
import EmptyState from "~/components/EmptyState.vue";
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAxios } from "~/composables/useAxios";
import {formatDate} from "~/composables/getFormattedDate";

const router = useRouter();
const {pushToast} = useToast();
const courseInfo = ref([
  {
    display: "Course ID",
    dataSelector: "course_id",
    uppercase: true,
    sortable: true,
    width: "",
    minWidth: "",
    maxWidth: ""
  },
  {
    display: "Course Name",
    dataSelector: "course_name",
    uppercase: true,
    sortable: true,
    width: "",
    minWidth: "",
    maxWidth: ""
  },
  {
    display: "Instructor Name",
    dataSelector: "instructor_name",
    uppercase: true,
    sortable: true,
    width: "",
    minWidth: "",
    maxWidth: ""
  },
  {
    display: "Course Term",
    dataSelector: "course_term",
    uppercase: true,
    width: "",
    minWidth: "",
    maxWidth: ""
  },
  {
    display: "Action",
    dataSelector: "action",
    uppercase: true,
    sortable: false,
    filterable: false,
    width: "",
    minWidth: "",
    maxWidth: ""
  }
]);
const courseData = ref([]);
const loading = ref(false);

onMounted(() => {
  getCourses();
});

const getCourses = () => {
  loading.value = true;

  useAxios({
    url: `/get-available-courses`,
    callback: (data) => {
      if (data.status === "success") {
        courseData.value = [];

        data.data.forEach(course => {
          courseData.value.push({
            course_id: course.unique_id,
            course_name: course.name,
            instructor_name: course.user ? course.user.name : "",
            course_term: course.course_term + "days",
            created_at: formatDate(data.created_at,'LLL dd, yyyy'),
          });
        });
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
.card {
  padding: 24px 20px;
  background: #FFFFFF;
  border: 1px solid transparent;
  box-shadow: 0px 2px 6px rgba(174, 174, 192, 0.1);
  border-radius: 8px;
  transition: .3s ease-in-out;
  overflow: auto;

  .title {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 800;
    line-height: 25px;
    font-size: 25px;
    color: var(--light-primary-800);
  }
}
</style>