<template>
  <router-link :to="route" class="basic-link">
    <d-box class="link-wrap">
      <d-text margin-left="10px" class="link-text" :color="textColor">
        {{ routeText }}
      </d-text>
      <component :is="props.icon" :color="iconColor"></component>
    </d-box>
  </router-link>
</template>

<script setup>
import {
  DBox,
  DText,
  GridIcon
} from "@deposits/ui-kit-vue"

const props = defineProps({
  route: {
    type: Object,
    required: true
  },
  routeText: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
    required: true
  },
  textColor: {
    type: String,
    default: "#ffffff"
  },
  iconColor: {
    type: String,
    default: "#ffffff"
  }
})
</script>

<style lang="scss" scoped>
.link-wrap {
  padding: 1.5rem 1rem;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border-bottom: 1px solid var(--light-primary-400);
}
</style>