<template>
  <div class="flex flex-col justify-center items-center">
    <img :src="img" class="rounded-full h-32 w-32 object-cover" />
    <div class="text-ctm-dark-blue text-center p-2">
      <h2 v-text="name" class="text-base"></h2>
      <h4 v-text="title" class="text-sm"></h4>
      <h4 v-text="cargo" class="text-lg font-title"></h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganisationCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    cargo: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
</style>