<template>
  <div class="container mx-auto my-6">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">/past_editions</h1>
    <div class="grid grid-cols-4 gap-5">
      <PastEditionsCard
        v-for="{ year, url, img } in editions"
        :key="year"
        :year="year"
        :url="url"
        :img="`images/past-editions/${img}`"
      />
    </div>
  </div>
</template>

<script>
import PastEditionsCard from './PastEditionsCard'
export default {
  name: 'PastEditionsSection',
  components: { PastEditionsCard },
  data() {
    return {
      editions: [
        {
          year: '2021',
          url: 'https://google.com',
          img: '2021.png',
        },
        {
          year: '2019',
          url: 'https://google.com',
          img: '2019.png',
        },
        {
          year: '2018',
          url: 'https://google.com',
          img: '2018.png',
        },
        {
          year: '2017',
          url: 'https://google.com',
          img: '2017.png',
        },
      ],
    }
  },
}
</script>

<style>
</style>