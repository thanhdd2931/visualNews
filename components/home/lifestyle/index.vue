<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-3 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        class="pb-5"
        author="LIFESTYLE"
        title="TikTok’s latest trending beauty filter returns users to their younger selves"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-600x400.jpg"
        :is-derection-row="false"
      />
      <itemNews
        class="pb-5"
        author="LIFESTYLE"
        title="Gucci Visions: An exhibit that takes you on a futuristic journey into the past"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/gucci-600x400.jpg"
        :is-derection-row="false"
      />
      <itemNews
        class="pb-5"
        author="LIFESTYLE"
        title="Omega says ex-employees responsible for $3 million fake Speedmaster watch"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/omega-600x400.jpg"
        :is-derection-row="false"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>
