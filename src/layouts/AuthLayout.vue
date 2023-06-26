<template>
  <d-box class="auth__background" >
    <d-box class="auth__card">
      <d-box class="auth__header">
        <d-text class="auth__title">{{ title }}</d-text>
        <d-text v-if="description" class="auth__description">{{ description }}</d-text>
      </d-box>
      <slot />
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  DText
} from "@deposits/ui-kit-vue";
import AuthLogo from "~/components/guest/AuthLogo.vue";
import setMetadata from "~/composables/setMetadata";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  height: {
    type: String,
    default: "100vh"
  }
});

setMetadata();
</script>

<style lang="scss" scoped>
.auth__background {
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  .auth__card {
    background: #FFFFFF;
    border-radius: 15px;
    width: 40%;
    padding: 40px;
    @media only screen and (min-width: 320px) and (max-width: 756px) {
      width: 75%;
    }

    .auth__header {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;

      .auth__title {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 38px;
        text-align: center;
        color: #000000;
      }

      .auth__description {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        color: #000000;
        margin-top: 10px;
        width: 445px;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .auth__card {
    width: 100% !important;
    padding: 20px !important;
  }

  .auth__background {
    //display: block;
    padding: 30px 15px !important;
  }

  .auth__description {
    font-size: 18px !important;
    width: 100% !important;
  }
}
</style>
