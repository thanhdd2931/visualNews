<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-3 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        v-for="(item, index) in arrayData"
        :key="index"
        class="pb-5"
        category="lifestyle"
        link-category="lifestyle"
        :title="item.title"
        :image="item.image"
        :is-derection-row="false"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
const arrayData = [
  {
    category: ['lifestyle'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-600x400.jpg',
    title:
      'TikTok’s latest trending beauty filter returns users to their younger selves',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'tiktok’s-latest-trending-beauty-filter-returns-users-to-their-younger-selves',
  },
  {
    category: ['lifestyle'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/gucci-600x400.jpg',
    title:
      'Gucci Visions: An exhibit that takes you on a futuristic journey into the past',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'gucci-visions:-an-exhibit-that-takes-you-on-a-futuristic-journey-into-the-past',
  },
  {
    category: ['lifestyle'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/omega-600x400.jpg',
    title:
      'Omega says ex-employees responsible for $3 million fake Speedmaster watch',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'omega-says-ex-employees-responsible-for-$3-million-fake-speedmaster-watch',
  },
]
</script>
