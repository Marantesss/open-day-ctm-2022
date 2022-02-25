<template>
  <div id="partners" class="container mx-auto my-6 px-2">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">
      /partners
    </h1>
    <div class="flex gap-6 justify-center items-start">
      <div v-for="{ name, url, img } in partners" :key="name" class="h-16">
        <a :href="url" target="_blank" class="h-16">
          <img :src="`images/partners/${img}`" :alt="name" class="h-full" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerSection',
  data() {
    return {
      partners: [
        {
          name: 'IEEE UP SB',
          url: 'https://ieee.fe.up.pt',
          img: 'ieee-up-sb.png',
        },
      ],
    }
  },
}
</script>

<style>
</style>