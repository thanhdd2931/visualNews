<template>
  <div
    class="fixed top-0 right-0 left-0 bottom-0  bg-white text-[#222] text-xs font-semibold p-8 z-20 transition ease-in-out duration-300"
  >
    <div class="relative">
      <div class="absolute top-0 right-0" @click="handleClose">
        <iconsClose />
      </div>
      <div class="pt-[56px] flex flex-col gap-y-4">
        <nuxt-link to="/" class="font-semibold text-[#222] text-[13px]">HOME</nuxt-link>
        <nuxt-link to="/category/advertising" class="font-semibold text-[#222] text-[13px]">ADVERTISING</nuxt-link>
        <div>
          <nuxt-link to="/category/blogging" class="font-semibold text-[#222] text-[13px]">BLOGGING</nuxt-link>
          <div class="pt-4 px-8">
            <nuxt-link to="/category/blogging" class="block font-semibold text-[#222] text-[13px]">SUB MENU 1</nuxt-link>
            <nuxt-link to="/category/blogging" class="block font-semibold text-[#222] text-[13px]">SUB MENU 2</nuxt-link>
            <nuxt-link to="/category/blogging" class="block font-semibold text-[#222] text-[13px]">SUB MENU 3</nuxt-link>
          </div>
        </div>
        <nuxt-link to="/category/business" class="font-semibold text-[#222] text-[13px]">BUSINESS</nuxt-link>
        <nuxt-link to="/category/fashion" class="font-semibold text-[#222] text-[13px]">FASHION</nuxt-link>
        <nuxt-link to="/category/food" class="font-semibold text-[#222] text-[13px]">FOOD</nuxt-link>
        <nuxt-link to="/category/lifestyle" class="font-semibold text-[#222] text-[13px]">LIFESTYLE</nuxt-link>
        <nuxt-link to="/category/marketing" class="font-semibold text-[#222] text-[13px]">MARKETING</nuxt-link>
        <nuxt-link to="/category/seo" class="font-semibold text-[#222] text-[13px]">SEO</nuxt-link>
        <nuxt-link to="/category/social-media" class="font-semibold text-[#222] text-[13px]">SOCIAL MEDIA</nuxt-link>
        <nuxt-link to="/category/tech" class="font-semibold text-[#222] text-[13px]">TECH</nuxt-link>
        <nuxt-link to="/category/travel" class="font-semibold text-[#222] text-[13px]">TRAVEL</nuxt-link>
        <nuxt-link to="/category/web-design" class="font-semibold text-[#222] text-[13px]">WEB DESIGN</nuxt-link>
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