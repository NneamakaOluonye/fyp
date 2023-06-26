<template>
  <d-box>
    <d-box :is="RouterLink" :to="route" class="basic-link">
      <d-box class="link-wrap" :class="{
      'active' : isActive || router.currentRoute.value.name === route.name
    }">
        <d-box display="flex" align-items="center">
          <d-box class="icon__group">
            <component class="icon" :is="props.icon"></component>
            <component class="icon active" :is="props.activeIcon"></component>
          </d-box>
          <d-text margin-left="10px" class="link-text">
            {{ routeText }}
          </d-text>
        </d-box>
      </d-box>
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
  route: {
    type: Object,
    required: true
  },
  routeText: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Object,
    required: true
  },
  activeIcon: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.link-wrap {
  padding: 11px;
  border-radius: 6px;
  margin-top: 5px;
  transition: 0.3s ease-in-out;

  &.active, &:hover {
    background: var(--light-primary-400);
  }

  .link-text {
    color: var(--light-primary-text-500);
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
}

.basic-link {
  font-size: 14px;
  text-decoration: none;

  &:hover {
    .icon {
      display: none;
      color: var(--light-primary-text-500);
    }

    .icon.active {
      display: block;
    }
  }

  .icon {
    display: block;
    color: var(--light-primary-text-500);
  }

  .icon.active {
    display: none;
  }

  .link-wrap.active {
    .icon {
      display: none;
    }

    .icon.active {
      display: block;
    }
  }
}
</style>