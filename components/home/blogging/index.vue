<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tb:leading-[1.2] lt:leading-normal">
    <slot></slot>
    <itemNews
    link="why-apple-vision-pro’s-$3,499-price-makes-more-sense-than-you-think"
      :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/solar-panels_EFYB8VJXNT-600x400.jpg'"
      :title="'Why Apple Vision Pro’s $3,499 Price Makes More Sense Than You Think'"
      :is-derection-row="false"
      :is-show-author="false"
      max-height="h-[160px]"
    />

    <div class="mt-4">
      <nuxt-link to="/news/the-6-biggest-ios-17-features-that-apple-stole-from-android-digital-trends" class="block mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
        The 6 biggest iOS 17 features that Apple stole from Android Digital
        Trends
      </nuxt-link>
      <nuxt-link to="/news/9-ways-to-engage-your-customers-with-instagram-highlights" class="block mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
        9 Ways to Engage Your Customers With Instagram Highlights
      </nuxt-link>
      <nuxt-link to="/news/a-starter-guide-to-google-ads-manager-accounts" class="block mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
        A Starter Guide to Google Ads Manager Accounts
      </nuxt-link>
      <nuxt-link to="/news/what-are-influencer-engagement-marketplaces-(and-how-to-use)" class="block mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
        What Are Influencer Engagement Marketplaces (and How to Use)
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>