<template>
  <d-box
      is="svg"
      :width="width"
      :height="height"
      viewBox="0 0 14 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >

    <path d="M6.99994 0.691406C6.27994 0.691406 5.68994 1.28141 5.68994 2.00141C5.68994 2.72141 6.27994 3.31141 6.99994 3.31141C7.71994 3.31141 8.30994 2.72141 8.30994 2.00141C8.30994 1.28141 7.71994 0.691406 6.99994 0.691406Z" :fill="smartColor || fill"/>
    <path d="M1.99994 0.691406C1.27994 0.691406 0.689941 1.28141 0.689941 2.00141C0.689941 2.72141 1.27994 3.31141 1.99994 3.31141C2.71994 3.31141 3.30994 2.72141 3.30994 2.00141C3.30994 1.28141 2.71994 0.691406 1.99994 0.691406Z" :fill="smartColor || fill"/>
    <path d="M11.9999 0.691406C11.2799 0.691406 10.6899 1.28141 10.6899 2.00141C10.6899 2.72141 11.2799 3.31141 11.9999 3.31141C12.7199 3.31141 13.3099 2.72141 13.3099 2.00141C13.3099 1.28141 12.7199 0.691406 11.9999 0.691406Z" :fill="smartColor || fill"/>
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
