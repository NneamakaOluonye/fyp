<template>
  <dashboard-layout title="Quiz">
    <d-box class="inner-content">
      <d-box class="quiz__layout">
        <d-card>
          <d-box v-for="quiz in quizzes">
            <d-box padding-left="1em">
              <ol>
                <li>
                  <d-text class="question_title">{{ quiz.question }}</d-text>
                </li>
              </ol>
            </d-box>
            <d-box class="answer__layout">
              <d-box class="answer__card">
                <d-radio name="option" />
                <d-text class="answer__option">Bill Gates</d-text>
              </d-box>
              <d-box class="answer__card">
                <d-radio name="option" />
                <d-text class="answer__option">Elon Musk</d-text>
              </d-box>
            </d-box>
            <d-box class="answer__layout">
              <d-box class="answer__card">
                <d-radio name="option" />
                <d-text class="answer__option">Martin Luther</d-text>
              </d-box>
              <d-box class="answer__card">
                <d-radio name="option" />
                <d-text class="answer__option">Steve Jobs</d-text>
              </d-box>

            </d-box>
          </d-box>
        </d-card>
        <d-box class="button__layout">
          <d-button size="large" text="Submit" color-scheme="primary" />
        </d-box>
      </d-box>
    </d-box>
  </dashboard-layout>
</template>
<script setup>
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import {DBox, DCard, DText,DButton, DRadio} from "@deposits/ui-kit-vue";
import { ref } from "vue";
import { useAxios } from "~/composables/useAxios";

const quizzes = ref([
  {
    question: "who is the founder of apple?",
    option_one: "who is the founder of apple?",
    option_two: "who is the founder of apple?",
    option_three: "who is the founder of apple?",
    option_four: "who is the founder of apple?"
  },
]);

const getQuizes = () => {
  useAxios({
    url: `/get-quizzes`,
    callback: (data) => {
      if (data.status === "success") {
        quizzes.value = [];

        data.data.forEach(quiz => {
          quizzes.value.push({
            question: "who is the founder of apple?",
            option_one: "who is the founder of apple?",
            option_two: "who is the founder of apple?",
            option_three: "who is the founder of apple?",
            option_four: "who is the founder of apple?"
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
<style lang="scss">
.quiz__layout {
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 80%;

  .question_title {
    font-weight: 600;
    font-size: 16px;
  }

  .answer__layout {
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin-top: 2em;
    justify-content: space-between;
  }

  .answer__card {
    border: 1px solid black;
    border-radius: 8px;
    padding: 1em;
    display: flex;
    flex-direction: row;
    gap: 1em;
  }
  .answer__option {
    font-size: 14px;
    font-weight: 500;
  }
}
.button__layout {
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: flex-end;
}
</style>