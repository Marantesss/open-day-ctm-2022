<template>
  <div class="text-ctm-dark-blue">
    <h3 class="text-lg font-title" v-text="title"></h3>
    <h4 class="text-md font-lt">
      <span class="italic">Challenge for:</span>
      <span class="underline" v-text="workshop"></span>
    </h4>
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
    workshop: {
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