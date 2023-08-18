<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-[42px] leading-[41px] border-b relative flex justify-start items-center gap-4">
    <nuxt-link :to="`${isFollowUs == true ? '#' : `/category/${link}`}`" class="uppercase font-bold text-[14px]">
      {{ title }}
      <span class="w-5 h-[3px] bg-sky-500 absolute bottom-[-1px] left-0"></span>
    </nuxt-link>
    <nuxt-link
      v-for="(item, index) in subTitle"
      :key="index"
      :to="`${isFollowUs == true ? '#' : `/category/${link}`}`"
      class="text-[12px] uppercase font-semibold text-gray-400 hover:text-black mb:hidden mmb:block"
    >
      {{ item }}
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
    require: true,
  },
  link: {
    type: String,
    default: '',
    require: true,
  },
  subTitle: {
    type: Array,
    default: () => [],
    require: true,
  },
  isFollowUs: {
    type: Boolean,
    default: false,
    require: false,
  },
})
</script>
