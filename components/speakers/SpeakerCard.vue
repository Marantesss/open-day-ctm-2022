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
}
</script>

<style>
</style>