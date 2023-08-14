<template>
  <svg
  :fill="fill"
  :width="width"
  :height="height"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowDown',
  props: {
    className: {
      type: String,
      require: false,
      default: '',
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
  },
}
</script>
