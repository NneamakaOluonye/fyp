<template>
  <d-box
      is="svg"
      :width="width"
      :height="height"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >

    <path d="M11.0039 3.414L2.39691 12.021L0.98291 10.607L9.58891 2H2.00391V0H13.0039V11H11.0039V3.414Z" :fill="smartColor || fill"/>
  </d-box>
</template>

<script setup>
import {DBox} from "@deposits/ui-kit-vue";

defineProps({
  smartColor: {
    type: String,
    default: "currentcolor",
  },
  fill: {
    type: String,
  },
  stroke: {
    type: String,
  },
  strokeWidth: {
    type: String,
    default: "1.5",
  },
  strokeLineCap: {
    type: String,
    default: "round",
  },
  strokeLineJoin: {
    type: String,
    default: "round",
  },
  width: {
    type: String,
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>

<style scoped></style>
