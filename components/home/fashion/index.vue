<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="pb-5 pt-7 border-b">
      <itemNews
        author="fashion"
        :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes-600x400.jpg'"
        :title="'The best smart glasses to buy now, according to experts'"
        :is-fashion="true"
      />
    </div>
    <div class="py-5 border-b">
      <itemNews
        author="fashion"
        :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt-600x400.jpg'"
        :title="'The best wrinkle-free travel clothes to pack for your summer vacation'"
        :is-fashion="true"
      />
    </div>
    <div class="py-5 border-b">
      <itemNews
        author="fashion"
        :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/man-600x400.jpg'"
        :title="'The 23 best men’s shorts for the summer, according to style experts'"
        :is-fashion="true"
      />
    </div>
    <div class="py-5">
      <itemNews
        author="fashion"
        :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adidas-600x400.jpg'"
        :title="'Adidas vs. Hoka: We put these favorite running shoes to the test'"
        :is-fashion="true"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>