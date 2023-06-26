<template>
  <d-box>
    <d-box class="show__mobile">
      <mobile-nav-bar title="Accounts" />
    </d-box>
    <d-box class="container">
      <d-responsive-layout full>
        <d-row>
          <d-col :md="4" :sm="12">
            <d-box class="sidebar">
              <d-box margin-bottom="50px" class="show__desktop">
                <slot name="backBtn" />
              </d-box>
              <d-box v-if="steps">
                <d-box class="show__desktop">
                  <d-stepper :steps="steps" :current-step="currentStep" />
                </d-box>
                <d-box class="show__mobile" margin-bottom="20px" margin-top="20px">
                  <d-progress-bar
                      empty-Color="#F1F5F9"
                      :total-steps="steps.length"
                      :current-step="currentStep"
                  />
                  <d-text class="normal__text">Step 1 of 3</d-text>
                  <d-text class="heading__text">Bill type</d-text>
                </d-box>
              </d-box>
            </d-box>
          </d-col>
          <d-col :md="8" :sm="12">
            <d-box class="content">
              <slot />

              <d-box class="close-btn show__desktop" @click="router.back()" cursor="pointer">
                <slot name="closeBtn" />
              </d-box>
            </d-box>
          </d-col>
        </d-row>
      </d-responsive-layout>
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  DResponsiveLayout,
  DRow,
  DCol,
  DStepper,
  DProgressBar,
  DText
} from "@deposits/ui-kit-vue";
import { onBeforeMount } from "vue";
import MobileNavBar from "~/components/user/MobileNavBar.vue";
import setMetadata from "~/composables/setMetadata";
import { useRouter} from "vue-router";

const router = useRouter()
const props = defineProps({
  steps: {
    type: Array
  },
  currentStep: {
    type: Number,
    default: 0
  },
  backgroundColor: {
    type: String,
    defaults: "#F4F6F8"
  }
});

setMetadata()

onBeforeMount(() => {
  const body = document.querySelector("body");

  body.style.backgroundColor = props.backgroundColor;
});
</script>

<style scoped lang="scss">
body {
  background: #E5E5E5;

  .container {
    --bs-gutter-x: 2rem;
    padding-right: calc(var(--bs-gutter-x) * 5);
    padding-left: calc(var(--bs-gutter-x) * 5);
    margin-top: 50px;

    .sidebar {
      width: 100%;
    }

    .content {
      width: 100%;
      position: relative;

      .close-btn {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}

.show__mobile {
  display: none;
}

@media screen and (max-width: 600px) {
  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-top: 10px !important;
  }

  .show__mobile {
    display: block;
  }

  .show__desktop {
    display: none;
  }

  .ui-responsive__row > * {
    margin-top: 0 !important;
  }
}

.normal__text {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 450;
  font-size: 14px;
  line-height: 18px;
  color: #8895A7;
  margin-top: 10px;
  margin-bottom: 10px;
}

.header__text {
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #525964;
}
</style>