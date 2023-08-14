<template>
  <div>
    <div :class="getClass()">
      <div
        :class="
          isDerectionRow
            ? `${
                isFashion
                  ? 'w-[90px] h-[90px] shrink-0'
                  : 'w-[150px] h-[100px] shrink-0'
              }`
            : `${maxHeight} overflow-hidden`
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
      </div>

      <div
        :class="
          isDerectionRow
            ? `${isFashion ? '' : ''}`
            : `${isShowAuthor == false ? 'pt-4' : ''} ${
                backGround != '' ? 'p-5' : ''
              }`
        "
      >
        <a
          v-if="isShowAuthor == true"
          href="#"
          :class="
            isDerectionRow
              ? 'uppercase text-[11px] leading-5 font-semibold inline-block text-[#999] hover:text-[#222]'
              : 'uppercase text-[11px] leading-5 font-semibold block pt-1 text-[#999] hover:text-[#222]'
          "
        >
          {{ author }}
        </a>

        <a
          href="#"
          :class="
            isDerectionRow == true
              ? `${
                  isFashion ? '' : 'leading-5 font-bold'
                } line-clamp-3 hover:text-sky-500`
              : `leading-5 font-bold hover:text-sky-500 pt-2 ${backGround != '' ? 'text-[18px]' : ''} `
          "
        >
          {{ title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemNews',
  props: {
    author: {
      type: String,
      required: false,
      default : ''
    },
    title: {
      type: String,
      required: true,
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

