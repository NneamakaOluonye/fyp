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
                                <d-radio name="option"/>
                                <d-text class="answer__option">{{ quiz.option_one }}</d-text>
                            </d-box>
                            <d-box class="answer__card">
                                <d-radio name="option"/>
                                <d-text class="answer__option">{{ quiz.option_two }}</d-text>
                            </d-box>
                        </d-box>
                        <d-box class="answer__layout">
                            <d-box class="answer__card">
                                <d-radio name="option"/>
                                <d-text class="answer__option">{{ quiz.option_three }}</d-text>
                            </d-box>
                            <d-box class="answer__card">
                                <d-radio name="option"/>
                                <d-text class="answer__option">{{ quiz.option_four }}</d-text>
                            </d-box>

                        </d-box>
                    </d-box>
                </d-card>
                <d-box class="button__layout">
                    <d-button size="large" text="Submit" color-scheme="primary" @click="submit"/>
                </d-box>
            </d-box>
        </d-box>
    </dashboard-layout>
</template>
<script setup>
import DashboardLayout from "~/layouts/DashboardLayout.vue";
import {DBox, DCard, DText, DButton, DRadio, useToast} from "@deposits/ui-kit-vue";
import {onMounted, ref} from "vue";
import {useAxios} from "~/composables/useAxios";
import {useRouter} from "vue-router";

const quizzes = ref([]);
const router = useRouter()
const { pushToast } = useToast();
const id = router.currentRoute.value.params.id

onMounted(() => {
    getQuizes()
})

const getQuizes = () => {
    useAxios({
        url: `/get-quizzes-by-id`,
        payload: {
            unique_id: id
        },
        callback: (data) => {
            if (data.status === "success") {
                quizzes.value = [];

                data.data.quizzes.forEach(quiz => {
                    quizzes.value.push({
                        quiz_id: quiz.id,
                        question: quiz.question,
                        option_one: quiz.option_one,
                        option_two: quiz.option_two,
                        option_three: quiz.option_three,
                        option_four: quiz.option_four
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

const submit = () => {
  useAxios({
    url: `/submit-quiz`,
    callback: (data) => {
      if (data.status === "success") {
        pushToast({
          description: data.message,
          colorScheme: "success"
        });

        data.data.quizzes.forEach(quiz => {
          quizzes.value.push({
            quiz_id: quiz.id,
            question: quiz.question,
            option_one: quiz.option_one,
            option_two: quiz.option_two,
            option_three: quiz.option_three,
            option_four: quiz.option_four
          });
        });
      } else {
        pushToast({
          description: data.message,
          colorScheme: "error"
        });
      }
    },
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