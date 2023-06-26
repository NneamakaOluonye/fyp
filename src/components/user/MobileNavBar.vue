<template>
  <d-box class="layout" >
    <side-bar :isSidebarActive="isSidebarActive"/>
    <d-box class="content">
      <nav-bar :title="title" @toggleSidebar="toggleSidebar"/>
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox
} from "@deposits/ui-kit-vue";
import SideBar from "~/components/user/SideBar.vue";
import NavBar from "~/components/user/NavBar.vue";
import {onBeforeMount, ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    default: "#F4F6F8"
  }
})
const isSidebarActive = ref(false)

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}
onBeforeMount(() => {
  const body = document.querySelector("body")

  body.style.backgroundColor = props.backgroundColor
})
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex: 1;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    margin-left: var(--sidebar-width);
    width: calc(100% - var(--sidebar-width));
  }
}
</style>