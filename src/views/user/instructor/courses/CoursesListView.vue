<template>
  <dashboard-layout title="Course List">
    <d-box class="inner-content">
      <d-card>
        <d-box class="card" margin-top="20px">
          <d-box display="flex" flex-direction="row" gap="1em" justify-content="space-between">
            <d-box>
              <d-text class="title">Course List</d-text>
            </d-box>
            <d-box>
              <d-button text=" + Create a new course" size="large" color-scheme="primary" @click="router.push({name: 'upload_courses'})" />
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
                generatedCsvName="course_list_info"
                :loading="true"
                :search="true"
                paginate-right
                color-scheme="primary"
            >
              <template v-slot:item.action="item">
                <d-button
                    color-scheme="primary"
                    text="View"
                    size="medium"
                    @click="router.push({name: 'course_detail', params: { id: item.course_id}})"
                />
              </template>
            </d-table>
          </d-box>
          <empty-state v-else />
        </d-box>
      </d-card>
    </d-box>
  </dashboard-layout>
</template>
<script setup>
import {DBox, DTable, DButton, DBadge, DCard} from "@deposits/ui-kit-vue";
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import EmptyState from "~/components/EmptyState.vue";
import { onMounted, ref } from "vue";
import {useRouter} from "vue-router";
import { useAxios } from "~/composables/useAxios";

const router = useRouter();

const loading = ref(false)

onMounted(() => {
  getCourses()
})

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

const getCourses = () => {
  loading.value = true;

  useAxios({
    url: `/get-courses`,
    callback: (data) => {
      if (data.status === "success") {
        courseData.value = []

        data.data.forEach(course => {
          courseData.value.push({
            course_id: course.unique_id,
            course_name: course.name,
            course_term: course.course_term + "days"
          })
        })
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
.title {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 800;
  line-height: 25px;
  font-size: 25px;
  color: var(--light-primary-800);
}
</style>