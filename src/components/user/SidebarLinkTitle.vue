<template>
  <d-box>
    <d-box is="p" v-if="title" class="title">
      <d-box is="span" class="title__text">{{ title }}</d-box>
      <d-box is="span" v-if="badge" class="badge">{{ badge }}</d-box>
    </d-box>
  </d-box>
</template>

<script setup>
import {
  DBox,
  DText,
  GridIcon
} from "@deposits/ui-kit-vue"
import {useRouter, RouterLink} from "vue-router"

const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  badge: {
    type: String
  }
})

</script>

<style lang="scss" scoped>
.title {
  padding-left: 13px;
  margin-top: 50px;

  .title__text {
    font-size: 14px;
    text-transform: uppercase;
    color: #ACD7FF;
  }

  .badge {
    margin-left: 15px;
    padding: 5px 10px;
    font-size: 11px;
    background: #00B058;
    color: #ffffff;
    border-radius: 15px;
  }
}
</style>