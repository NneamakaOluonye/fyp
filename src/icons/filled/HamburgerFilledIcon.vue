<template>
  <d-box
      is="svg"
      :width="width"
      :height="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6584_74632)">
      <path d="M1.11133 4.16536C1.11133 3.70513 1.48442 3.33203 1.94466 3.33203H18.0558C18.516 3.33203 18.8891 3.70513 18.8891 4.16536C18.8891 4.6256 18.516 4.9987 18.0558 4.9987H1.94466C1.48443 4.9987 1.11133 4.6256 1.11133 4.16536ZM1.11133 9.9987C1.11133 9.53846 1.48442 9.16536 1.94466 9.16536H18.0558C18.516 9.16536 18.8891 9.53846 18.8891 9.9987C18.8891 10.4589 18.516 10.832 18.0558 10.832H1.94466C1.48443 10.832 1.11133 10.4589 1.11133 9.9987ZM1.11133 15.832C1.11133 15.3718 1.48442 14.9987 1.94466 14.9987H18.0558C18.516 14.9987 18.8891 15.3718 18.8891 15.832C18.8891 16.2923 18.516 16.6654 18.0558 16.6654H1.94466C1.48443 16.6654 1.11133 16.2923 1.11133 15.832Z" :fill="smartColor || fill"/>
    </g>
    <defs>
      <clipPath id="clip0_6584_74632">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
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
