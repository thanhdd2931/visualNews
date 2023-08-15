<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <itemNews
      class="pb-5"
      author="FASHION"
      title="TikTok’s latest trending beauty filter returns users to their younger selves"
      image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-600x400.jpg"
      :is-derection-row="false"
      :is-show-author="false"
    />
    <p class="py-4 border-t hover:text-sky-500">
      SEO Copywriting: How to Write Content For People and Optimize For Google
    </p>
    <p class="py-4 border-t hover:text-sky-500">
      9 Ways to Engage Your Customers With Instagram Highlights
    </p>
    <p class="py-4 border-t hover:text-sky-500">
      A Starter Guide to Google Ads Manager Accounts
    </p>
    <p class="py-4 border-t hover:text-sky-500">
      SEO Copywriting: How to Write Content For People and Optimize For Google
    </p>
    <p class="py-4 border-t hover:text-sky-500">
      25 Marketing Books You Should Be Reading
    </p>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>
