<template>
  <div class="bg-blue-600 flex flex-col justify-center items-center mt-16 rounded-md">
      <img :src="img" class="rounded-full h-32 w-32 object-cover -m-16" />
      <div class="text-white text-center mt-16 p-2">
        <h2 v-text="name" class="text-2xl font-bold"></h2>
        <h4 v-text="title" class="text-l"></h4>
        <p v-text="bio" class="font-light"></p>
        <div class="flex justify-around">
            <span v-for="social in socials" :key="social.name">
                {{ social.name }}
            </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SpeakerCard',
    props: {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        socials: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>