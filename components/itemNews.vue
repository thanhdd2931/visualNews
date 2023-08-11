<template>
  <div>
    <div :class="getClass()">
      <div :class="isDerectionRow ? 'col-span-4' : ''">
        <img class="object-cover" :src="image" alt="image" />
      </div>

      <div :class="isDerectionRow ? 'col-span-6' : ''">
        <a
          v-if="isShowAuthor == true"
          href="#"
          :class="
            isDerectionRow
              ? 'uppercase text-[12px] block'
              : 'uppercase text-[12px] block pt-1'
          "
        >
          {{ author }}
        </a>

        <a
          href="#"
          :class="
            isDerectionRow
              ? 'font-bold justify-start line-clamp-3 hover:text-sky-500 block'
              : 'font-bold justify-start line-clamp-3 hover:text-sky-500 block pt-2'
          "
          >{{ title }}</a
        >
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
      required: true,
      default: 'abc',
    },
    title: {
      type: String,
      required: true,
      default: 'abc',
    },
    image: {
      type: String,
      required: true,
      default: 'abc',
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
  },
  methods: {
    getClass() {
      return this.isDerectionRow
        ? 'grid grid-cols-10 gap-4'
        : 'flex flex-col'
    },
  },
}
</script>

