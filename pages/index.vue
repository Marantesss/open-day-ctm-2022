<template>
  <div class="bg-white flex flex-col gap-12">
    <HeroHeader />
    <AboutUs />
    <SpeakerSection />
    <ProgrammeSection />
    <VenueSection />
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
import VenueSection from '~/components/venue/VenueSection'
import PastEditionsSection from '~/components/past-editions/PastEditionsSection'
import PartnersSection from '~/components/partners/PartnersSection'
import FooterSection from '~/components/FooterSection'

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
    FooterSection,
    VenueSection
  },
}
</script>