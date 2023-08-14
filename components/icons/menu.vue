<template>
  <svg
    :fill="fill"
    :height="height"
    :width="width"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"></path>
  </svg>
</template>
  
  <script>
export default {
  name: 'IconClose',
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
  