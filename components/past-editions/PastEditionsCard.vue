<template>
  <a
    @mouseenter="toggleMouseOver"
    @mouseleave="toggleMouseOver"
    target="_blank"
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
    <img
      :src="img"
      :class="{ 'scale-125': isMouseOver }"
      class="w-full h-full object-cover transform duration-200"
    />
    <h3 v-text="year" :class="{ 'underline font-bold': isMouseOver }" class="text-2xl text-ctm-dark-blue transform duration-200" />
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

  data: () => ({
    isMouseOver: false,
  }),

  methods: {
    toggleMouseOver() {
      this.isMouseOver = !this.isMouseOver
    },
  },
}
</script>

<style>
</style>