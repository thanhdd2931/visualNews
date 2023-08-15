<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="mb:flex mb:justify-between mb:items-center mb:flex-wrap">
      <div
        class="flex justify-start items-center text-[#1da1f2] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
      >
        <iconTwitter :width="30" :height="30" />
        <span>Twitter</span>
      </div>
      <div
        class="flex flex-wrap justify-start items-center text-[#1778f2] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
      >
        <iconFacebook :width="30" :height="30" />
        <span>Facebook</span>
      </div>
      <div
        class="flex flex-wrap justify-start items-center text-red-500 text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
      >
        <iconYoutube :width="30" :height="30" />
        <span>Youtube</span>
      </div>
      <div
        class="flex flex-wrap justify-start items-center text-[#2c5a92] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
      >
        <iconLinkedIn :width="30" :height="30" />
        <span>LinkedIn</span>
      </div>
      <div
        class="flex flex-wrap justify-start items-center text-[#f00075] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
      >
        <iconInstagram :width="30" :height="30" />
        <span>Instagram</span>
      </div>
      <div
        class="flex flex-wrap justify-start items-center text-[#e94c89] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
      >
        <iconDribbble :width="30" :height="30" />
        <span>Dribbble</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import iconFacebook from '~/components/icons/facebook.vue'
import iconTwitter from '~/components/icons/twitter.vue'
import iconYoutube from '~/components/icons/youtube.vue'
import iconLinkedIn from '~/components/icons/linkedin.vue'
import iconDribbble from '~/components/icons/dribbble.vue'
import iconInstagram from '~/components/icons/instagram.vue'
</script>