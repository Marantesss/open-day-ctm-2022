<template>
  <div>
    <HeroNavbar />
    <header
      id="up"
      class="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
    >
      <div
        class="
          absolute
          flex
          items-center
          justify-between
          h-full
          w-full
          overflow-hidden
          z-0
        "
      >
        <HeroBubbles class="xl:ml-12 sm:mx-2 w-hero sm:w-auto" />
        <HeroNetwork class="hidden xl:block left-8" />
      </div>
      <!-- Overlay Background + Center Control -->
      <div class="absolute h-full w-full flex items-center">
        <div class="container mx-auto lg:px-12">
          <h1
            class="
              text-black
              font-title
              text-2xl
              xs:text-4xl
              md:text-5xl
              text-left
            "
          >
            Challenge Yourself
          </h1>
          <OpenDayCTMLogo
            class="max-h-32 my-10 w-48 mx-auto sm:mx-0 sm:w-auto"
          />
          <h3
            class="
              text-black
              font-title
              text-lg
              xs:text-2xl
              md:text-3xl
              leading-tight
              text-left
            "
          >
            March 31st & April 1st
          </h3>
          <h2
            class="
              text-black
              font-title
              text-2xl
              xs:text-4xl
              md:text-5xl
              leading-tight
              text-right
            "
          >
            Learn from Experts
          </h2>
          <a href="https://forms.gle/gD84wUa2otx8tMX96" target="_blank" class="block text-center">
            <button
              class="
                bg-black
                border-2 border-black
                text-white
                rounded-full
                text-2xl
                py-2
                px-4
                hover:text-ctm-dark-blue
                hover:bg-white
                hover:border-ctm-dark-blue
                transform
                transition-all
                duration-200
              "
            >
              Register Here
            </button>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import HeroNavbar from './HeroNavbar'
import HeroBubbles from './HeroBubbles'
import HeroNetwork from './HeroNetwork.vue'
export default {
  name: 'HeroHeader',
  components: {
    HeroNavbar,
    HeroBubbles,
    HeroNetwork,
  },
}
</script>

<style>
</style>