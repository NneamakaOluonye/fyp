<template>
  <d-box class="overview__cards">
    <d-box v-for="overview in overviews">
      <d-box
          :is="RouterLink"
          :to="overview.route"
          class="card__one"
      >
        <d-box class="card__one__icon__border">
          <component
              :is="overview.icon"
              height="24px"
              width="24px"
              class="icon"
          ></component>
        </d-box>
        <d-box display="flex" flex-direction="column" gap="6px">
          <d-text class="card__one__heading">{{ overview.title }}</d-text>
          <d-text class="card__one__text">{{ overview.amount }}</d-text>
        </d-box>
      </d-box>
    </d-box>
  </d-box>
  <d-box class="card" margin-top="20px">
    <d-text class="title">Courses History</d-text>
    <d-box is="hr" margin="20px 0" />
    <d-box v-if="courseData.length > 0">
      <d-table
          enable-csv-export
          enable-customize-view
          button-actions-alignment="right"
          :columns="courseInfo"
          :data="courseData"
          :paginate="true"
          generatedCsvName="Course_list"
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
              v-if="item.status === 'Empty'"
              color-scheme="neutral"
              text="Upload course"
              size="medium"
              @click="router.push({name: 'upload_courses'})"
          />
          <d-button
              v-else
              color-scheme="primary"
              text="View"
              size="medium"
              @click="router.push({name: 'instructor_course_detail'})"
          />
        </template>
      </d-table>
    </d-box>
    <empty-state v-else />
  </d-box>
</template>

<script setup>
import {
  DBox,
  DText,
  DTable,
  DBadge,
  Deposit2FilledIcon,
  MoneysFilledIcon,
  DButton
} from "@deposits/ui-kit-vue";
import { useRouter, RouterLink } from "vue-router";
import {useAxios} from "~/composables/useAxios";
import {onMounted, ref} from "vue";
import EmptyState from "~/components/user/instructor/InstructorCourseEmptyState.vue";

const router = useRouter();

const overviews = ref([
  {
    icon: Deposit2FilledIcon,
    amount: "444",
    title: "Enrolled Students",
    route: { name: "student_list" }
  },
  {
    icon: MoneysFilledIcon,
    amount: "5",
    title: "Uploaded Courses",
    route: { name: "course_list" }
  },
  {
    icon: MoneysFilledIcon,
    amount: "5",
    title: "Ongoing Quizzes",
    route: { name: "quiz_view" }
  },
]);
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
    display: "Enrolled Students",
    dataSelector: "enrolled_students",
    uppercase: true,
    sortable: true,
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
const courseData = ref([]);
onMounted(() => {
  getCourses()
})

const getCourses = () => {

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
    }
  });
};
</script>

<style scoped lang="scss">
.card__one {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  padding: 24px 20px;
  gap: 24px;
  background: #FFFFFF;
  border: 1px solid transparent;
  box-shadow: 0px 2px 6px rgba(174, 174, 192, 0.1);
  border-radius: 8px;
  transition: .3s ease-in-out;

  &:hover {
    border-color: var(--light-primary-500);

    .card__one__icon__border {
      background-color: var(--light-primary-500);
      border-color: var(--light-primary-500);

      .icon {
        color: #ffffff;
      }
    }
  }

  .card__one__icon__border {
    width: 48px;
    height: 48px;
    mix-blend-mode: normal;
    border: 1px solid #CBD5E1;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease-in-out;

    .icon {
      color: #CBD5E1;
    }
  }

  .card__one__heading {
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #64748B;
  }

  .card__one__text {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #525964;
  }
}

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

.overview__cards {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 24px;
}
</style>

<!--TODO: put it back in the button line 10-->
<!--@click="router.push({ name: 'loan_detail', params: { id: item.course_id }})"-->