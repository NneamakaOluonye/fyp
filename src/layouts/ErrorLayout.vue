<template>
  <div class="nk-app-root">
    <div class="nk-main ">
      <div class="nk-wrap nk-wrap-nosidebar">
        <div class="nk-content ">
          <div class="nk-block nk-block-middle wide-md mx-auto">
            <div class="nk-block-content nk-error-ld text-center">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import setMetadata from "~/composables/setMetadata";

setMetadata()
</script>

<style scoped>

</style>