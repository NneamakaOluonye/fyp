<template>
  <d-box :class="classes">
    <d-box
        is="img"
        :height="height"
        :width="width"
        :src="src"
        :alt="alt"
    />
  </d-box>
</template>

<script setup>
import { DBox } from "@deposits/ui-kit-vue";

const props = defineProps({
  height: {
    type: String,
    default: "30px"
  },
  width: {
    type: String
  },
  src: {
    type: String,
    default: "/images/logo-light.svg"
  },
  alt: {
    type: String,
    default: "Deposits Logo"
  },
  classes: {
    type: String
  }
});
</script>

<style scoped>
.logo-box {
  margin: 3rem 0;
}

@media only screen and (max-width: 600px) {
  .logo-box {
    margin: 0 0 2rem 0;
    padding: 1rem 3rem;
    /*width: 100%;*/
    background-color: #ffffff;
  }
}
</style>