<template>
  <dashboard-layout title="Student List">
    <d-box class="inner-content">
      <d-card>
        <d-box class="card" margin-top="20px">
          <d-text class="title">Student List</d-text>
          <d-box is="hr" margin="20px 0" />
          <d-box v-if="studentData.length > 0">
            <d-table
                enable-csv-export
                enable-customize-view
                button-actions-alignment="right"
                :columns="studentColumn"
                :data="studentData"
                :paginate="true"
                generatedCsvName="student_list_info"
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
                    @click="router.push({name: 'Student_details', params: { id: item.student_id }})"
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
    getStudents()
  })

  const studentColumn = ref([
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
      display: "Email",
      dataSelector: "student_email",
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
  const studentData = ref([]);

  const getStudents = () => {
    loading.value = true;

    useAxios({
      url: `/get-students`,
      callback: (data) => {
        if (data.status === "success") {
          studentData.value = []

          data.data.forEach(student => {
            studentData.value.push({
              student_id: student.user.unique_id,
              student_name: student.user.first_name + " " + student.user.last_name,
              student_email: student.user.email
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