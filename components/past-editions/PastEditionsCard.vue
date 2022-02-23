<template>
  <a
    :href="url"
    class="
      grid grid-cols-2
      text-center
      items-center
      bg-white
      rounded-lg
      h-32
      shadow-lg
      overflow-hidden
    "
  >
    <img :src="img" class="w-full h-full object-cover" />
    <h3 v-text="year" class="text-2xl text-ctm-dark-blue" />
  </a>
</template>

<script>
export default {
  name: 'PastEditionsCard',
  props: {
    year: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
</style>