<template>
  <div class="flex justify-center text-left">
    <span class="mt-2 text-lg text-ctm-dark-blue font-title" v-text="time"></span>
    <span class="rounded-full bg-gradient-to-b from-ctm-gradient-light-blue to-ctm-dark-blue bg h-8 w-8 -mr-4 mt-2 ml-2 z-10"></span>
    <div
      class="p-2 flex-grow rounded-md pl-6"
      :class="{
        'bg-ctm-light-blue text-ctm-dark-blue': name !== 'Coffee Break',
        'bg-white text-ctm-dark-blue border-2 border-ctm-dark-blue':
          name === 'Coffee Break',
      }"
    >
      <div class="flex justify-between">
        <h2 class="text-2xl font-title" v-text="name"></h2>
        <div class="flex">
          <img
            v-for="{ photo } in speakers"
            :key="photo"
            :class="speakers.length !== 1 ? '-ml-4' : ''"
            class="h-8 w-8 rounded-full object-cover border-2 border-ctm-light-blue"
            :src="`images/speakers/${photo}`"
          />
        </div>
      </div>
      <p class="font-base" v-text="place"></p>
      <p v-for="speaker in speakers" :key="speaker.name" class="font-lt text-sm" v-text="speaker.name"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgrammeCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    speakers: {
      type: Array,
      required: false,
      default: () => []
    },
  },
}
</script>

<style>
</style>