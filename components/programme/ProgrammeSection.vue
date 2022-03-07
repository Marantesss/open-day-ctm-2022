<template>
  <div id="programme" class="container mx-auto my-6 px-2">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">
      /Programme
    </h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
      <div class="text-center grid grid-cols-1 gap-2 items-start">
        <h3 class="text-xl text-ctm-dark-blue font-bold">March 31st</h3>
        <ProgrammeCard
          v-for="{ name, time, day, place, speakers, type, description } in day1"
          :key="name"
          :name="name"
          :time="time"
          :day="day"
          :type="type"
          :place="place"
          :speakers="speakers"
          :description="description"
        />
      </div>
      <div class="text-center grid grid-cols-1 gap-2 items-start">
        <h3 class="text-xl text-ctm-dark-blue font-bold">April 1st</h3>
        <ProgrammeCard
          v-for="{ name, time, day, place, speakers, type, description } in day2"
          :key="name"
          :name="name"
          :time="time"
          :day="day"
          :type="type"
          :place="place"
          :speakers="speakers"
          :description="description"
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
      // DAY 1
      day1: [
        {
          name: 'Extracting knowledge from pixels - are computers better than humans at understanding images?',
          time: '10:00',
          day: 'March 31st',
          type: 'keynote',
          description: 'In this talk we will make a brief journey on how computer vision has evolved in the past 50 years. What makes it difficult for computers to understand images and what is possible today?',
          place: 'B032',
          speakers: [
            {
              name: 'Luís Teixeira',
              photo: 'luis-teixeira.jpg',
            },
          ],
        },
        {
          name: 'Computer Vision Workshop',
          description: 'N/A',
          time: '11:00',
          day: 'March 31st',
          type: 'workshop',
          place: 'Auditório A',
          speakers: [
            {
              name: 'Luís Vilaça',
              photo: 'luis-vilaca.jpg',
            },
            {
              name: 'Tiago Gonçalves',
              photo: 'tiago-goncalves.jpg',
            },
          ],
        },
        {
          name: 'The First Steps into HLS',
          time: '11:00',
          day: 'March 31st',
          description:
            'An introduction to High-Level Synthesis tools as a fast prototyping method for HW accelerators. In this workshop we will start by learning the basics of HLS, explore a real world example to see the kind of decisions a developer might have to make, and finally see that example used on an FPGA.',
          type: 'workshop',
          place: 'Auditório B',
          speakers: [
            {
              name: 'Guilherme Carvalho',
              photo: 'guilherme-carvalho.jpg',
            },
            {
              name: 'Daniel Granhão',
              photo: 'daniel-granhao.png',
            },
          ],
        },
        {
          name: 'Lunch Break',
          time: '12:30',
          type: 'break',
          day: 'March 31st',
        },
        {
          name: 'MCT Overview and Projects',
          description: 'N/A',
          time: '14:00',
          day: 'April 1st',
          type: 'keynote',
          place: 'B032',
          speakers: [
            {
              name: 'Paula Viana',
              photo: 'paula-viana.jpg',
            },
          ],
        },
        {
          name: 'Creative Music Workshop',
          time: '15:00',
          day: 'March 31st',
          type: 'workshop',
          place: 'Auditório A',
          speakers: [
            {
              name: 'Gilberto Bernardes',
              photo: 'gilberto-bernardes.jpg',
            },
          ],
        },
        {
          name: 'On-demand 6G Networks using Autonomous Platforms',
          description:
            'In this Workshop, the participants will configure a wireless network from scratch, leveraged by the controlled mobility provided by a Robot Dog to offer wireless connectivity on-demand.',
          time: '15:00',
          day: 'March 31st',
          type: 'workshop',
          place: 'I-105',
          speakers: [
            {
              name: 'André Coelho',
              photo: 'andre-coelho.png',
            },
          ],
        },
      ],
      // DAY 2
      day2: [
        {
          name: 'Beyond 5G Communications',
          description: 'N/A',
          time: '10:00',
          day: 'April 1st',
          type: 'keynote',
          place: 'B032',
          speakers: [
            {
              name: 'Manuel Ricardo',
              photo: 'manuel-ricardo.jpg',
            },
          ],
        },
        {
          name: 'On-demand 6G Networks using Autonomous Platforms',
          description:
            'In this Workshop, the participants will configure a wireless network from scratch, leveraged by the controlled mobility provided by a Robot Dog to offer wireless connectivity on-demand.',
          time: '11:00',
          day: 'April 1st',
          type: 'workshop',
          place: 'I-105',
          speakers: [
            {
              name: 'André Coelho',
              photo: 'andre-coelho.png',
            },
          ],
        },
        {
          name: 'Computer Vision Workshop',
          description: 'N/A',
          time: '11:00',
          day: 'April 1st',
          type: 'workshop',
          place: 'Auditório B',
          speakers: [
            {
              name: 'Luís Vilaça',
              photo: 'luis-vilaca.jpg',
            },
            {
              name: 'Tiago Gonçalves',
              photo: 'tiago-goncalves.jpg',
            },
          ],
        },
        {
          name: 'Lunch Break',
          time: '12:30',
          type: 'break',
          day: 'April 1st',
        },
        {
          name: 'Reconfigurable and large intelligent surfaces towards 6G',
          description: 'N/A',
          time: '14:00',
          day: 'April 1st',
          type: 'keynote',
          place: 'B032',
          speakers: [
            {
              name: 'Luís Pessoa',
              photo: 'luis-pessoa.jpg',
            },
          ],
        },
        {
          name: 'Antenna Arrays',
          description:
            'An introduction to antenna array design and analysis in MATLAB, and to antenna and antenna array design, simulation and analysis in CST Studio Suite Student Edition.',
          time: '15:00',
          day: 'April 1st',
          type: 'workshop',
          place: 'Auditório A',
          speakers: [
            {
              name: 'Sofia Inácio',
              photo: 'sofia-inacio.jpg',
            },
            {
              name: 'Joana Tavares',
              photo: 'joana-tavares.jpg',
            },
          ],
        },
        {
          name: 'Creative Music Workshop',
          description: 'N/A',
          time: '15:00',
          day: 'April 1st',
          type: 'workshop',
          place: 'Auditório B',
          speakers: [
            {
              name: 'Gilberto Bernardes',
              photo: 'gilberto-bernardes.jpg',
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