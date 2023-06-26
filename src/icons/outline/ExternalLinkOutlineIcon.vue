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
      d="M10.6257 3.00128H15V7.81308M14.9973 11.025V13.9997C14.9973 14.2648 14.892 14.519 14.7045 14.7065C14.517 14.8941 14.2626 14.9995 13.9975 14.9995H3.99986C3.73469 14.9995 3.48033 14.8941 3.29282 14.7065C3.10532 14.519 3 14.2648 3 13.9997V4.00189C3 3.73672 3.10532 3.48252 3.29282 3.29502C3.48033 3.10751 3.73469 3.0022 3.99986 3.0022H7.62429M8.999 8.99901L14.998 3"
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
