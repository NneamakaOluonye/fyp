<template>
  <dashboard-layout title="Quiz List">
    <d-box class="inner-content">
      <d-card>
        <d-box class="card" margin-top="20px">
            <d-box>
              <d-text class="title">Result List</d-text>
            </d-box>
          <d-box is="hr" margin="20px 0" />
          <d-box v-if="resultData.length > 0">
            <d-table
                enable-csv-export
                enable-customize-view
                button-actions-alignment="right"
                :columns="resultColumn"
                :data="resultData"
                :paginate="true"
                generatedCsvName="Quiz List"
                :loading="true"
                :search="true"
                paginate-right
                itemsPerPage="5"
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
                    @click="router.push({name: 'Student_details'})"
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
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const resultColumn = ref([
  {
    display: "Student ID",
    dataSelector: "student_id",
    uppercase: true,
    sortable: true,
    width: "",
    minWidth: "",
    maxWidth: ""
  },
  {
    display: "Student Name",
    dataSelector: "student_name",
    uppercase: true,
    sortable: true,
    width: "",
    minWidth: "",
    maxWidth: ""
  },
  {
    display: "Score",
    dataSelector: "score",
    uppercase: true,
    width: "",
    minWidth: "",
    maxWidth: ""
  },
  {
    display: "Status",
    dataSelector: "status",
    uppercase: true,
    sortable: true,
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
const resultData = ref([
  {
    student_id: "19CG04789",
    student_name: "James matterson",
    score: "23%",
    status: "failed",
    colorScheme: "red"
  },
  {
    student_id: "18CG04777",
    student_name: "Uchiha Sasuke",
    score: "73%",
    status: "Passed",
    colorScheme: "green"
  },
  {
    student_id: "19CG04711",
    student_name: "Farmer George",
    score: "73%",
    status: "Passed",
    colorScheme: "green"
  },
  {
    student_id: "19CG07785",
    student_name: "John Wick",
    score: "77%",
    status: "Passed",
    colorScheme: "green"
  },
  {
    student_id: "17CG04789",
    student_name: "Hatake Kakashi",
    score: "93%",
    status: "Passed",
    colorScheme: "green"
  },
  {
    student_id: "19CG07789",
    student_name: "Dati Etim",
    score: "100%",
    status: "Passed",
    colorScheme: "green"
  },
  {
    student_id: "18CG04789",
    student_name: "Uchiha Madara",
    score: "73%",
    status: "Passed",
    colorScheme: "green"
  },
  {
    student_id: "19CG07789",
    student_name: "Aseamon Julian",
    score: "73%",
    status: "Passed",
    colorScheme: "green"
  },
  {
    student_id: "19CG01236",
    student_name: "Bernado Silver",
    score: "73%",
    status: "Passed",
    colorScheme: "green"
  },
  {
    student_id: "19CG07894",
    student_name: "Victoria Cakes",
    score: "73%",
    status: "Passed",
    colorScheme: "green"
  },
]);
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