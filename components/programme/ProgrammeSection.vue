<template>
  <div class="container mx-auto my-6">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">/Programme</h1>
    <div class="grid grid-cols-2 gap-5 items-start">
      <div class="text-center grid grid-cols-1 gap-2 items-start">
        <h3 class="text-xl text-ctm-dark-blue font-bold">March 31st</h3>
        <ProgrammeCard
          v-for="{ name, time, day, place, speakers } in day1"
          :key="name"
          :name="name"
          :time="time"
          :day="day"
          :place="place"
          :speakers="speakers"
        />
      </div>
      <div class="text-center grid grid-cols-1 gap-2 items-start">
        <h3 class="text-xl text-ctm-dark-blue font-bold">April 1st</h3>
        <ProgrammeCard
          v-for="{ name, time, day, place, speakers } in day2"
          :key="name"
          :name="name"
          :time="time"
          :day="day"
          :place="place"
          :speakers="speakers"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProgrammeCard from './ProgrammeCard'

export default {
  name: 'ProgrammeSection',
  components: { ProgrammeCard },
  data() {
    return {
      day1: [
        {
          name: 'Opening Session',
          time: '14:00',
          day: 'March 31st',
          place: 'Auditório A',
          speakers: [
            {
              name: 'Nuno Paulino',
              photo: 'nuno.jpg',
            },
            {
              name: 'Nuno Paulino 2',
              photo: 'me.jpg',
            },
          ],
        },
        {
          name: 'Coffee Break',
          time: '14:30',
          day: 'March 31st',
          place: 'Coffee Lounge',
        },
        {
          name: 'Como fazer croquetes',
          time: '15:00',
          day: 'March 31st',
          place: 'Cantina da FEUP',
          speakers: [
            {
              name: 'Gonçalo Marantes',
              photo: 'me.jpg',
            },
          ],
        },
      ],
      day2: [
        {
          name: 'Opening Session',
          time: '14:00',
          day: 'March 31st',
          place: 'Auditório A',
          speakers: [
            {
              name: 'Nuno Paulino',
              photo: 'nuno.jpg',
            },
          ],
        },
        {
          name: 'Como fazer croquetes',
          time: '14:30',
          day: 'March 31st',
          place: 'Cantina da FEUP',
          speakers: [
            {
              name: 'Gonçalo Marantes',
              photo: 'me.jpg',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
</style>