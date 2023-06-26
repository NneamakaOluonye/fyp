<template>
  <d-box>
    <d-box id="nav-bar">
      <d-box class="left__side">
        <hamburger-filled-icon class="menu__mobile_nav" @click="$emit('toggleSidebar')"/>
        <d-box class="left__side__title">{{ title }}</d-box>
      </d-box>
      <d-box class="right-side">
        <d-box class="icon">
          <notification-section />
        </d-box>
      </d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  SearchIcon,
  DText,
  DAvatar
} from "@deposits/ui-kit-vue";
import { ref } from "vue";
// import NotificationSection from "~/components/user/dashboard/NotificationSection.vue";
import HamburgerFilledIcon from "~/icons/filled/HamburgerFilledIcon.vue";

const emit = defineEmits(['toggleSidebar'])

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
#nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 60px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 1px 3px rgba(42, 148, 244, 0.07);

  .left__side {
    display: flex;
    gap: 20px;

    .left__side__title {
      font-family: var(--primary-font);
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #525964;
    }
  }

  .right-side {
    display: flex;
    gap: 5px;

    .icon {
      cursor: pointer;
    }
  }
}

.menu__mobile_nav {
  display: none;
}

@media only screen and (max-width: 768px) {
  .menu__mobile_nav {
    display: block;
  }
}
</style>