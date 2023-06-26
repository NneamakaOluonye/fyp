<template>
  <d-box
    is="svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.53 15.9294C21.37 15.6594 20.92 15.2394 19.8 15.4394C19.18 15.5494 18.55 15.5994 17.92 15.5694C15.59 15.4694 13.48 14.3994 12.01 12.7494C10.71 11.2994 9.90995 9.40938 9.89995 7.36938C9.89995 6.22938 10.12 5.12938 10.57 4.08938C11.01 3.07938 10.7 2.54938 10.48 2.32938C10.25 2.09938 9.70995 1.77938 8.64995 2.21938C4.55995 3.93938 2.02995 8.03938 2.32995 12.4294C2.62995 16.5594 5.52995 20.0894 9.36995 21.4194C10.29 21.7394 11.26 21.9294 12.26 21.9694C12.42 21.9794 12.58 21.9894 12.74 21.9894C16.09 21.9894 19.23 20.4094 21.21 17.7194C21.88 16.7894 21.7 16.1994 21.53 15.9294Z" fill="#8895A7"/>
</svg>

  </d-box>
</template>

<script setup>
import { DBox } from "@deposits/ui-kit-vue";

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
