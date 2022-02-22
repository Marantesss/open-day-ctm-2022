<template>
  <div class="bg-gray-100">
    <HeroHeader />
    <AboutUs />
    <SpeakerSection />
    <ProgrammeSection />
    <OrganisationSection />
  </div>
</template>

<script>
import HeroHeader from '~/components/hero/HeroHeader'
import AboutUs from '~/components/AboutUs'
import SpeakerSection from '~/components/speakers/SpeakerSection'
import OrganisationSection from '~/components/organisation/OrganisationSection'
import ProgrammeSection from '~/components/programme/ProgrammeSection'

export default {
  name: 'IndexPage',
  components: { HeroHeader, AboutUs, SpeakerSection, OrganisationSection, ProgrammeSection },
}
</script>
