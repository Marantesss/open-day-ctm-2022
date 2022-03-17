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
      class="
        p-2
        w-full
        rounded-md
        pl-6
        text-ctm-dark-blue
        transform
        duration-150
      "
      @click="toggleModal"
      :class="{
        'bg-ctm-light-blue hover:bg-ctm-dark-blue hover:text-white cursor-pointer':
          type === 'workshop' || type === 'keynote',
        'bg-white border-2 border-ctm-dark-blue': type === 'break',
      }"
    >
      <div class="flex justify-between">
        <div class="flex-grow">
          <h2 class="text-lg">
            <span v-if="type === 'keynote'" class="font-title">Keynote:</span>
            <span v-else-if="type === 'workshop'" class="font-title"
              >Workshop:</span
            >
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
          class="h-8 w-8 rounded-full object-cover border-2 flex-none"
          :src="`images/speakers/${photo}`"
        />
      </div>
    </div>
    <div
      :class="{
        flex: isModalOpen,
        hidden: !isModalOpen,
      }"
      class="
        overflow-y-auto overflow-x-hidden
        fixed
        right-0
        left-0
        top-4
        z-50
        justify-center
        items-center
        h-modal
        md:h-full md:inset-0
        w-screen
        h-screen
      "
    >
      <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="p-5 rounded-t border-b dark:border-gray-600">
            <div class="flex justify-between items-start">
              <h3
                class="
                  text-xl
                  font-semibold
                  text-gray-900
                  lg:text-lg
                  dark:text-white
                "
                v-text="name"
              ></h3>
              <button
                @click="toggleModal"
                type="button"
                class="
                  text-gray-400
                  bg-transparent
                  hover:bg-gray-200 hover:text-gray-900
                  rounded-full
                  text-sm
                  p-1.5
                  ml-auto
                  inline-flex
                  items-center
                  dark:hover:bg-gray-600 dark:hover:text-white
                "
              >
                <CrossIcon />
              </button>
            </div>
            <div>
              <div class="flex pt-2 gap-1">
                <TimeIcon />
                <span v-text="time"></span>
                <span>-</span>
                <span v-text="end"></span>
              </div>
              <div class="flex pt-2 gap-1">
                <PinIcon />
                <span v-text="place"></span>
              </div>
              <div v-if="zoom" class="flex pt-2 gap-1 text-gray-400">
                <ZoomIcon />
                <span v-text="'TBD'"></span>
              </div>
            </div>
          </div>

          <div class="p-6 space-y-6">
            <p
              class="
                font-lt
                text-sm
                leading-relaxed
                text-gray-500
                dark:text-gray-400
              "
              v-text="description"
            ></p>
          </div>

          <div
            class="
              flex flex-col
              p-6
              space-y-2
              rounded-b
              border-t border-gray-200
              dark:border-gray-600
            "
          >
            <div
              v-for="{ name, photo } in speakers"
              :key="name"
              class="flex items-center space-x-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover"
                :src="`images/speakers/${photo}`"
              />
              <span class="font-lt text-sm" v-text="name"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeIcon from '../icons/TimeIcon'
import PinIcon from '../icons/PinIcon'
import CrossIcon from '../icons/CrossIcon'
import ZoomIcon from '../icons/ZoomIcon'

export default {
  name: 'ProgrammeCard',
  components: {
    TimeIcon,
    PinIcon,
    CrossIcon,
    ZoomIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    end: {
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
    zoom: {
      type: String,
      required: false,
      default: undefined,
    },
    speakers: {
      type: Array,
      required: false,
      default: () => [],
    },
    description: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      isModalOpen: false,
    }
  },

  methods: {
    toggleModal() {
      this.type !== 'break'
        ? (this.isModalOpen = !this.isModalOpen)
        : (this.isModalOpen = false)
    },
  },
}
</script>

<style>
</style>