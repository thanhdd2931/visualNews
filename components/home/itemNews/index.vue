<template>
  <div>
    <div :class="getClass()">
      <nuxt-link
        :to="`/news/${link}`"
        :class="
          isDerectionRow
            ? `${
                isFashion
                  ? 'w-[90px] h-[90px] shrink-0'
                  : 'w-[150px] h-[100px] shrink-0'
              }`
            : `pb-[10px] ${maxHeight} overflow-hidden`
        "
      >
        <img
          :class="`object-cover ${
            isFashion
              ? 'w-[90px] h-[90px] shrink-0'
              : `${maxHeight} min-h-[100px] min-w-[150px]`
          } w-full`"
          :src="image"
          alt="image"
        />
      </nuxt-link>

      <div
        :class="
          isDerectionRow
            ? `${isFashion ? '' : ''}`
            : `${isShowAuthor == false ? 'lt:pt-4 mb:pt-2' : ''} ${
                backGround != '' ? 'p-5' : ''
              }`
        "
      >
        <nuxt-link
          v-if="isShowAuthor == true"
          :to="`category/${linkCategory}`"
          :class="
            isDerectionRow
              ? 'uppercase text-[11px] font-semibold inline-block text-[#999] hover:text-[#222]'
              : 'uppercase text-[11px] font-semibold inline-block text-[#999] hover:text-[#222]'
          "
        >
          {{ category }}
        </nuxt-link>

        <nuxt-link
          :to="`/news/${link}`"
          :class="
            isDerectionRow == true
              ? `${
                  isFashion ? 'leading-[1.2]' : 'leading-5 font-bold'
                } line-clamp-3 hover:text-sky-500`
              : `leading-5 font-bold hover:text-sky-500 ${
                  backGround != '' ? 'text-[18px]' : ''
                } mt-[10px] block `
          "
        >
          {{ title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemNews',
  props: {
    category: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '#',
      required: false,
    },
    linkCategory: {
      type: String,
      required: false,
      default: '#'
    },
    image: {
      type: String,
      required: true,
    },
    isDerectionRow: {
      type: Boolean,
      required: false,
      default: true,
    },
    isShowAuthor: {
      type: Boolean,
      required: false,
      default: true,
    },
    isFashion: {
      type: Boolean,
      required: false,
      default: false,
    },
    maxHeight: {
      type: String,
      required: false,
      default: '',
    },
    backGround: {
      type: String,
      required: false,
      default: '',
    },
    isTechnolory: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    getClass() {
      return this.isDerectionRow
        ? `flex justify-start items-start gap-x-4 ${
            this.isTechnolory ? 'tb:flex tb:flex-col lt:flex-row' : ''
          } ${this.backGround}`
        : `flex flex-col ${this.backGround}`
    },
  },
}
</script>

