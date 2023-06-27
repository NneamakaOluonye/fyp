<template>
    <dashboard-layout title="Quiz">
        <d-box class="inner-content">
            <d-box class="quiz__layout">
                <d-box v-for="(quiz, index) in quizzes">
                    <d-card>
                        <d-box class="question__section">
                            <d-text class="question_title">{{ quiz.question }}</d-text>
                        </d-box>
                        <d-box class="answer__layout">
                            <d-box class="answer__card__option">
                                <input class="radio" type="radio" :id="'a__' + index" :name="'option__' + index" value="A"
                                       v-model="payload.answers[index].answer"
                                       @change="setAnswer(quiz.quiz_id, 'A', index)"
                                       :checked="payload.answers[index].answer == 'A' && payload.answers[index].quiz_id == quiz.quiz_id"/>
                                <d-box class="answer__card" is="label" :for="'a__' + index">
                                    <d-text class="answer__option">{{ quiz.option_one }}</d-text>
                                </d-box>
                            </d-box>
                            <d-box class="answer__card__option">
                                <input class="radio" type="radio" :id="'b__' + index" :name="'option__' + index" value="B"
                                       v-model="payload.answers[index].answer"
                                       @change="setAnswer(quiz.quiz_id, 'B', index)"
                                       :checked="payload.answers[index].answer == 'B' && payload.answers[index].quiz_id == quiz.quiz_id"/>
                                <d-box class="answer__card" is="label" :for="'b__' + index">
                                    <d-text class="answer__option">{{ quiz.option_two }}</d-text>
                                </d-box>
                            </d-box>
                            <d-box class="answer__card__option">
                                <input class="radio" type="radio" :id="'c__' + index" :name="'option__' + index" value="C"
                                       v-model="payload.answers[index].answer"
                                       @change="setAnswer(quiz.quiz_id, 'C', index)"
                                       :checked="payload.answers[index].answer == 'C' && payload.answers[index].quiz_id == quiz.quiz_id"/>
                                <d-box class="answer__card" is="label" :for="'c__' + index">
                                    <d-text class="answer__option">{{ quiz.option_three }}</d-text>
                                </d-box>
                            </d-box>
                            <d-box class="answer__card__option">
                                <input class="radio" type="radio" :id="'d__' + index" :name="'option__' + index" value="D"
                                       v-model="payload.answers[index].answer"
                                       @change="setAnswer(quiz.quiz_id, 'D', index)"
                                       :checked="payload.answers[index].answer == 'D' && payload.answers[index].quiz_id == quiz.quiz_id"/>
                                <d-box class="answer__card" is="label" :for="'d__' + index">
                                    <d-text class="answer__option">{{ quiz.option_four }}</d-text>
                                </d-box>
                            </d-box>
                        </d-box>
                    </d-card>
                </d-box>

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
import {onMounted, reactive, ref} from "vue";
import {useAxios} from "~/composables/useAxios";
import {useRouter} from "vue-router";

const quizzes = ref([]);
const router = useRouter()
const {pushToast} = useToast();
const id = router.currentRoute.value.params.id
const payload = reactive({
    category_id: id,
    answers: []
})

const setAnswer = (id, answer, index) => {
    payload.answers[index] = {
        quiz_id: id,
        answer: answer
    }
}

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

                data.data.quizzes.forEach((quiz, quiz_index) => {
                    quizzes.value.push({
                        quiz_id: quiz.id,
                        question: quiz.question,
                        option_one: quiz.option_one,
                        option_two: quiz.option_two,
                        option_three: quiz.option_three,
                        option_four: quiz.option_four
                    });

                    payload.answers[quiz_index] = {
                        quiz_id: quiz.id,
                        answer: ""
                    }
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
        payload: {
            ...payload
        },
        callback: (data) => {
            if (data.status === "success") {
                pushToast({
                    description: data.message,
                    colorScheme: "success"
                });

                router.back()
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
    border: 1px solid var(--light-primary-500);
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

.answer__card__option {
  .radio {
    display: none;

    &:checked + .answer__card {
      background-color: var(--light-primary-500);
      color: #ffffff;
    }
  }

  .answer__card {
    cursor: pointer;
  }
}

.question__section {
  background-color: var(--light-primary-500);
  color: #ffffff;
  border-radius: 5px;
  padding: 5em 2em;
}
</style>