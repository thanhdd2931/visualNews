<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="pb-[17px] border-b">
      <h1 class="font-bold text-[27px]">{{ title }}</h1>
      <p class="text-[#999] text-[14px] mt-[10px]">
        {{ subTitle }}
      </p>
    </div>
    <div
      v-for="item in arrView(arrayData, tab, title)"
      :key="item.id"
      class="tb:py-8 mb:py-4 flex gap-[21.250px] border-b"
    >
      <div class="tb:w-[260px] mb:w-[120px] mmb:w-[170px] shrink-0">
        <img :src="item.image" alt="image" />
      </div>

      <div>
        <nuxt-link :to="`/news/${item.link}`" class="block tb:text-2xl font-bold mb-[10px] hover:text-sky-500 mb:text-[16px] mb:leading-[1.2]">
          {{ item.title }}
        </nuxt-link>

        <p class="text-[13px] text-[#999] mmb:block mb:hidden">
          <nuxt-link to="#" class="hover:text-black capitalize">{{ item.category[0] }}</nuxt-link> ·
          By
          <nuxt-link to="#" class="hover:text-black">{{
            item.author
          }}</nuxt-link>
          - {{ item.date }}
        </p>

        <p class="text-base leading-[1.8] line-clamp-2 font-normal mb:hidden mmb:line-clamp-2">
          {{ item.desc }}
        </p>
      </div>
    </div>

    <div class="mb:mb-8 tb:mb-0">
      <div v-if="tab == 1" class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-[5px]">
          <button
            :class="`outline-none bg-[#f0f0f0] font-bold max-h-[32px] leading-[32px] text-[12px] px-3 hover:text-white hover:bg-[#0099e5] ${
              tab == 1 ? '!text-white !bg-[#0099e5]' : ''
            }`"
            @click="changeTab(1)"
          >
            1
          </button>
          <button
            :class="`outline-none bg-[#f0f0f0] font-bold max-h-[32px] leading-[32px] text-[12px] px-3 hover:text-white hover:bg-[#0099e5] ${
              tab == 2 ? '!text-white !bg-[#0099e5]' : ''
            }`"
            @click="changeTab(2)"
          >
            2
          </button>
        </div>
      
        <div>
          <button
            class="outline-none bg-[#f0f0f0] font-bold max-h-[32px] leading-[32px] text-[12px] px-3 hover:text-white hover:bg-[#0099e5]"
            @click="changeTab(tab + 1)"
          >
            NEXT
          </button>
        </div>
      </div>
      <div v-else class="flex justify-between items-center mt-8">
        <div>
          <button
            class="outline-none bg-[#f0f0f0] font-bold max-h-[32px] leading-[32px] text-[12px] px-3 hover:text-white hover:bg-[#0099e5]"
            @click="changeTab(tab - 1)"
          >
            PREVIOUS
          </button>
        </div>
      
        <div class="flex items-center gap-[5px]">
          <button
            :class="`outline-none bg-[#f0f0f0] font-bold max-h-[32px] leading-[32px] text-[12px] px-3 hover:text-white hover:bg-[#0099e5] ${
              tab == 1 ? '!text-white !bg-[#0099e5]' : ''
            }`"
            @click="changeTab(1)"
          >
            1
          </button>
          <button
            :class="`outline-none bg-[#f0f0f0] font-bold max-h-[32px] leading-[32px] text-[12px] px-3 hover:text-white hover:bg-[#0099e5] ${
              tab == 2 ? '!text-white !bg-[#0099e5]' : ''
            }`"
            @click="changeTab(2)"
          >
            2
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
})

// data
const tab = ref(1)
const arrayData = inject('arrayDataRoot')

// methods
const changeTab = (newTab) => {
  tab.value = newTab
}

const arrView = (arrayData, tab, title) => {
  const arrResult = arrayData.filter(item => item.category.includes(title.toLowerCase()))
  const index = (tab - 1) * 10
  return arrResult.slice(index, index * 10 + 10)
}
</script>

<script>
export default {
  data() {
    return {
      titleHeader: this?.title || 'VisualNews Pro'
    }
  },
  head(){
    return {
      title: `${this?.titleHeader} - VisualNews Pro` || 'Category'
    }
  },
}
</script>