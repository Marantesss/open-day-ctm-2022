<template>
  <div
    class="
      bg-ctm-dark-blue
      flex flex-col
      justify-start
      items-center
      mt-16
      rounded-md
    "
  >
    <img :src="img" class="rounded-full h-32 w-32 object-cover -m-16" />
    <div class="text-white text-center mt-16 px-2 pb-6">
      <h2 class="text-2xl font-title" v-text="name"></h2>
      <h4 class="text-base" v-text="title"></h4>
      <p
        class="font-lt text-sm line-clamp-6"
        style="height: 7.5rem"
        v-text="bio"
      ></p>
      <button class="mx-auto underline hover" @click="toggleModal">
        Read more
      </button>
      <div class="flex justify-center mt-4 items-end">
        <span v-for="{ name, url } in socials" :key="name" class="mx-3">
          <a v-if="name === 'twitter'" :href="url" target="_blank">
            <TwitterIcon />
          </a>
          <a v-if="name === 'linkedin'" :href="url" target="_blank">
            <LinkedInIcon />
          </a>
          <a v-if="name === 'website'" :href="url" target="_blank">
            <WebIcon />
          </a>
        </span>
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
          <div
            class="
              flex
              justify-between
              items-start
              p-5
              rounded-t
              border-b
              dark:border-gray-600
            "
          >
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
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
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
              v-text="bio"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkedInIcon from '../icons/LinkedInIcon'
import TwitterIcon from '../icons/TwitterIcon'
import WebIcon from '../icons/WebIcon'

export default {
  name: 'SpeakerCard',
  components: {
    TwitterIcon,
    LinkedInIcon,
    WebIcon,
  },

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
    bio: {
      type: String,
      required: true,
    },
    socials: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      isModalOpen: false,
    }
  },

  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen
    },
  },
}
</script>

<style>
</style>