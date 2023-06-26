<template>
  <d-box
      is="svg"
      :width="width"
      :height="height"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >

    <path d="M2.99609 9.586L11.6031 0.979L13.0171 2.393L4.41109 11L11.9961 11L11.9961 13L0.99609 13L0.996091 2L2.99609 2L2.99609 9.586Z" :fill="smartColor || fill"/>
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
