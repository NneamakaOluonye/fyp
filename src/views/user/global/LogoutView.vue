<template>
</template>

<script setup>
import useLocalStorage from "~/composables/local-storage";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const {
  removeLocalStorage
} = useLocalStorage();
const router = useRouter()

onBeforeMount(() => {
  removeLocalStorage()

  router.push({ name: "login" })
})
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  gap: 20px;
  margin-top: 20px;

  & > div {
    flex-grow: 1;
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