<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <itemNews
      class="pb-5"
      author="FASHION"
      title="TikTok’s latest trending beauty filter returns users to their younger selves"
      image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-600x400.jpg"
      link="tiktok’s-latest-trending-beauty-filter-returns-users-to-their-younger-selves"
      :is-derection-row="false"
      :is-show-author="false"
    />
    <nuxt-link
      to="/news/seo-copywriting:-how-to-write-content-for-people-and-optimize-for-google"
      class="block py-4 border-t hover:text-sky-500"
    >
      SEO Copywriting: How to Write Content For People and Optimize For Google
    </nuxt-link>
    <nuxt-link
      to="/news/9-ways-to-engage-your-customers-with-instagram-highlights"
      class="block py-4 border-t hover:text-sky-500"
    >
      9 Ways to Engage Your Customers With Instagram Highlights
    </nuxt-link>
    <nuxt-link
      to="/news/a-starter-guide-to-google-ads-manager-accounts"
      class="block py-4 border-t hover:text-sky-500"
    >
      A Starter Guide to Google Ads Manager Accounts
    </nuxt-link>
    <nuxt-link
      to="/news/seo-copywriting:-how-to-write-content-for-people-and-optimize-for-google"
      class="block py-4 border-t hover:text-sky-500"
    >
      SEO Copywriting: How to Write Content For People and Optimize For Google
    </nuxt-link>
    <nuxt-link
      to="/news/25-marketing-books-you-should-be-reading"
      class="block py-4 border-t hover:text-sky-500"
    >
      25 Marketing Books You Should Be Reading
    </nuxt-link>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>
