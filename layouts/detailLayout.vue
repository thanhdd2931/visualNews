<template>
  <div>
    <compHeader></compHeader>
    <div
      class="llt:max-w-[1240px] mx-auto llt:px-0 mb:px-[10px] tb:grid tb:grid-cols-4 gap-8"
    >
      <!-- left -->
      <div class="col-span-3">
        <slot></slot>
      </div>

      <!-- right -->
      <div class="col-span-1">
        <!-- search -->
        <div class="bg-white flex justify-start items-center">
          <div class="relative text-sky-800 max-h-[40px] leading-[40px] w-full">
            <input
              ref="input"
              v-model="searchValue"
              type="text"
              placeholder="Search"
              class="max-h-[40px] w-full block pl-[15px] pr-[31px] py-[7px] bg-[#f5f5f5] outline-none placeholder-black text-[#222] text-[14px]"
            />
            <div
              v-if="searchValue != ''"
              class="absolute top-[50%] right-4 translate-y-[-50%]"
              @click="deleteSearchValue()"
            >
              <iconClose :width="16" :height="16" />
            </div>
          </div>
          <button
            class="bg-sky-500 text-white font-semibold max-w-[40px] max-h-[40px] p-3 flex justify-center items-center"
          >
            <iconSearch :width="16" :height="16"></iconSearch>
          </button>
        </div>

        <div class="mt-8">
          <img
            src="https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/300x250.png"
            alt="image"
          />
        </div>

        <!-- follow us -->
        <div class="mt-8">
          <compFollowUs>
            <titleHome title="follow us" :is-follow-us="true"/>
          </compFollowUs>
        </div>

        <!-- advertising -->
        <div class="mt-8">
          <compCategoryName>
            <titleHome title="category name" :is-follow-us="true"/>
          </compCategoryName>
        </div>
        <!-- recent posts -->
        <div class="mt-8">
          <compRecentPosts>
            <titleHome title="recent posts" :is-follow-us="true"/>
          </compRecentPosts>
        </div>
        <div class="mt-8">
          <compTag>
            <titleHome title="tag" :is-follow-us="true"/>
          </compTag>
        </div>
      </div>
    </div>
    <compFooter></compFooter>

    <!-- scroll to top-->
    <div v-if="scroolXY.y > 200" class="fixed bottom-[10px] right-[10px]">
      <button
        class="bg-[#0099e5] text-white text-[11px] w-[30px] h-[30px] leading-[30px] transition-all flex justify-center items-center"
        @click="scrollToTop"
      >
        <iconArrowUp :width="12" :height="12"></iconArrowUp>
      </button>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from 'vue'
import compHeader from '~/components/header'
import compFooter from '~/components/footer'
import iconSearch from '~/components/icons/search.vue'
import iconClose from '~/components/icons/close.vue'
import compFollowUs from '~/components/home/followUs'
import titleHome from '~/components/home/title'
import compCategoryName from '~/components/categoryName'
import compRecentPosts from '~/components/recentPosts'
import compTag from '~/components/tag'
import iconArrowUp from '~/components/icons/arrowup.vue'
import arrayDataRoot from '~/data/news.json'

const searchValue = ref('')
const input = ref(null)

// const arrayDataRoot = ref([
//   {
//     category: ['advertising'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social.jpg',
//     title: 'Reddit communities go private to protest pricing plan for apps',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['advertising', 'blogging', 'marketing', 'seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/ins-600x400.jpg',
//     title: '9 Ways to Engage Your Customers With Instagram Highlights',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['advertising', 'blogging', 'marketing', 'seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/google-600x400.jpg',
//     title: 'The 10-Step Guide to Creating a Profitable AdWords Campaign',
//     author: 'John Doe',
//     link: converTitleToUrl(
//       'The 10-Step Guide to Creating a Profitable AdWords Campaign'
//     ),
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: [
//       'advertising',
//       'food',
//       'lifestyle',
//       'marketing',
//       'social media',
//       'seo',
//       'travel',
//       'web design',
//     ],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/typing-working-600x400.jpeg',
//     title: 'Best Business Process Management Software',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: [
//       'advertising',
//       'blogging',
//       'food',
//       'lifestyle',
//       'marketing',
//       'social media',
//       'seo',
//       'travel',
//       'web design',
//     ],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/family-bathroom-600x400.jpeg',
//     title: 'How to Use Amazon Attribution For Ad Campaigns',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: [
//       'advertising',
//       'business',
//       'food',
//       'lifestyle',
//       'social media',
//       'seo',
//       'travel',
//       'web design',
//     ],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/office-supplies-600x400.jpeg',
//     title: 'How to Create the Perfect H1 Tag for SEO',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: [
//       'advertising',
//       'blogging',
//       'business',
//       'fashion',
//       'food',
//       'lifestyle',
//       'social media',
//       'travel',
//       'web design',
//     ],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/office-supplies2-600x400.jpeg',
//     title: '10 Great Testimonial Examples From Landing Pages',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: [
//       'advertising',
//       'blogging',
//       'business',
//       'fashion',
//       'food',
//       'lifestyle',
//       'marketing',
//       'seo',
//       'social media',
//       'travel',
//       'web design',
//     ],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/colored-pastels-600x400.jpeg',
//     title: 'How to Convert Blog Readers Into Customers',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: [
//       'advertising',
//       'blogging',
//       'business',
//       'fashion',
//       'food',
//       'lifestyle',
//       'marketing',
//       'seo',
//       'social media',
//       'travel',
//       'web design',
//     ],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/apple-iphone-600x400.jpeg',
//     title: 'How to Use the LinkedIn Marketplace as a Freelancer',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: [
//       'advertising',
//       'blogging',
//       'business',
//       'fashion',
//       'food',
//       'lifestyle',
//       'marketing',
//       'seo',
//       'social media',
//       'travel',
//       'web design',
//     ],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/business-working-600x400.jpeg',
//     title: 'How to Use Google’s Call-Only Ads to Send Profits Soaring',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: [
//       'advertising',
//       'blogging',
//       'business',
//       'fashion',
//       'food',
//       'lifestyle',
//       'marketing',
//       'news',
//       'seo',
//       'social media',
//       'technology',
//       'travel',
//       'web design',
//     ],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/workspace-office-600x400.jpeg',
//     title: '4 Reasons Why You Should Get AdWords Certified',
//     author: 'John Doe',
//     date: 'June 15, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },

//   {
//     category: ['blogging', 'technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/solar-panels_EFYB8VJXNT.jpg',
//     title: 'Why Apple Vision Pro’s $3,499 Price Makes More Sense Than You Think',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['blogging', 'marketing', 'technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/solar-panels_EFYB8VJXNT.jpg',
//     title: 'The 6 biggest iOS 17 features that Apple stole from Android Digital Trends',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['blogging', 'marketing', 'technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/grass-field-600x400.jpeg',
//     title: 'What Are Influencer Engagement Marketplaces (and How to Use)',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['blogging', 'marketing', 'technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/saulo-mohana-600x400.jpg',
//     title: 'The job market enters a new phase as the Great Resignation ends',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['business'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adem-ay-Tk9m_HP4rgQ-600x400.jpg',
//     title: 'Musk is no longer the CEO of Twitter. Linda Yaccarino officially starts in role',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['business'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/jason-goodman-600x400.jpg',
//     title: 'Deciding what to do when your employer changes the rules on remote work',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['business'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/google-deepmind-600x400.jpg',
//     title: '42% of CEOs say AI could destroy humanity in five to ten years',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['business'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/bady-abbas-c4XoMGxfsVU-600x400.jpg',
//     title: 'Why Hong Kong can’t afford to keep its currency pegged to the US dollar',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['fashion'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes.jpg',
//     title: 'The best smart glasses to buy now, according to experts',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['fashion'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt-600x400.jpg',
//     title: 'The best wrinkle-free travel clothes to pack for your summer vacation',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['fashion'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/man-600x400.jpg',
//     title: 'The 23 best men’s shorts for the summer, according to style experts',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['fashion'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adidas-600x400.jpg',
//     title: 'Adidas vs. Hoka: We put these favorite running shoes to the test',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['fashion', 'technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/computer-office_XGXORJWZIX-600x400.jpg',
//     title: 'The New Age of Hiring: AI Is Changing the Game for Job Seekers',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['fashion', 'technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/iphone-device_KRMOSAYCZ4-600x400.jpg',
//     title: 'Don’t Install the iOS 17 Developer Beta on Your iPhone. Here’s Why',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//    {
//     category: ['food'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/pizza-slice_OM0PRGTSEV-600x400.jpg',
//     title: 'The German couple who moved to Italy and opened a pizza restaurant',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['food'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/noodles-cooking_30DIV2QY3M-600x400.jpg',
//     title: 'Tokyo ramen shop bans customers from using their phones while eating',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['food'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/couple-food_20HXQ0Y5YI-600x400.jpg',
//     title: 'Best rice dishes: 20 delicious specialties from around the world',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },

//   {
//     category: ['lifestyle'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-600x400.jpg',
//     title: 'TikTok’s latest trending beauty filter returns users to their younger selves',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['lifestyle'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/gucci-600x400.jpg',
//     title: 'Gucci Visions: An exhibit that takes you on a futuristic journey into the past',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['lifestyle'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/omega-600x400.jpg',
//     title: 'Omega says ex-employees responsible for $3 million fake Speedmaster watch',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },

//   {
//     category: ['marketing', 'seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/education-business-600x400.jpeg',
//     title: 'SEO Copywriting: How to Write Content For People and Optimize For Google',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['marketing', 'seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/coastal-landscape-600x400.jpeg',
//     title: '25 Marketing Books You Should Be Reading',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['marketing', 'seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/sun-nature-600x400.jpeg',
//     title: 'How to Use Thought Leadership Marketing With Paid Ads',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['marketing', 'seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/Brick-Wall-building-600x400.jpeg',
//     title: 'How to Use LinkedIn Insights in an Actionable Way',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['marketing', 'seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/analytics-charts-600x400.jpeg',
//     title: '10 Key Strategies That You Must Learn From Apple’s Marketing',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['seo', 'technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/camera-object_GJ8ZDV9GVE-600x400.jpg',
//     title: '5 Things I Won’t Be Doing in Apple’s $3,500 Vision Pro Headset',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/wood-texture-600x400.jpeg',
//     title: 'What is IaaS? How Does it Affect Your e-Commerce Site?',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/bird-perched-600x400.jpeg',
//     title: 'Blog SEO: How to Search Engine Optimize Your Blog Content',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['seo', 'web design'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2021/04/board-room-business-600x400.jpeg',
//     title: 'YouTube SEO: 25 Tactics for Getting More Views, Subscribers, and Traffic',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['social media'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/facebook-600x400.jpg',
//     title: 'Georgia man sues Facebook over losing account access and wins',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['social media'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/youtube-app-600x400.jpg',
//     title: 'YouTube will stop removing false claims about 2020 election fraud',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['social media'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/twitter-600x400.jpeg',
//     title: 'Some Twitter users say they’ve been locked out of their accounts',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//    {
//     category: ['technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/motivation-hustle_FKT0RM1QHW-600x400.jpg',
//     title: 'Toyota claims its future EVs will have a range over 600 miles',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/iphone-blue_7RJZFHBGPT-600x400.jpg',
//     title: 'Your iPhone and Other Apple Products Are About to Get Easier to Use',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/browsing-smartphone_48PPXWVY5M-600x400.jpg',
//     title: 'iPhone 15: All the Major Rumors on Apple’s Next iPhone',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/mac-laptop_QUQXLZK1WL-600x400.jpg',
//     title: 'Apple MacBook Air 15-Inch Review: The Best Portable Big Display Choice',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['technology'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/laptop-work_8Q2MXCDVMY-600x400.jpg',
//     title: 'I’ve Been Using Google’s New AI Search. Here’s What I’ve Learned',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
  
//   {
//     category: ['travel'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431-600x400.jpg',
//     title: 'World’s Best 25 Airlines for 2023 Revealed by Airline Ratings',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['travel'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/beautiful-ocean_XLSPFYQGAK-600x400.jpg',
//     title: 'The Italian beaches putting a daily cap on visitors this summer',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['travel'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/water-canal_HZ0FDEESSC-600x400.jpg',
//     title: 'Venice authorities discover why canal turned fluorescent green',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
//   {
//     category: ['travel'],
//     image:
//       'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/sunrise-sunset_XSTO5645BM-600x400.jpg',
//     title: 'Manhattanhenge: Where to see New York City’s special sunset show',
//     author: 'John Doe',
//     date: 'June 14, 2023',
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
// ])

provide('arrayDataRoot', arrayDataRoot)

const deleteSearchValue = () => {
  if (input.value) {
    searchValue.value = ''
    input.value.focus()
  }
}

// scroll to top

const scroolXY = ref({
  x: 0,
  y: 0,
})

window.addEventListener(
  'scroll',
  function (event) {
    scroolXY.value.x = this.scrollX
    scroolXY.value.y = this.scrollY
  },
  false
)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

// const converTitleToUrl = (title) => {
//   return title.toLowerCase().replaceAll(' ', '-')
// }

// const logArr = () =>{
//   console.log(arrayDataRoot.value.map(item => ({
//     ...item,
//     link: converTitleToUrl(item.title)
//   })));
// }
// logArr()
</script>