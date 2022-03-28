<template>
  <div id="programme" class="container mx-auto my-6 px-2">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">
      /Programme
    </h1>
    <div class="grid md:grid-cols-2 gap-2 grid-cols-1 items-start">
      <div class="p-4 bg-green-100 rounded-md">
        <p class="text-green-700 font-lt">
          <WarningIcon class="inline-flex" />
          <span class="font-title">Update:</span> Our four keynote sessions will
          be <span class="font-title">hybrid</span>, meaning you can physically
          attend at the indicated room, or via a Zoom link (which we will post
          on this website the day prior to the event). The workshops are
          <span class="font-title">in-person only</span>, at the rooms indicated
          in the programme below.
        </p>
      </div>
      <div class="p-4 bg-red-50 rounded-md">
        <p class="text-red-600 font-lt">
          <WarningIcon class="inline-flex" />
          <span class="font-title">Update:</span> Workshops marked with
          <span
            class="font-title inline-flex items-end gap-2 text-ctm-dark-blue"
            ><WarningIcon class="inline-flex" /> Full</span
          >
          have reached their maximum capacity and do not allow any further
          attendees!
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
      <div class="text-center grid grid-cols-1 gap-2 items-start">
        <h3 class="text-xl text-ctm-dark-blue font-bold my-2">March 31st</h3>
        <ProgrammeCard
          v-for="{
            name,
            time,
            end,
            day,
            place,
            zoom,
            document,
            full,
            speakers,
            type,
            description,
          } in day1"
          :key="name"
          :name="name"
          :time="time"
          :end="end"
          :day="day"
          :type="type"
          :place="place"
          :zoom="zoom"
          :document="document"
          :speakers="speakers"
          :full="full"
          :description="description"
        />
      </div>
      <div class="text-center grid grid-cols-1 gap-2 items-start">
        <h3 class="text-xl text-ctm-dark-blue font-bold my-2">April 1st</h3>
        <ProgrammeCard
          v-for="{
            name,
            time,
            end,
            day,
            document,
            full,
            place,
            zoom,
            speakers,
            type,
            description,
          } in day2"
          :key="name"
          :name="name"
          :time="time"
          :end="end"
          :day="day"
          :type="type"
          :place="place"
          :zoom="zoom"
          :document="document"
          :speakers="speakers"
          :description="description"
          :full="full"
        />
      </div>
    </div>
    <h2
      class="
        text-xl text-center
        uppercase
        my-6
        text-ctm-dark-blue
        font-section-title
      "
    >
      Challenges
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
      <ChallengeCard
        v-for="{ title, description, workshop } in challenges"
        :key="title"
        :title="title"
        :description="description"
        :workshop="workshop"
      />
    </div>
  </div>
</template>

<script>
import WarningIcon from '../icons/WarningIcon'
import ChallengeCard from './ChallengeCard'
import ProgrammeCard from './ProgrammeCard'

export default {
  name: 'ProgrammeSection',
  components: { ProgrammeCard, ChallengeCard, WarningIcon },
  data() {
    return {
      // Challenges
      challenges: [
        {
          title: 'Computer Vision Challenge',
          workshop: 'Computer Vision Workshop',
          description: [
            'Apply what you learned in the Workshops and use Computer Vision algorithms to recognise the characters of a well-known TV-series. Kaggle is waiting for you! Can you go from “Hello World” to “Yellow World”?',
          ],
          document: '/computer-vision-challenge.pdf',
        },
        {
          title: 'How to Set Up a Hidden Private Wireless Network?',
          workshop: 'On-demand 6G Networks using Autonomous Platforms',
          description: [
            'Keep your neighbors and passersby away from your wireless network! You will be challenged to set up a hidden private wireless network in your home, able to provide Internet access to residents without anyone else knowing it is there.',
            'The fastest contestant to prove the feat will receive a prize. Secret for now!',
          ],
          document: '/wireless-networks-challenge.pdf',
        },
      ],
      // DAY 1
      day1: [
        {
          name: 'Extracting knowledge from pixels - are computers better than humans at understanding images?',
          time: '10:00',
          end: '10:45',
          day: 'March 31st',
          type: 'keynote',
          description:
            'In this talk we will make a brief journey on how computer vision has evolved in the past 50 years. What makes it difficult for computers to understand images and what is possible today?',
          place: 'B032',
          zoom: 'https://videoconf-colibri.zoom.us/j/81842360033?pwd=RHN6c1UrOGQ4cENsTjJwVzAxT3Q0dz09',
          speakers: [
            {
              name: 'Luís Teixeira',
              photo: 'luis-teixeira.jpg',
            },
          ],
        },
        {
          name: 'Computer Vision Workshop',
          description:
            'In the Computer Vision Workshop, you will have hands-on experience in computer vision and machine learning. You will learn, implement and test main techniques for image analysis using methods that range from traditional machine learning to deep learning.',
          time: '11:00',
          end: '13:00',
          day: 'March 31st',
          full: true,
          document: 'computer-vision-workshop.pdf',
          type: 'workshop',
          place: 'Auditório A',
          speakers: [
            {
              name: 'Luís Vilaça',
              photo: 'luis-vilaca.jpg',
            },
            {
              name: 'Eduardo Castro',
              photo: 'eduardo-castro.jpg',
            },
            {
              name: 'Pedro Neto',
              photo: 'pedro-neto.jpg',
            },
          ],
        },
        {
          name: 'The First Steps into HLS',
          time: '11:00',
          end: '13:00',
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
          time: '13:00',
          end: '14:00',
          type: 'break',
          day: 'March 31st',
        },
        {
          name: 'Can you imagine a world without multimedia content?',
          description:
            'In this talk we will discuss technologies, challenges and innovative approaches to create, manage and access multimedia content. The talk is directly related with the Computer Vision and Creative Music Workshops.',
          time: '14:00',
          end: '14:45',
          day: 'April 1st',
          type: 'keynote',
          place: 'B032',
          zoom: 'https://videoconf-colibri.zoom.us/j/85905727173?pwd=RVJKN0dwbHFhamRaQm5aZm1zcURvdz09',
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
          end: '17:00',
          description:
            'In the Creative Music Workshop, we will explore the area of creative music information retrieval, namely the fundamentals and applied knowledge that supports computer-assisted technology for musical audio recombination. The principles are fundamental to Dj software tools that explore large sets of musical audio databases.',
          document: 'creative-music-workshop.pdf',
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
          end: '17:00',
          document: 'on-demand-6g-networks-using-autonomous-platforms.pdf',
          day: 'March 31st',
          type: 'workshop',
          place: 'I-105',
          speakers: [
            {
              name: 'André Coelho',
              photo: 'andre-coelho.png',
            },
            {
              name: 'Eduardo N. Almeida',
              photo: 'eduardo-almeida.jpg',
            },
            {
              name: 'Rúben Queirós',
              photo: 'ruben-queiros.jpg',
            },
            {
              name: 'João Loureiro',
              photo: 'joao-loureiro.jpg',
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
          end: '10:45',
          day: 'April 1st',
          type: 'keynote',
          place: 'B032',
          zoom: 'https://videoconf-colibri.zoom.us/j/87673925052?pwd=WDd0V05TWlZpanE5eWMwM0E0N3BTZz09',
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
          end: '13:00',
          day: 'April 1st',
          document: 'on-demand-6g-networks-using-autonomous-platforms.pdf',
          type: 'workshop',
          place: 'I-105',
          speakers: [
            {
              name: 'André Coelho',
              photo: 'andre-coelho.png',
            },
            {
              name: 'Eduardo N. Almeida',
              photo: 'eduardo-almeida.jpg',
            },
            {
              name: 'Rúben Queirós',
              photo: 'ruben-queiros.jpg',
            },
            {
              name: 'João Loureiro',
              photo: 'joao-loureiro.jpg',
            },
          ],
        },
        {
          name: 'Computer Vision Workshop',
          description:
            'In the Computer Vision Workshop, you will have hands-on experience in computer vision and machine learning. You will learn, implement and test main techniques for image analysis using methods that range from traditional machine learning to deep learning.',
          time: '11:00',
          end: '13:00',
          day: 'April 1st',
          document: 'computer-vision-workshop.pdf',
          type: 'workshop',
          place: 'Auditório B',
          speakers: [
            {
              name: 'Isabel Rio-Torto',
              photo: 'isabel-rio-torto.jpg',
            },
            {
              name: 'Tiago Gonçalves',
              photo: 'tiago-goncalves.jpg',
            },
            {
              name: 'Tomé Albuquerque',
              photo: 'tome-albuquerque.jpg',
            },
          ],
        },
        {
          name: 'Lunch Break',
          time: '13:00',
          end: '14:00',
          type: 'break',
          day: 'April 1st',
        },
        {
          name: 'Reconfigurable and large intelligent surfaces towards 6G',
          description: 'N/A',
          time: '14:00',
          end: '14:45',
          day: 'April 1st',
          type: 'keynote',
          place: 'B032',
          zoom: 'https://videoconf-colibri.zoom.us/j/89509971508?pwd=WkdIVXhVcEhGNkd3dGxZSktkemgvUT09',
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
          end: '17:00',
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
          description:
            'In the Creative Music Workshop, we will explore the area of creative music information retrieval, namely the fundamentals and applied knowledge that supports computer-assisted technology for musical audio recombination. The principles are fundamental to Dj software tools that explore large sets of musical audio databases.',
          time: '17:00',
          end: '15:00',
          day: 'April 1st',
          document: 'creative-music-workshop.pdf',
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