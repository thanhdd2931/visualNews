<template>
  <div
    class="fixed top-0 right-0 left-0 bottom-0 bg-white text-[#222] text-xs font-semibold p-8 z-20 transition ease-in-out duration-300"
  >
    <div class="relative">
      <div class="absolute top-0 right-0" @click="handleClose">
        <iconsClose />
      </div>
      <div class="pt-[56px] flex flex-col gap-y-4">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div>
          <a href="#">Full Width Page</a>
          <div class="pt-4 px-8">
            <a href="#" class="block">Sub menu 1</a>
            <a href="#" class="block">Sub menu 2</a>
            <a href="#" class="block">Sub menu 3</a>
          </div>
        </div>
        <a href="#">Submit Article</a>
        <a href="#">Buy Theme</a>
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