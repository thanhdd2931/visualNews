<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="bg-black text-white mt-[35px] py-[35px] text-[14px]">
    <div
      class="llt:max-w-[1240px] llt:px-0 mb:px-[33px] mx-auto grid tb:grid-cols-4 mb:grid-cols-1 tb:gap-6 border-b-[0.5px] border-gray-500 pb-8"
    >
      <!-- about -->
      <div class="flex flex-col items-start gap-y-6 mb:mb-8">
        <p class="uppercase font-bold">about us</p>
        <p>
          A block theme is a WordPress theme with templates entirely composed of
          blocks. Therefore, in addition to the content of different post types
          (pages, posts, etc.), the block editor can also be used to edit all
          areas of the website. Twitter Facebook Instagram Dribbble LinkedIn
        </p>
        <div
          class="flex flex-wrap justify-between items-center gap-[10px] text-white"
        >
          <!-- twitter -->
          <div class="hover:scale-110 cursor-pointer">
            <iconTwitter :width="20" :height="20" />
          </div>
          <!-- fb -->
          <div class="hover:scale-110 cursor-pointer">
            <iconFacebook :width="20" :height="20" />
          </div>
          <!-- ytb -->
          <div class="hover:scale-110 cursor-pointer">
            <iconYoutube :width="20" :height="20" />
          </div>
          <!-- linked -->
          <div class="hover:scale-110 cursor-pointer">
            <iconLinkedIn :width="20" :height="20" />
          </div>
          <!-- Dribbble -->
          <div class="hover:scale-110 cursor-pointer">
            <iconDribbble :width="20" :height="20" />
          </div>
          <!-- instagram -->
          <div class="hover:scale-110 cursor-pointer">
            <iconInstagram :width="20" :height="20" />
          </div>
        </div>
      </div>
      <!-- category -->
      <div class="flex flex-col items-start mb:mb-8">
        <p class="uppercase font-bold pb-[20px]">category name</p>
        <div class="flex flex-col justify-start items-start gap-4 w-full">
          <div class="w-full">
            <div class="float-left mr-[15px]">
              <img
                class="object-cover w-[90px] h-[60px]"
                src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-600x400.jpg"
                alt="image"
              />
            </div>
            <a
              href="#"
              class="font-semibold leading-[1.2] block hover:text-sky-500 text-[13px]"
              >TikTok’s latest trending beauty filter returns users to their
              younger selves</a
            >
          </div>

          <div class="w-full">
            <div class="float-left mr-[15px]">
              <img
                class="object-cover w-[90px] h-[60px]"
                src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes-600x400.jpg"
                alt="image"
              />
            </div>
            <a
              href="#"
              class="font-semibold leading-[1.2] block hover:text-sky-500 text-[13px]"
              >The best smart glasses to buy now, according to experts</a
            >
          </div>

          <div class="w-full">
            <div class="float-left mr-[15px]">
              <img
                class="object-cover w-[90px] h-[60px]"
                src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt-600x400.jpg"
                alt="image"
              />
            </div>
            <a
              href="#"
              class="font-semibold leading-[1.2] block hover:text-sky-500 text-[13px]"
              >The best wrinkle-free travel clothes to pack for your summer
              vacation</a
            >
          </div>
        </div>
      </div>

      <!-- category name -->
      <div class="flex flex-col items-start mb:mb-8">
        <p class="uppercase font-bold pb-[20px]">category name</p>
        <div class="flex flex-col justify-start items-start gap-4 w-full">
          <div class="w-full">
            <div class="float-left mr-[15px]">
              <img
                class="object-cover w-[90px] h-[60px]"
                src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/solar-panels_EFYB8VJXNT-600x400.jpg"
                alt="image"
              />
            </div>
            <a
              href="#"
              class="font-semibold leading-[1.2] block hover:text-sky-500 text-[13px]"
              >Why Apple Vision Pro’s $3,499 Price Makes More Sense Than You
              Think</a
            >
          </div>
          <div class="w-full">
            <div class="float-left mr-[15px]">
              <img
                class="object-cover w-[90px] h-[60px]"
                src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/ins-600x400.jpg"
                alt="image"
              />
            </div>
            <a
              href="#"
              class="font-semibold leading-[1.2] block hover:text-sky-500 text-[13px]"
              >9 Ways to Engage Your Customers With Instagram Highlights</a
            >
          </div>
          <div class="w-full">
            <div class="float-left mr-[15px]">
              <img
                class="object-cover w-[90px] h-[60px]"
                src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-600x400.jpg"
                alt="image"
              />
            </div>
            <a
              href="#"
              class="font-semibold leading-[1.2] block hover:text-sky-500 text-[13px]"
              >TikTok’s latest trending beauty filter returns users to their
              younger selves</a
            >
          </div>
        </div>
      </div>

      <!-- support -->
      <div class="flex flex-col items-start mb:mb-8">
        <p class="uppercase font-bold pb-[20px]">support</p>
        <p class="mb-[10px] text-[14px] cursor-pointer hover:text-sky-600">
          Corporate Membership
        </p>
        <p class="mb-[10px] text-[14px] cursor-pointer hover:text-sky-600">
          Publish Your Book
        </p>
        <p class="mb-[10px] text-[14px] cursor-pointer hover:text-sky-600">
          Submit An Article
        </p>
        <p class="mb-[10px] text-[14px] cursor-pointer hover:text-sky-600">
          Advertise
        </p>
        <p class="mb-[10px] text-[14px] cursor-pointer hover:text-sky-600">
          Community Forum
        </p>
        <p class="mb-[10px] text-[14px] cursor-pointer hover:text-sky-600">
          Privacy Policy
        </p>
      </div>
    </div>

    <div class="mt-5 flex flex-col justify-center items-center gap-8">
      <div
        class="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 font-[500]"
      >
        <a
          href="#"
          class="uppercase text-[11px] cursor-pointer hover:text-sky-600"
          >about</a
        >
        <a
          href="#"
          class="uppercase text-[11px] cursor-pointer hover:text-sky-600"
          >contact</a
        >
        <a
          href="#"
          class="uppercase text-[11px] cursor-pointer hover:text-sky-600"
          >fullwidth page</a
        >
        <a
          href="#"
          class="uppercase text-[11px] cursor-pointer hover:text-sky-600"
          >submit acticle</a
        >
        <a
          href="#"
          class="uppercase text-[11px] cursor-pointer hover:text-sky-600"
          >buy theme</a
        >
      </div>
      <div class="text-center text-[11px]">
        <span class="uppercase text-[11px] cursor-pointer hover:text-sky-600"
          >wordpress theme</span
        >
        BY
        <span class="uppercase text-[11px] cursor-pointer hover:text-sky-600"
          >wpenjoy</span
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
import iconFacebook from '~/components/icons/facebook.vue'
import iconTwitter from '~/components/icons/twitter.vue'
import iconYoutube from '~/components/icons/youtube.vue'
import iconLinkedIn from '~/components/icons/linkedin.vue'
import iconDribbble from '~/components/icons/dribbble.vue'
import iconInstagram from '~/components/icons/instagram.vue'
</script>