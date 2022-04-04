<template>
  <div class="text-ctm-dark-blue">
    <h3 class="text-lg font-title" v-text="title"></h3>
    <h4 class="text-md font-lt">
      <span class="italic">Challenge for:</span>
      <span class="underline" v-text="workshop"></span>
    </h4>
    <p v-for="par in description" :key="par" v-text="par"></p>
    <a
      v-if="document"
      class="flex gap-2 hover:underline my-2 font-lt"
      :href="document === '/' ? document : `/documents/${document}`"
      target="_blank"
    >
      <DocumentIcon />
      Challenge document
    </a>
  </div>
</template>

<script>
import DocumentIcon from '../icons/DocumentIcon'
export default {
  name: 'ChallengeCard',

  components: {
    DocumentIcon,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    workshop: {
      type: String,
      required: true,
    },
    document: {
      type: String,
      required: false,
      default: null,
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