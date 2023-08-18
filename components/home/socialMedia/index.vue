<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-3 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        v-for="(item, index) in arrData"
        :key="index"
        class="pb-5"
        category="social media"
        link-category="social-media"
        :title="item.title"
        :image="item.image"
        :link="item.link"
        :is-derection-row="false"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
const arrData = [
  {
    category: ['social media'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/facebook-600x400.jpg',
    title: 'Georgia man sues Facebook over losing account access and wins',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'georgia-man-sues-facebook-over-losing-account-access-and-wins',
  },
  {
    category: ['social media'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/youtube-app-600x400.jpg',
    title: 'YouTube will stop removing false claims about 2020 election fraud',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'youtube-will-stop-removing-false-claims-about-2020-election-fraud',
  },
  {
    category: ['social media'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/twitter-600x400.jpeg',
    title: 'Some Twitter users say they’ve been locked out of their accounts',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'some-twitter-users-say-they’ve-been-locked-out-of-their-accounts',
  },
]
</script>
