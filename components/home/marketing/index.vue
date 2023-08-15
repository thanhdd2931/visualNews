<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <itemNews
      class="pb-5"
      author="FASHION"
      title="The 6 biggest iOS 17 features that Apple stole from Android Digital Trends"
      image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/apple-600x400.jpg"
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
