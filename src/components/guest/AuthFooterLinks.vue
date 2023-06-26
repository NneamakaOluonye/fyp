<template>
  <d-box
      position="absolute"
      bottom="5vh"
      display="flex"
      flex-wrap="wrap"
      justify-content="center"
  >
    <d-text
        class="text-gray-500"
        v-for="(link, index) in links"
        :key="`link__${index}`"
        text-decoration="none"
        font-face="circularSTD"
        margin-x="1rem"
        :is="link.url ? 'a' : 'p'"
        :class="{ 'footer-links': index > 0 }"
        v-bind="{
        ...(link.url ? { href: link.url } : {}),
        ...(link.url ? { target: '_blank' } : {}),
      }"
    >
      {{ link.text }}
    </d-text>
  </d-box>
</template>

<script setup>
import {DBox, DText} from "@deposits/ui-kit-vue";

const links = [
  {
    text: "What is Apex?",
    url: "#",
  },
  {
    text: "Terms of use",
    url: "#",
  },
  {
    text: "Privacy Policy",
    url: "#",
  },
];
</script>

<style scoped>
.footer-links {
  position: relative;
}

.footer-links::before {
  content: "";
  width: 3px;
  height: 3px;
  position: absolute;
  left: -15px;
  top: 43%;
  background: #8895a7;
  flex: none;
  order: 3;
  flex-grow: 0;
  border-radius: 100%;
}
</style>
