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
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      :fill="smartColor || fill" />
    <g filter="url(#filter0_d_1816_92223)">
      <path
        d="M17.4859 9.59109L11.3374 15.9161C11.2307 16.0272 11.1026 16.1156 10.9608 16.176C10.8191 16.2363 10.6666 16.2674 10.5125 16.2674C10.3584 16.2674 10.206 16.2363 10.0642 16.176C9.92245 16.1156 9.79436 16.0272 9.6876 15.9161L6.51445 12.6508C6.29527 12.4227 6.17285 12.1187 6.17285 11.8024C6.17285 11.486 6.29527 11.182 6.51445 10.954C6.62119 10.8428 6.74928 10.7544 6.89103 10.694C7.03279 10.6336 7.18528 10.6025 7.33937 10.6025C7.49345 10.6025 7.64595 10.6336 7.7877 10.694C7.92946 10.7544 8.05755 10.8428 8.16428 10.954L10.5142 13.3711L15.8371 7.89429C15.9438 7.78321 16.0719 7.69483 16.2137 7.63446C16.3554 7.57409 16.5079 7.54297 16.662 7.54297C16.8161 7.54297 16.9686 7.57409 17.1103 7.63446C17.2521 7.69483 17.3801 7.78321 17.4869 7.89429C17.7059 8.12252 17.8281 8.42662 17.8279 8.7429C17.8277 9.05918 17.7051 9.36313 17.4859 9.59109Z"
        fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_1816_92223" x="0.172852" y="4.54297" width="23.655" height="20.7246"
              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                       result="hardAlpha" />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_92223" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_92223" result="shape" />
      </filter>
    </defs>
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
