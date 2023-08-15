<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <itemNews
      class="pb-5"
      author="FASHION"
      title="I’ve Been Using Google’s New AI Search. Here’s What I’ve Learned"
      image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/laptop-work_8Q2MXCDVMY-600x400.jpg"
      :is-derection-row="false"
      :is-show-author="false"
    />
    <a href="#" class="block py-4 border-t hover:text-sky-500">
      SEO Copywriting: How to Write Content For People and Optimize For Google
    </a>
    <a href="#" class="block py-4 border-t hover:text-sky-500">
      9 Ways to Engage Your Customers With Instagram Highlights
    </a>
    <a href="#" class="block py-4 border-t hover:text-sky-500">
      A Starter Guide to Google Ads Manager Accounts
    </a>
    <a href="#" class="block py-4 border-t hover:text-sky-500">
      SEO Copywriting: How to Write Content For People and Optimize For Google
    </a>
    <a href="#" class="block py-4 border-t hover:text-sky-500">
      25 Marketing Books You Should Be Reading
    </a>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>
