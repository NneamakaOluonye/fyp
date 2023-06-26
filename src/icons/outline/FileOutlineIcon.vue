<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.585 20.856H6.47192C5.55109 20.856 4.66797 20.4905 4.01685 19.8394C3.36572 19.1882 3 18.3051 3 17.3843V3.99219C3 3.86192 3.02559 3.73266 3.07544 3.6123C3.12529 3.49195 3.19841 3.38264 3.29053 3.29053C3.38264 3.19841 3.49195 3.12554 3.6123 3.07568C3.73266 3.02583 3.86167 3 3.99194 3H16.0779C16.2082 3 16.3372 3.02583 16.4575 3.07568C16.5779 3.12554 16.6874 3.19841 16.7795 3.29053C16.8717 3.38264 16.9445 3.49195 16.9944 3.6123C17.0442 3.73266 17.0701 3.86192 17.0701 3.99219V15.3989"
      :stroke="stroke || smartColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M17.0698 11.1084V18.6011C17.0701 19.1991 17.3079 19.7725 17.7307 20.1953C18.1535 20.6181 18.727 20.8562 19.325 20.8564C19.9231 20.8564 20.4966 20.6187 20.9197 20.1958C21.3427 19.7729 21.5805 19.1992 21.5808 18.6011V12.1011C21.5808 11.838 21.4763 11.5859 21.2903 11.3999C21.1042 11.2139 20.852 11.1094 20.5889 11.1094H19.9109"
      stroke="#E7EAED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6.24902 8.08691H8.77302" :stroke="stroke || smartColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
    <path d="M6.24902 11.5327H13.421" :stroke="stroke || smartColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
    <path d="M6.24902 14.98H13.547" :stroke="stroke || smartColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
  </d-box>
</template>

<script setup>
import { DBox } from "@deposits/ui-kit-vue";

defineProps({
  smartColor: {
    type: String,
    default: "currentcolor"
  },
  fill: {
    type: String
  },
  stroke: {
    type: String
  },
  strokeWidth: {
    type: String,
    default: "1.5"
  },
  strokeLineCap: {
    type: String,
    default: "round"
  },
  strokeLineJoin: {
    type: String,
    default: "round"
  },
  width: {
    type: String,
    default: "24"
  },
  height: {
    type: String,
    default: "24"
  }
});
</script>

<style scoped></style>
