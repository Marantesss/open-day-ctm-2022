<template>
  <div class="flex justify-center text-left">
        <span v-text="time" class="mt-2 text-lg text-blue-500 font-bold"></span>
        <span class="rounded-full bg-blue-400 h-8 w-8 -mr-4 mt-2 ml-2 z-10"></span>
        <div
            class="p-2 flex-grow rounded-md pl-6"
            :class="{
                'bg-blue-100 text-blue-500': name !== 'Coffee Break',
                'bg-white text-blue-500 border-2 border-blue-500': name === 'Coffee Break',
            }"
        >
            <div class="flex justify-between">
                <h2 v-text="name" class="text-2xl font-bold"></h2>
                <div class="flex">
                    <img
                        v-for="{ photo } in speakers"
                        :key="photo"
                        :class="speakers.length !== 1 ? '-ml-4' : ''"
                        class="h-8 w-8 rounded-full object-cover border-2 border-blue-100"
                        :src="`images/speakers/${photo}`"
                    />
                </div>
            </div>
            <p v-for="{ name } in speakers" :key="name" v-text="name">
            <h4 v-text="place" class="font-light"></h4>
        </div>
  </div>
</template>

<script>
export default {
    name: 'ProgrammeCard',
    props: {
        name: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        speakers: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>