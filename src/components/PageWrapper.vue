<template>
  <full-page-loader v-if="loading"></full-page-loader>
  <slot v-else></slot>
</template>

<script setup>
import FullPageLoader from "./FullPageLoader.vue";

defineProps({
  loading: Boolean,
});
</script>

<style scoped></style>
