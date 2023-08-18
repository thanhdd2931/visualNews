<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-4 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        v-for="(item, index) in arrData"
        :key="index"
        category="food"
        link-category="food"
        :title="item.title"
        :link="item.link"
        :image="item.image"
        :is-derection-row="false"
        :back-ground="`bg-gray-50 h-full`"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
const arrData = [
  {
    category: ['food'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/pizza-slice_OM0PRGTSEV-600x400.jpg',
    title: 'The German couple who moved to Italy and opened a pizza restaurant',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'the-german-couple-who-moved-to-italy-and-opened-a-pizza-restaurant',
  },
  {
    category: ['food'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/noodles-cooking_30DIV2QY3M-600x400.jpg',
    title:
      'Tokyo ramen shop bans customers from using their phones while eating',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'tokyo-ramen-shop-bans-customers-from-using-their-phones-while-eating',
  },
  {
    category: ['food'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/paella-rice_T3JTA2VN26-600x400.jpg',
    title: 'Best rice dishes: 20 delicious specialties from around the world',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'best-rice-dishes:-20-delicious-specialties-from-around-the-world',
  },
  {
    category: ['food'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/couple-food_20HXQ0Y5YI.jpg',
    title:
      'This savory Mexican dish made with vanilla is a first for Eva Longoria',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'this-savory-mexican-dish-made-with-vanilla-is-a-first-for-eva-longoria',
  },
]
</script>
