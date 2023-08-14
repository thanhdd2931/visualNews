<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contents">
    <div
      class="text-[12px] text-white bg-gradient-to-r from-[#0c91e3] to-[#8d4cce]"
    >
      <div
        class="lt:container mmb:w-full lt:px-0 mb:px-[10px] flex justify-between items-center mx-auto h-full"
      >
        <!-- icon MENU -->
        <div class="lt:hidden mb:block py-[10px]" @click="handleOnOffModalHeader(true)">
          <iconMenu />
        </div>

        <div class="lt:flex mb:hidden justify-start items-center gap-4">
          <a href="#" class="font-semibold block py-[10px]">About</a>
          <a href="#" class="font-semibold block py-[10px]">Contact</a>
          <a
            href="#"
            class="font-semibold py-[10px] flex justify-center items-center relative group"
          >
            <span>Full Width Page</span>
            <iconArrowDown :width="12" :height="12" />
            <div
              class="hidden group-hover:block absolute bottom-0 left-0 px-4 bg-white text-[#222] shadow-md translate-y-[100%] min-w-[200px]"
            >
              <p class="py-[10px] border-b">Sub Menu 1</p>
              <p class="py-[10px] border-b">Sub Menu 2</p>
              <p class="py-[10px]">Sub Menu 3</p>
            </div>
          </a>
          <a href="#" class="font-semibold block py-[10px]">Submit Article</a>
          <a href="#" class="font-semibold block py-[10px]">Buy Theme</a>
        </div>

        <div class="flex justify-center items-center gap-4 text-white">
          <!-- twitter -->
          <div class="hover:scale-110 cursor-pointer">
            <iconTwitter :width="16" :height="16" />
          </div>
          <!-- fb -->
          <div class="hover:scale-110 cursor-pointer">
            <iconFacebook :width="16" :height="16" />
          </div>
          <!-- ytb -->
          <div class="hover:scale-110 cursor-pointer">
            <iconYoutube :width="16" :height="16" />
          </div>
          <!-- linked -->
          <div class="hover:scale-110 cursor-pointer">
            <iconLinkedIn :width="16" :height="16" />
          </div>
          <!-- Dribbble -->
          <div class="hover:scale-110 cursor-pointer">
            <iconDribbble :width="16" :height="16" />
          </div>
          <!-- instagram -->
          <div class="hover:scale-110 cursor-pointer">
            <iconInstagram :width="16" :height="16" />
          </div>
        </div>
      </div>
    </div>

    <!-- title -->

    <div
      class="mb:hidden container mx-auto lt:grid grid-cols-3 gap-8 pt-[35px] pb-[20px]"
    >
      <div class="flex justify-center items-center gap-5">
        <div class="flex-1">
          <p class="text-[#222] text-base font-bold text-right">John Doe</p>
          <p class="text-[#999] text-[12px] justify-end text-right">
            If you want to make your dreams come true, the first thing you have
            to do is wake up.
          </p>
        </div>

        <div class="h-[50px] w-[50px] rounded-full overflow-hidden">
          <img
            class="object-contain"
            src="https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/avatar-1.png"
            alt="avatar"
          />
        </div>
      </div>

      <div class="flex flex-col justify-between items-center">
        <span class="font-semibold text-2xl text-[#222] mb-2"
          >VISUALNEWSPRO</span
        >
        <span class="text-xl text-red-600">WP NEWSPAPER THEME</span>
      </div>

      <div class="flex justify-center items-center gap-5">
        <div class="h-[50px] w-[50px] rounded-full overflow-hidden">
          <img
            class="object-contain"
            src="https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/avatar-2.png"
            alt="avatar"
          />
        </div>

        <div class="flex-1">
          <p class="text-[#222] text-base font-bold text-start">Marry Taylor</p>
          <p class="text-[#999] text-[12px] justify-start text-start">
            You can have anything you want if you are willing to give up
            everything you have.
          </p>
        </div>
      </div>
    </div>

    <!-- navbar -->
    <div
      class="shadow-[0_5px_10px_-5px_rgba(0,0,0,0.3)] lt:sticky top-0 right-0 left-0 bg-white mb-6 z-10"
    >
      <div
        class="lt:container lt:px-0 mb:px-[10px] mx-auto flex justify-between items-center relative"
      >
        <span class="mb:block lt:hidden uppercase font-semibold text-[20px] py-4"
          >visualnews pro</span
        >
        <div class="hidden lt:flex flex-wrap justify-start items-center gap-4">
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >HOME</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >ADVERTISING</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600 flex justify-center items-center relative group"
          >
            <span>BLOGGING</span>
            <iconArrowDown :width="12" :height="12" />
            <div
              class="hidden group-hover:block absolute bottom-0 left-0 px-4 bg-white text-[#222] shadow-md translate-y-[100%] min-w-[200px]"
            >
              <p class="py-[10px] border-b hover:text-sky-600 uppercase">
                Sub Menu 1
              </p>
              <p class="py-[10px] border-b hover:text-sky-600 uppercase">
                Sub Menu 2
              </p>
              <p class="py-[10px] hover:text-sky-600 uppercase">Sub Menu 3</p>
            </div>
          </a>
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >BUSINESS</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >FASHION</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >FOOD</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >LIFESTYLE</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >MARKETING</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >SEO</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >SOCIAL MEDIA</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >TECH</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >TRAVEL</a
          >
          <a
            href="#"
            class="font-semibold text-[#222] text-[13px] py-[16px] hover:text-sky-600"
            >WEB DESIGN</a
          >
        </div>

        <div class="text-black flex items-center gap-5">
          <div class="lt:hidden mmb:block py-[10px]" @click="handleOnOffModalNavbar(true)">
            <iconMenu />
          </div>
          <div class="cursor-pointer">
            <div class="hover:text-sky-600" @click="isShowSearch = true">
              <iconSearch
                v-if="isShowSearch == false"
                :width="16"
                :height="16"
              />
            </div>
            <div class="hover:text-sky-600" @click="isShowSearch = false">
              <iconClose v-if="isShowSearch == true" :width="16" :height="16" />
            </div>
            <div
              :class="`block overflow-hidden ${
                isShowSearch == true ? 'opacity-100 h-auto' : 'opacity-0 h-0'
              } transition ease-in-out duration-300`"
            >
              <div
                :class="`p-4 bg-white z-10 absolute bottom-0 right-0 translate-y-[100%] shadow-[0_0_5px_2px_rgba(0,0,0,0.2)] justify-center items-center flex`"
              >
                <div class="relative text-sky-800">
                  <input
                    ref="input"
                    v-model="searchValue"
                    type="text"
                    placeholder="Search for"
                    class="w-auto pl-4 pr-8 py-2 bg-gray-100 outline-none placeholder-[#222] text-[#222]"
                  />
                  <div
                    v-if="searchValue != ''"
                    class="absolute top-[50%] right-4 translate-y-[-50%]"
                    @click="deleteSearchValue()"
                  >
                    <iconClose :width="16" :height="16" />
                  </div>
                </div>
                <button class="bg-sky-500 text-white font-semibold px-4 py-2">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <modalHeader v-if="isShowModal.header == true" @handle-on-off-modal-header="handleOnOffModalHeader"/>
    <modalNavbar v-if="isShowModal.navbar == true" @handle-on-off-modal-navbar="handleOnOffModalNavbar"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import iconArrowDown from '~/components/icons/arrowdown.vue'
import iconSearch from '~/components/icons/search.vue'
import iconClose from '~/components/icons/close.vue'
import iconFacebook from '~/components/icons/facebook.vue'
import iconTwitter from '~/components/icons/twitter.vue'
import iconYoutube from '~/components/icons/youtube.vue'
import iconLinkedIn from '~/components/icons/linkedin.vue'
import iconDribbble from '~/components/icons/dribbble.vue'
import iconInstagram from '~/components/icons/instagram.vue'
import iconMenu from '~/components/icons/menu.vue'
import modalHeader from '~/components/modal/modalHeader.vue'
import modalNavbar from '~/components/modal/modalNavbar.vue'

const searchValue = ref('')
const isShowSearch = ref(false)
const input = ref(null)

const isShowModal = ref({
  header: false,
  navbar: false
})

function handleOnOffModalHeader(status){
  isShowModal.value.header = status;
}
function handleOnOffModalNavbar(status){
  isShowModal.value.navbar = status;
}

const deleteSearchValue = () => {
  if (input.value) {
    searchValue.value = ''
    input.value.focus()
  }
}
</script>