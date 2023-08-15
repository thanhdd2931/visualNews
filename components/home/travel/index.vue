<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-4 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        class="pb-5"
        author="TRAVEL"
        title="World’s Best 25 Airlines for 2023 Revealed by Airline Ratings"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431-600x400.jpg"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
      <itemNews
        class="pb-5"
        author="TRAVEL"
        title="The Italian beaches putting a daily cap on visitors this summer"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/beautiful-ocean_XLSPFYQGAK-600x400.jpg"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
      <itemNews
        class="pb-5"
        author="TRAVEL"
        title="Venice authorities discover why canal turned fluorescent green"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/water-canal_HZ0FDEESSC-600x400.jpg"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
      <itemNews
        class="pb-5"
        author="TRAVEL"
        title="Manhattanhenge: Where to see New York City’s special sunset show"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/sunrise-sunset_XSTO5645BM-600x400.jpg"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>
