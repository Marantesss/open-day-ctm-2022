<template>
  <div class="bg-white flex flex-col gap-12">
    <HeroHeader />
    <AboutUs />
    <SpeakerSection />
    <ProgrammeSection />
    <OrganisationSection />
    <PastEditionsSection />
    <PartnersSection />
    <FooterSection />
  </div>
</template>

<script>
import HeroHeader from '~/components/hero/HeroHeader'
import AboutUs from '~/components/AboutUs'
import SpeakerSection from '~/components/speakers/SpeakerSection'
import OrganisationSection from '~/components/organisation/OrganisationSection'
import ProgrammeSection from '~/components/programme/ProgrammeSection'
import PastEditionsSection from '~/components/past-editions/PastEditionsSection'
import PartnersSection from '~/components/partners/PartnersSection'
import FooterSection from '~/components/FooterSection.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroHeader,
    AboutUs,
    SpeakerSection,
    OrganisationSection,
    ProgrammeSection,
    PastEditionsSection,
    PartnersSection,
    FooterSection
  },
}
</script>