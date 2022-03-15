<template>
  <div class="text-ctm-dark-blue">
    <h3 class="text-lg font-title" v-text="title"></h3>
    <p v-for="par in description" :key="par" v-text="par"></p>
  </div>
</template>

<script>
export default {
  name: 'ChallengeCard',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>