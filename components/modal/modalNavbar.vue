<template>
  <div
    class="fixed top-0 right-0 left-0 bottom-0  bg-white text-[#222] text-xs font-semibold p-8 z-20 transition ease-in-out duration-300"
  >
    <div class="relative">
      <div class="absolute top-0 right-0" @click="handleClose">
        <iconsClose />
      </div>
      <div class="pt-[56px] flex flex-col gap-y-4">
        <a href="#" class="font-semibold text-[#222] text-[13px]">HOME</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">ADVERTISING</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">BLOGGING</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">ADVERTISING</a>
        
        <div>
          <a href="#" class="font-semibold text-[#222] text-[13px]">BLOGGING</a>
          <div class="pt-4 px-8">
            <a href="#" class="block font-semibold text-[#222] text-[13px]">SUB MENU 1</a>
            <a href="#" class="block font-semibold text-[#222] text-[13px]">SUB MENU 2</a>
            <a href="#" class="block font-semibold text-[#222] text-[13px]">SUB MENU 3</a>
          </div>
        </div>
        <a href="#" class="font-semibold text-[#222] text-[13px]">BUSINESS</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">FASHION</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">FOOD</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">LIFESTYLE</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">MARKETING</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">SEO</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">SOCIAL MEDIA</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">TECH</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">TRAVEL</a>
        <a href="#" class="font-semibold text-[#222] text-[13px]">WEB DESIGN</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import iconsClose from '~/components/icons/close.vue'

const emit = defineEmits(['handle-on-off-modal-navbar'])
function handleClose() {
  emit('handle-on-off-modal-navbar', false)
}
</script>