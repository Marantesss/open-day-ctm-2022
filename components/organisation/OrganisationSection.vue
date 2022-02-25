<template>
  <div id="organisation" class="container mx-auto my-6 px-2">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">/Organisation</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      <OrganisationCard
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
          title: 'Researcher @ INESC TEC',
          cargo: 'General Chair',
          img: 'nuno.jpg',
        },
        {
          name: 'Nuno Paulino 2',
          title: 'Researcher @ INESC TEC',
          cargo: 'General Chair',
          img: 'nuno.jpg',
        },
        {
          name: 'Nuno Paulino 3',
          title: 'Researcher @ INESC TEC',
          cargo: 'General Chair',
          img: 'nuno.jpg',
        },
        {
          name: 'Nuno Paulino 4',
          title: 'Researcher @ INESC TEC',
          cargo: 'General Chair',
          img: 'nuno.jpg',
        },
        {
          name: 'Nuno Paulino 5',
          title: 'Researcher @ INESC TEC',
          cargo: 'General Chair',
          img: 'nuno.jpg',
        },
        {
          name: 'Gonçalo Marantes',
          title: 'Student @ FEUP',
          cargo: 'Webmaster',
        },
        {
          name: 'Gonçalo Marantes 2',
          title: 'Student @ FEUP',
          cargo: 'Webmaster',
        },
        {
          name: 'Gonçalo Marantes 3',
          title: 'Student @ FEUP',
          cargo: 'Webmaster',
        },
        {
          name: 'Gonçalo Marantes 4',
          title: 'Student @ FEUP',
          cargo: 'Webmaster',
        },
        {
          name: 'Gonçalo Marantes 5',
          title: 'Student @ FEUP',
          cargo: 'Webmaster',
        },
      ],
    }
  },
}
</script>

<style>
</style>