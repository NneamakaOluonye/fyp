<template>
  <dashboard-layout title="Quiz List">
    <d-box class="inner-content">
      <d-card>
        <d-box class="card" margin-top="20px">
          <d-box display="flex" flex-direction="row" gap="1em" justify-content="space-between">
            <d-box>
              <d-text class="title">Quiz List</d-text>
            </d-box>
            <d-box>
              <d-button text=" + Create a new quiz" size="large" color-scheme="primary"
                        @click="router.push({name: 'create_quiz'})" />
            </d-box>
          </d-box>
          <d-box is="hr" margin="20px 0" />
          <d-box v-if="quizData.length > 0">
            <d-table
              enable-csv-export
              enable-customize-view
              button-actions-alignment="right"
              :columns="quizColumn"
              :data="quizData"
              :paginate="true"
              generatedCsvName="Quiz List"
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
                  @click="router.push({name: 'result_view'})"
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
import { DBox, DTable, DButton, DBadge, DCard } from "@deposits/ui-kit-vue";
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import EmptyState from "~/components/EmptyState.vue";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useAxios } from "~/composables/useAxios";

const router = useRouter();

const quizColumn = ref([
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
    display: "Quiz Date",
    dataSelector: "quiz_date",
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
const quizData = ref([]);
onBeforeMount(() => {
  getQuizes();
});

const getQuizes = () => {
  useAxios({
    url: `/get-quizzes`,
    callback: (data) => {
      if (data.status === "success") {
        quizData.value = [];

        data.data.forEach(quiz => {
          quizData.value.push({
            course_id: quiz.unique_id,
            course_name: quiz.name,
            quiz_date: quiz.quiz_date
          });
        });
      } else {
        pushToast({
          description: data.message,
          colorScheme: "error"
        });
      }
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