<template>
  <div
    class="fixed top-0 right-0 left-0 bottom-0 bg-white text-[#222] text-xs font-semibold p-8 z-20 transition ease-in-out duration-300"
  >
    <div class="relative">
      <div class="absolute top-0 right-0" @click="handleClose">
        <iconsClose />
      </div>
      <div class="pt-[56px] flex flex-col gap-y-4">
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
        <div>
          <nuxt-link to="/full-width-page">Full Width Page</nuxt-link>
          <div class="pt-4 px-8">
            <nuxt-link to="/full-width-page" class="block">Sub menu 1</nuxt-link>
            <nuxt-link to="/full-width-page" class="block">Sub menu 2</nuxt-link>
            <nuxt-link to="/full-width-page" class="block">Sub menu 3</nuxt-link>
          </div>
        </div>
        <nuxt-link to="/submit-artical">Submit Article</nuxt-link>
        <nuxt-link to="#">Buy Theme</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import iconsClose from '~/components/icons/close.vue'

const emit = defineEmits(['handle-on-off-modal-header'])
function handleClose() {
  emit('handle-on-off-modal-header', false)
}
</script>