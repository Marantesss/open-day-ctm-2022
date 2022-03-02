<template>
  <div id="venue" class="container mx-auto my-6 px-2">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">
      /Venue
    </h1>
    <VenueMap class="mx-auto venue-map" />
  </div>
</template>

<script>
import VenueMap from './VenueMap'

export default {
  name: 'VenueSection',
  components: {
    VenueMap,
  },
}
</script>

<style scoped>
.venue-map {
    max-width: 46rem;
}
</style>