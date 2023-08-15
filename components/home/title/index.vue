<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-[42px] leading-[41px] border-b relative flex justify-start items-center gap-4">
    <a href="#" class="uppercase font-bold text-[14px]">
      {{ title }}
      <span class="w-5 h-[3px] bg-sky-500 absolute bottom-[-1px] left-0"></span>
    </a>
    <a
      v-for="(item, index) in subTitle"
      :key="index"
      href="#"
      class="text-[12px] uppercase font-semibold text-gray-400 hover:text-black mb:hidden mmb:block"
    >
      {{ item }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
    require: true,
  },
  subTitle: {
    type: Array,
    default: () => [],
    require: true,
  },
})
</script>
