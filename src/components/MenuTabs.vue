<template>
  <d-box
      class="menu__card"
  >
    <d-box class="tabs">
      <d-box
          v-for="link in links"
          :is="RouterLink"
          :to="link.route"
          class="tab-btn"
          :padding="link.badge ? '' : '0 15px 12px 16px'"
          :class="{
            'active': link.route.name === router.currentRoute.value.name
          }"
      >
        <d-box is="span">{{ link.title }}</d-box>
        <d-box v-if="link.badge" is="span" class="badge" :class="{
          'active': link.route.name === router.currentRoute.value.name
          }">{{ link.badge }}
        </d-box>
      </d-box>
    </d-box>
    <d-box class="button-group">
      <slot name="buttons"/>
      <d-button
          v-if="buttons"
          v-for="button in buttons"
          :color-scheme="button.colorScheme ?? ''"
          :class="button.class ?? ''"
          :text="button.text"
          :size="button.size ?? 'large'"
          :is="RouterLink"
          :to="button.route"
          :left-icon="button.icon"
      />
    </d-box>
  </d-box>
</template>

<script setup>
import {DBox, DButton} from "@deposits/ui-kit-vue"
import {RouterLink, useRouter} from "vue-router"
import {onMounted} from "vue";

const router = useRouter()
const props = defineProps({
  links: {
    type: Array,
    required: true
  },
  buttons: {
    type: Array
  }
});
</script>

<style scoped lang="scss">
.menu__card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  gap: 8px;
  background: #FFFFFF;
  border-radius: 8px;
  margin-top: 20px;
}
.tabs {
  display: flex;
  gap: 20px;
  align-items: baseline;
  margin-top: 10px;

  .tab-btn {
    border-bottom: 4px solid transparent;
    padding: 0 15px 10px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #64748B;
    transition: .3s ease-in-out;
    font-weight: 450;
    text-decoration: none;

    &.active,
    &:hover {
      color: #121A26;
    }

    &.active {
      font-weight: 500;
      border-bottom-color: var(--light-primary-500);
    }

    .badge {
      color: var(--light-primary-300);
      font-size: 12px;
      padding: 3px 8px;
      background: var(--light-primary-500);
      border-radius: 6px;
      display: inline-block;

      &.active {
        color: var(--light-primary-500);
        background: var(--light-primary-200);
      }
    }
  }
}


.btn-primary-outline {
  border: 1px solid var(--light-primary-500);
  border-radius: 6px;
  color: var(--light-primary-500);
}
</style>