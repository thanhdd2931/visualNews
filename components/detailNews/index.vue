<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="mb-6 flex flex-wrap items-center justify-start gap-[5px]">
      <nuxt-link
        v-for="(item, index) in newsItem.category"
        :key="index"
        class="inline-block px-2 py-[2px] text-[11px] uppercase font-medium bg-black text-white hover:bg-sky-500"
        :to="`/category/${item.replaceAll(' ', '-')}`"
      >
        {{ item }}
      </nuxt-link>
    </div>
    <h1 class="lt:text-[27px] tb:text-[24px] mb:text-[22px] font-bold mt-[10px]">
      {{ newsItem.title }}
    </h1>
    <div class="text-[13px] text-[#222] mt-[10px]">
      Post by
      <nuxt-link to="#" class="font-bold">{{ newsItem.author }}</nuxt-link> -
      {{ newsItem.date }}
    </div>

    <div class="mt-8">
      <figure>
        <img class="w-full object-cover" :src="newsItem.image" alt="image" />
      </figure>
      <p class="mt-8 text-[18px] leading-[1.6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p class="mt-8 text-[18px] leading-[1.6]">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p class="mt-8 text-[18px] leading-[1.6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p class="mt-8 text-[18px] leading-[1.6]">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p class="mt-8 text-[18px] leading-[1.6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p class="mt-8 text-[18px] leading-[1.6]">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p class="mt-8 text-[18px] leading-[1.6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p class="mt-8 text-[18px] leading-[1.6]">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <!-- tag -->
    <div class="mt-8">
      <div class="bg-[#f0f0f0] text-[#555] text-[13px] inline-block uppercase">
        <a href="#" class="inline-block py-[2px] px-2 text-[11px]">tag one</a>
      </div>
      <div class="bg-[#f0f0f0] text-[#555] text-[13px] inline-block uppercase">
        <a href="#" class="inline-block py-[2px] px-2 text-[11px]">tag two</a>
      </div>
    </div>

    <!-- auhthor -->
    <div class="p-6 mt-8 border">
      <div class="flex gap-[10px]">
        <img
          class="rounded-full w-6 h-auto"
          alt="image"
          src="https://gravatar.wpenjoy.com/avatar/aed1547d950cb2ba8534a6df5915786f?s=48&amp;d=mm&amp;r=g"
        />
        <span class="font-bold text-[#222] text-[17px]">John Doe</span>
      </div>
      <p class="mt-[10px]">
        Your introduction goes here. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </div>

    <!-- leave a Reply / Form-->
    <form class="mt-8">
      <h3 class="mt-[18px] font-bold text-lg">Leave a Reply</h3>
      <p class="mt-[17px] text-[17px] text-[#222]">
        Your email address will not be published. Required fields are marked *
      </p>

      <!-- cmt -->
      <div class="my-[17px] text-[17px]">
        <label for="cmt" class="mb-[0.25rem] leading-[1.6] block"
          >Comment *</label
        >
        <textarea
          id="cmt"
          class="p-[13.33px] w-full h-[120px] outline-none border m-[1px]"
        ></textarea>
      </div>
      <!-- name -->
      <div class="my-[17px] text-[17px]">
        <label for="name" class="mb-[0.25rem] leading-[1.6] block"
          >Name *</label
        >
        <input
          id="name"
          class="p-[13.33px] w-full outline-none border m-[1px]"
        />
      </div>
      <!-- email -->
      <div class="my-[17px] text-[17px]">
        <label for="email" class="mb-[0.25rem] leading-[1.6] block"
          >Email *</label
        >
        <input
          id="email"
          class="p-[13.33px] w-full outline-none border m-[1px]"
        />
      </div>
      <!-- website -->
      <div class="my-[17px] text-[17px]">
        <label for="website" class="mb-[0.25rem] leading-[1.6] block"
          >Website *</label
        >
        <input
          id="website"
          class="p-[13.33px] w-full outline-none border m-[1px]"
        />
      </div>

      <!-- checkbox -->
      <div class="mt-[17px]">
        <input id="checkbox" type="checkbox" class="mx-1 my-[3px]" />
        <label
          for="checkbox"
          class="break-words font-normal leading-[1.6] text-[17px]"
          >Save my name, email, and website in this browser for the next time I
          comment.</label
        >
      </div>

      <div class="my-[17px]">
        <input
          value="Post Comment"
          type="submit"
          class="cursor-pointer outline-none break-words inline-block text-center bg-[#0099e5] text-white text-[17px] py-[10px] px-[30px] leading-[1.5]"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  setup() {
    const arrayData = inject('arrayDataRoot')
    return {
      arrayData,
    }
  },
  data() {
    const newsItem = ref('abc')
    newsItem.value = this.arrayData.find(
      (item) => item.link === this.$route.params.slug
    )
    return {
      newsItem,
    }
  },
  head() {
    return {
      title: this?.newsItem?.title || 'undefined'
    }
  }
}
</script>