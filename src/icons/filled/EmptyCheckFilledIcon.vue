<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
      :stroke="smartColor || stroke" />
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
