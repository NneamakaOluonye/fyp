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
      d="M4.30656 14.913L3 20.2908L8.37781 18.9842L19.452 7.90982C19.9909 7.37006 20.2938 6.63862 20.2938 5.87584C20.2938 5.11307 19.9909 4.38139 19.452 3.84164V3.84164C18.9122 3.30266 18.1808 3 17.418 3C16.6552 3 15.9235 3.30266 15.3838 3.84164L4.30656 14.913Z"
      :stroke="stroke || smartColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.1782 6.46484L17.3954 8.68203" :stroke="stroke || smartColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
    <path d="M3.49878 18.2422L5.04374 19.7939" :stroke="stroke || smartColor" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
    <path d="M10.187 20.29H20.2946" :stroke="stroke || smartColor" stroke-width="1.5" stroke-linecap="round"
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
