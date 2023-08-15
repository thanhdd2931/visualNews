<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-3 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        class="pb-5"
        author="SOCIAL MEDIA"
        title="Georgia man sues Facebook over losing account access and wins"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/facebook-600x400.jpg"
        :is-derection-row="false"
      />
      <itemNews
        class="pb-5"
        author="SOCIAL MEDIA"
        title="YouTube will stop removing false claims about 2020 election fraud"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/youtube-app-600x400.jpg"
        :is-derection-row="false"
      />
      <itemNews
        class="pb-5"
        author="SOCIAL MEDIA"
        title="Some Twitter users say they’ve been locked out of their accounts"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/twitter-600x400.jpeg"
        :is-derection-row="false"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>
