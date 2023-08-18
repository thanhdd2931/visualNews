<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-3 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        v-for="(item, index) in arrData"
        :key="index"
        class="pb-5"
        category="business"
        link-category="business"
        :title="item.title"
        :image="item.image"
        :link="item.link"
        :is-derection-row="false"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
const arrData = [
  {
    category: ['blogging', 'marketing', 'technology'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/saulo-mohana-600x400.jpg',
    title: 'The job market enters a new phase as the Great Resignation ends',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'the-job-market-enters-a-new-phase-as-the-great-resignation-ends',
  },
  {
    category: ['business'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adem-ay-Tk9m_HP4rgQ-600x400.jpg',
    title:
      'Musk is no longer the CEO of Twitter. Linda Yaccarino officially starts in role',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'musk-is-no-longer-the-ceo-of-twitter.-linda-yaccarino-officially-starts-in-role',
  },
  {
    category: ['business'],
    image:
      'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/jason-goodman-600x400.jpg',
    title:
      'Deciding what to do when your employer changes the rules on remote work',
    author: 'John Doe',
    date: 'June 14, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'deciding-what-to-do-when-your-employer-changes-the-rules-on-remote-work',
  },
]
</script>
