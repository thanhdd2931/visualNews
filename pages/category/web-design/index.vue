<template>
  <detailLayout>
    <div>
      <compCategory
        title="Web Design"
        sub-title="A simple description for this category"
        :array-data="arrData"
      ></compCategory>
    </div>
  </detailLayout>
</template>

<script setup>
import detailLayout from '~/layouts/detailLayout.vue'
import compCategory from '~/components/category'

const arrData = [
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social.jpg",
    title: 'Reddit communities go private to protest pricing plan for apps',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/ins-600x400.jpg",
    title: '9 Ways to Engage Your Customers With Instagram Highlights',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/google-600x400.jpg",
    title: 'The 10-Step Guide to Creating a Profitable AdWords Campaign',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/typing-working-600x400.jpeg",
    title: 'Best Business Process Management Software',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/family-bathroom-600x400.jpeg",
    title: 'How to Use Amazon Attribution For Ad Campaigns',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/office-supplies-600x400.jpeg",
    title: 'How to Create the Perfect H1 Tag for SEO',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/office-supplies2-600x400.jpeg",
    title: '10 Great Testimonial Examples From Landing Pages',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/colored-pastels-600x400.jpeg",
    title: 'How to Convert Blog Readers Into Customers',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/apple-iphone-600x400.jpeg",
    title: 'How to Use the LinkedIn Marketplace as a Freelancer',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/business-working-600x400.jpeg",
    title: 'How to Use Google’s Call-Only Ads to Send Profits Soaring',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: "https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/workspace-office-600x400.jpeg",
    title: '4 Reasons Why You Should Get AdWords Certified',
    author: 'John Doe',
    date: 'June 15, 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]
</script>