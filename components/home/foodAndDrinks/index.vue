<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-4 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        class="pb-5"
        author="FOOD"
        title="The German couple who moved to Italy and opened a pizza restaurant"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/pizza-slice_OM0PRGTSEV-600x400.jpg"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
      <itemNews
        class="pb-5"
        author="FOOD"
        title="Tokyo ramen shop bans customers from using their phones while eating"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/noodles-cooking_30DIV2QY3M-600x400.jpg"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
      <itemNews
        class="pb-5"
        author="FOOD"
        title="Best rice dishes: 20 delicious specialties from around the world"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/paella-rice_T3JTA2VN26-600x400.jpg"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
      <itemNews
        class="pb-5"
        author="FOOD"
        title="This savory Mexican dish made with vanilla is a first for Eva Longoria"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/couple-food_20HXQ0Y5YI-600x400.jpg"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>
