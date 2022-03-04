<template>
  <div class="flex justify-center text-left">
    <span class="mt-2 flex">
      <span
        class="mr-2 text-lg text-ctm-dark-blue font-title"
        v-text="time"
      ></span>
      <span
        class="
          rounded-full
          bg-gradient-to-b
          from-ctm-gradient-light-blue
          to-ctm-dark-blue
          bg
          h-8
          w-8
          -mr-4
          z-10
        "
      ></span>
    </span>
    <div
      class="p-2 w-full rounded-md pl-6 text-ctm-dark-blue"
      :class="{
        'bg-ctm-light-blue': type === 'workshop' || type === 'keynote',
        'bg-white border-2 border-ctm-dark-blue': type === 'break',
      }"
    >
      <div class="flex justify-between">
        <div class="flex-grow">
          <h2 class="text-lg">
            <span v-if="type === 'keynote'" class="font-title">Keynote:</span>
            <span v-else-if="type === 'workshop'" class="font-title">Workshop:</span>
            {{ name }}
          </h2>
          <p class="font-base" v-text="place"></p>
          <p
            v-for="speaker in speakers"
            :key="speaker.name"
            class="font-lt text-sm"
            v-text="speaker.name"
          ></p>
        </div>
        <img
          v-for="{ photo } in speakers"
          :key="photo"
          :class="{
            '-ml-4': speakers.length !== 1,
            'border-ctm-light-blue': type === 'workshop' || type === 'keynote',
          }"
          class="
            h-8
            w-8
            rounded-full
            object-cover
            border-2
            flex-none
          "
          :src="`images/speakers/${photo}`"
        />
      </div>
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
    type: {
      type: String,
      required: false,
    },
    day: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: false,
      default: undefined,
    },
    speakers: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style>
</style>