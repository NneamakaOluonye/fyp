<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 2.3325 12.33 2.3325 12.33M2.3325 12.33H5.7225M2.3325 12.33V16.08M1.5 9C1.5 4.86 4.83 1.5 9 1.5C14.0025 1.5 16.5 5.67 16.5 5.67M16.5 5.67V1.92M16.5 5.67H13.17"
      :stroke="smartColor || stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
    default: "18"
  },
  height: {
    type: String,
    default: "18"
  }
});
</script>

<style scoped></style>
