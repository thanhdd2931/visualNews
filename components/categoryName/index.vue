<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <slot></slot>
      <div class="pb-5 pt-7 border-b">
        <itemNews
          :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/solar-panels_EFYB8VJXNT-600x400.jpg'"
          :title="'Why Apple Vision Pro’s $3,499 Price Makes More Sense Than You Think'"
          author=""
          :is-derection-row="false"
          :is-show-author="false"
          max-height="h-[120px]"
        />
      </div>
      <div class="py-5 border-b">
        <itemNews
          :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/apple-600x400.jpg'"
          :title="'The 6 biggest iOS 17 features that Apple stole from Android Digital Trends'"
          author=""
          :is-derection-row="false"
          :is-show-author="false"
          max-height="h-[120px]"
        />
      </div>
      <div class="pt-5">
        <itemNews
          :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/ins-600x400.jpg'"
          :title="'9 Ways to Engage Your Customers With Instagram Highlights'"
          author=""
          :is-derection-row="false"
          :is-show-author="false"
          max-height="h-[120px]"
        />
      </div>
    </div>
  </template>
  <script setup>
  import itemNews from '~/components/home/itemNews'
  </script>