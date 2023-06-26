<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 4L12 12M4 12L12 4L4 12Z" :stroke="stroke || smartColor" stroke-width="1.5" stroke-linecap="round"
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
    default: "16"
  },
  height: {
    type: String,
    default: "16"
  }
});
</script>

<style scoped></style>
