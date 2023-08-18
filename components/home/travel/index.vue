<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-4 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        v-for="(item, index) in arrData"
        :key="index"
        category="travel"
        link-category="travel"
        :title="item.title"
        :link="item.link"
        :image="item.image"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
const arrData = [
  {
    category: ['travel'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431-600x400.jpg',
    title: 'World’s Best 25 Airlines for 2023 Revealed by Airline Ratings',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'world’s-best-25-airlines-for-2023-revealed-by-airline-ratings',
  },
  {
    category: ['travel'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/beautiful-ocean_XLSPFYQGAK-600x400.jpg',
    title: 'The Italian beaches putting a daily cap on visitors this summer',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'the-italian-beaches-putting-a-daily-cap-on-visitors-this-summer',
  },
  {
    category: ['travel'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/water-canal_HZ0FDEESSC-600x400.jpg',
    title: 'Venice authorities discover why canal turned fluorescent green',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'venice-authorities-discover-why-canal-turned-fluorescent-green',
  },
  {
    category: ['travel'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/sunrise-sunset_XSTO5645BM-600x400.jpg',
    title: 'Manhattanhenge: Where to see New York City’s special sunset show',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'manhattanhenge:-where-to-see-new-york-city’s-special-sunset-show',
  },
]
</script>
