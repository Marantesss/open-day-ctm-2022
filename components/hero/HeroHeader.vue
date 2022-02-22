<template>
  <div>
    <HeroNavbar />
    <header id="up" class="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
		<!-- Overlay Background + Center Control -->
		<div class="h-screen bg-opacity-50 bg-black flex items-center" style="background:rgba(0,0,0,0.2);">
			<div class="text-center container mx-auto">
				<h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl text-left">
					Challenge Something
        </h1>
        <img class="h-32" src="images/logo.png" />
        <h2 class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight text-right">
          Bold Action Statement
        </h2>
        <div>
          <button class="bg-black text-white rounded-full text-2xl py-2 px-4">Register Here</button>
        </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import HeroNavbar from './HeroNavbar.vue'
export default {
  name: 'HeroHeader',
  components: { HeroNavbar },
}
</script>

<style>

</style>