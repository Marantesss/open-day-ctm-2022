<template>
  <div class="bg-black h-64 p-6">
    <div class="container flex flex-wrap justify-between items-start mx-auto">
      <a href="#" class="flex">
        <OpenDayCTMLogo color="white" class="h-16 w-36" />
      </a>
      <div class="text-white text-right font-lt">
        <p class="font-title">Centre for Telecommunications Multimedia</p>
        <p>INESC TEC</p>
        <br/>
        <p>Campus da FEUP</p>
        <p>Rua Dr. Roberto Frias</p>
        <p>4200-465 Porto</p>
        <br/>
        <p>opendayctm@inesctec.pt</p>
      </div>
    </div>
  </div>
</template>

<script>
import OpenDayCTMLogo from './OpenDayCTMLogo.vue'
export default {
  components: { OpenDayCTMLogo },
  name: 'FooterSection',
}
</script>

<style>
</style>