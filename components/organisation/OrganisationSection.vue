<template>
  <div id="organisation" class="container mx-auto my-6 px-2">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">/Organisation</h1>
    <div class="flex flex-wrap items-start justify-center">
      <OrganisationCard
        class="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full"
        v-for="{ name, title, cargo, img } in organisation"
        :key="name"
        :name="name"
        :title="title"
        :cargo="cargo"
        :img="img"
      />
    </div>
  </div>
</template>

<script>
import OrganisationCard from './OrganisationCard.vue'
export default {
  name: 'OrganisationSection',
  components: { OrganisationCard },
  data() {
    return {
      organisation: [
        {
          name: 'Nuno Paulino',
          title: 'INESC TEC',
          cargo: 'Chairperson',
          img: 'nuno-paulino.png',
        },
        {
          name: 'Guilherme Carvalho',
          title: 'INESC TEC',
          cargo: 'Optical and Electronic Technologies',
          img: 'guilherme-carvalho.png',
        },
        {
          name: 'André Coelho',
          title: 'INESC TEC',
          cargo: 'Wireless Networks',
          img: 'andre-coelho.png',
        },
        {
          name: 'Ana Filipa',
          title: 'INESC TEC',
          cargo: 'Visual Computing & Machine Intelligence',
          img: 'ana-filipa.png',
        },
        {
          name: 'Luís Aly',
          title: 'INESC TEC',
          cargo: 'Multimedia Communications Technologies',
          img: 'luis-aly.png',
        },
        {
          name: 'Gonçalo Marantes',
          title: 'Member @ IEEE UP SB',
          cargo: 'Webmaster',
        },
      ],
    }
  },
}
</script>

<style>
</style>