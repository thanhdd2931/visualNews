<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="pb-5 pt-7 border-b">
      <itemNews
        :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social-600x400.jpg'"
        :title="'Reddit communities go private to protest pricing plan for apps'"
        author=""
        :is-derection-row="false"
        :is-show-author="false"
        max-height="h-[120px]"
      />
    </div>
    <div class="py-5 border-b">
      <itemNews
        :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/ins-600x400.jpg'"
        :title="'9 Ways to Engage Your Customers With Instagram Highlights'"
        author=""
        :is-derection-row="false"
        :is-show-author="false"
        max-height="h-[120px]"
      />
    </div>
    <div class="py-5">
      <itemNews
        :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/google-600x400.jpg'"
        :title="'The 10-Step Guide to Creating a Profitable AdWords Campaign'"
        author=""
        :is-derection-row="false"
        :is-show-author="false"
        max-height="h-[120px]"
      />
    </div>
    <div class="mt-3 mb-8">
      <img
        src="https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/300x250.png"
        alt="image"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>