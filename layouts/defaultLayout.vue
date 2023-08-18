<template>
  <div>
    <compHeader></compHeader>
    <slot></slot>
    <compFooter></compFooter>
    <div v-if="scroolXY.y > 200" class="fixed bottom-[10px] right-[10px]">
      <button
        class="bg-[#0099e5] text-white text-[11px] w-[30px] h-[30px] leading-[30px] transition-all flex justify-center items-center"
        @click="scrollToTop"
      >
        <iconArrowUp :width="12" :height="12"></iconArrowUp>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import compHeader from '~/components/header'
import compFooter from '~/components/footer'
import iconArrowUp from '~/components/icons/arrowup.vue'

const scroolXY = ref({
    x: 0,
    y: 0
})

window.addEventListener(
  'scroll',
  function (event) {
    scroolXY.value.x = this.scrollX
    scroolXY.value.y = this.scrollY
  },
  false
)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
</script>