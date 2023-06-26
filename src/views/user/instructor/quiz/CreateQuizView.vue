<template>
  <dashboard-layout title="Create a Quiz">
    <d-box class="inner-content">
      <steps-layout
        :steps="steps"
        :current-step="currentStep"
      >
        <template #backBtn v-if="currentStep > 0">
          <d-box display="flex" align-items="center" font-weight="400" font-size="16px"
                 class="text-cool-grey-400 secondary-font btn-text-dark" cursor="pointer"
                 @click="currentStep > 0 ? currentStep -= 1 : ''"
          >
            <d-box is="img" src="/icons/back.svg" margin-right="10px" />
            <d-text>Back</d-text>
          </d-box>
        </template>

        <d-box v-if="currentStep === 0">
          <d-box>
            <d-heading
              font-weight="450"
              font-size="25px"
              text-transform="capitalize"
              class="primary-font text-neutral-700"
            >
              Set Questions Here:
            </d-heading>
          </d-box>
          <d-box
            display="flex"
            justify-content="center"
            flex-direction="column"
            gap="1em"
            max-width="700px"
            padding-top="3em"
          >
            <d-box>
              <d-textfield v-model="quizPayload.name" label="Quiz name" placeholder="How to build a landing page test"
                           size="large" />
            </d-box>
            <d-box class="col">
              <d-box>
                <d-date-picker v-model="quizPayload.quiz_date" size="large" :onlyNumbers="true"
                               placeholder="Enter a date" label="Set the date of the test" />
              </d-box>
              <d-box>
                <d-select v-model="quizPayload.course_id" label="Select the course" size="large" :options="courseData"
                          placeholder="Select an option" />

              </d-box>
            </d-box>
            <!-- Button -->
            <d-box margin-top="20px" class="button__group">
              <d-button
                size="huge"
                text="Back"
                :left-icon="ArrowLeftIcon"
                @click="router.back()"
              />
              <d-button
                size="huge"
                color-scheme="primary"
                text="Continue"
                :right-icon="ArrowRightIcon"
                @click="setCurrentStep(1)"
              />
            </d-box>
          </d-box>
        </d-box>
        <d-box v-if="currentStep === 1">
          <d-box>
            <d-heading
              font-weight="450"
              font-size="25px"
              text-transform="capitalize"
              class="primary-font text-neutral-700"
            >
              let's set those questions

            </d-heading>
          </d-box>
          <d-box
            display="flex"
            justify-content="center"
            flex-direction="column"
            margin-top="1em"
            gap="1em"
            max-width="700px"
          >
            <d-box class="col__card" v-for="(quizData, index) in quizPayload.payload">
              <d-box class="left">
                <d-box>
                  <d-textfield
                    label="Question"
                    placeholder="Type Question"
                    name="question"
                    v-model="quizData.question"
                  />
                </d-box>
                <d-box class="container">
                  <d-box margin-top="1em" width="100%">
                    <d-textfield
                      label="Option A"
                      placeholder="Input option"
                      name="option"
                      v-model="quizData.option_one"
                    />
                    <d-textfield
                      label="Option C"
                      placeholder="Input option"
                      name="option"
                      v-model="quizData.option_two"
                    />
                  </d-box>
                  <d-box margin-top="1em" width="100%">
                    <d-textfield
                      label="Option B"
                      placeholder="Input option"
                      name="option"
                      v-model="quizData.option_three"
                    />
                    <d-textfield
                      label="Option D"
                      placeholder="Input option"
                      name="option"
                      v-model="quizData.option_four"
                    />
                  </d-box>
                </d-box>
                <d-box margin-top="1em">
                  <d-select v-model="quizData.answer" label="Select the correct answer" size="large"
                            :options="['A',' B','C','D']" placeholder="Select an option" />
                </d-box>
                <d-box class="right" v-if="![0, 1].includes(index)">
                  <d-box class="icon" @click="removeQuiz(index)">
                    <close-icon />
                  </d-box>
                </d-box>
              </d-box>
            </d-box>
          </d-box>
          <d-box margin-top="20px">
            <d-box class="add__new" @click="addNewQuiz">
              <d-text class="text">Add New +</d-text>
            </d-box>
          </d-box>
          <hr>
          <!-- Button -->
          <d-box margin-top="20px" class="button__group">
            <d-button
              size="huge"
              text="Back"
              :left-icon="ArrowLeftIcon"
              @click="setCurrentStep(0)"
            />
            <d-button
              size="huge"
              color-scheme="primary"
              text="Continue"
              :right-icon="ArrowRightIcon"
              @click="submit"
            />
          </d-box>
        </d-box>
        <d-box v-if="currentStep === 2">
          <d-box
            display="flex"
            justify-content="center"
            flex-direction="column"
            gap="1em"
            max-width="700px"
            padding-top="3em"
          >
            <d-box class="status__card">
              <d-box class="status__img" is="img" src="/icons/success.svg" alt="Success" />
              <d-text class="status__title">
                Your Quiz has been created! 😊
              </d-text>
              <d-text class="status__text">
                Your quiz has been created and will be published!
              </d-text>
              <d-box class="status__btn">
                <d-button
                  size="huge"
                  responsive
                  color-scheme="primary"
                  text="Back to dashboard"
                  :right-icon="ArrowRightIcon"
                  @click="router.push({name: 'overview'})"
                />
              </d-box>
            </d-box>
          </d-box>
        </d-box>
      </steps-layout>
    </d-box>
  </dashboard-layout>
</template>

<script setup>
import StepsLayout from "~/layouts/StepsLayout.vue";
import { useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import {
  DBox,
  DText,
  DHeading,
  DButton,
  DCard,
  DTextfield,
  ArrowRightIcon,
  ArrowLeftIcon,
  CloseIcon,
  DDatePicker,
  DSelect, useToast
} from "@deposits/ui-kit-vue";
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import useLocalStorage from "~/composables/local-storage";
import { useAxios } from "~/composables/useAxios";

const router = useRouter();
const { pushToast } = useToast();
const {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  removeLocalStorage
} = useLocalStorage();

onMounted(() => {
  getCourses();
});

const courseData = ref([]);
const loading = ref(false);
const quizPayload = reactive({
  name: "",
  quiz_date: "",
  course_id: "",
  payload: []
});

const addNewQuiz = () => {
  quizPayload.payload.push({
    question: "",
    option_one: "",
    option_two: "",
    option_three: "",
    option_four: "",
    answer: ""
  });
};
const removeQuiz = index => {
  quizPayload.payload.splice(index, 1);
};

const steps = ref([
  {
    "text": "Let's Create a quiz"
  },
  {
    "text": "Set questions"
  },
  {
    "text": "Publish"
  }
]);
const currentStep = ref(0);

const setCurrentStep = index => {
  currentStep.value = index;
};

const submit = () => {
  loading.value = true;

  useAxios({
    url: `/add-quiz`,
    payload: quizPayload,
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });

        currentStep.value = 2;
        router.push({ name: "quiz_view" });
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

const getCourses = () => {
  loading.value = true;

  useAxios({
    url: `/get-courses`,
    callback: (data) => {
      if (data.status === "success") {
        courseData.value = [];

        data.data.forEach(course => {
          courseData.value.push({
            text: course.name,
            value: course.id
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
.container {
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin-top: 1em;
  padding: 0px;
}

.question_options {
  display: flex;
  flex-direction: column;
  gap: 1em;

  .question__heading {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #64748B;
  }
}

.col {
  display: flex;
  gap: 20px;
  margin-top: 20px;

  & > div {
    flex-grow: 1;
  }
}

.col__card {
  background: #00000008;
  //display: flex;
  //gap: 20px;
  padding: 30px 20px;
  border-radius: 5px;
  border: 1.5px solid var(--light-primary-500);
  position: relative;

  .left {
    flex-grow: 1;
  }

  .right {
    position: absolute;
    top: 10px;
    right: 10px;

    .icon {
      background: var(--light-primary-500);
      color: var(--light-primary-text-500);
      padding: 3px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}

.add__new {
  background: var(--light-primary-500);
  border: 1.5px solid var(--light-primary-500);
  color: var(--light-primary-text-500);
  transition: all 0.3s ease-in-out;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;

  &:hover {
    background: #ffffff;
    color: var(--light-primary-500);
  }
}

.button__group {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

.status__card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 72px 30px 56px 30px;
  text-align: center;

  .status__title {
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 32px;
    color: #334155;
    margin-top: 48px;
  }

  .status__text {
    font-family: var(--primary-font);
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #64748B;
    font-weight: 500;
    margin-top: 7px;
  }

  .status__btn {
    margin-top: 29px;
  }
}
</style>