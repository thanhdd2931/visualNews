<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tb:leading-[1.2] lt:leading-normal">
    <slot></slot>
    <itemNews
      :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/solar-panels_EFYB8VJXNT-600x400.jpg'"
      :title="'Why Apple Vision Pro’s $3,499 Price Makes More Sense Than You Think'"
      :is-derection-row="false"
      :is-show-author="false"
      max-height="h-[160px]"
    />

    <div class="mt-4">
      <p class="mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
        The 6 biggest iOS 17 features that Apple stole from Android Digital
        Trends
      </p>
      <p class="mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
        9 Ways to Engage Your Customers With Instagram Highlights
      </p>
      <p class="mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
        A Starter Guide to Google Ads Manager Accounts
      </p>
      <p class="mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
        What Are Influencer Engagement Marketplaces (and How to Use)
      </p>
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>