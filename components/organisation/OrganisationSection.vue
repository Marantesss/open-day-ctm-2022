<template>
  <div class="container mx-auto my-6">
      <h1 class="text-4xl uppercase mb-4">/Organisation</h1>
        <div class="grid grid-cols-4 gap-5">
            <OrganisationCard
                v-for="{ name, title, cargo, img } in organisation"
                :key="name"
                :name="name"
                :title="title"
                :cargo="cargo"
                :img="`images/speakers/${img}`"
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
                    title: 'Professor @ FEUP',
                    cargo: 'General Chair',
                    img: 'nuno.jpg',
                },
                {
                    name: 'Gonçalo Marantes',
                    title: 'Student @ FEUP',
                    cargo: 'Website & Media',
                    img: 'me.jpg',
                },
            ]
        }
    }
}
</script>

<style>

</style>