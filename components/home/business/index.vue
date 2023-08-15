<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <slot></slot>
    <div class="grid mmb:grid-cols-3 mb:grid-cols-1 gap-6 mt-7">
      <itemNews
        class="pb-5"
        author="BUSINESS"
        title="The job market enters a new phase as the Great Resignation ends"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/saulo-mohana-600x400.jpg"
        :is-derection-row="false"
      />
      <itemNews
        class="pb-5"
        author="BUSINESS"
        title="Musk is no longer the CEO of Twitter. Linda Yaccarino officially starts in role"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adem-ay-Tk9m_HP4rgQ-600x400.jpg"
        :is-derection-row="false"
      />
      <itemNews
        class="pb-5"
        author="BUSINESS"
        title="Deciding what to do when your employer changes the rules on remote work"
        image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/jason-goodman-600x400.jpg"
        :is-derection-row="false"
      />
    </div>
  </div>
</template>
<script setup>
import itemNews from '~/components/home/itemNews'
</script>
