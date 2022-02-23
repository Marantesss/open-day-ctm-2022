<template>
  <div class="container mx-auto my-6">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">/Speakers</h1>
    <div class="grid grid-cols-4 gap-5">
      <SpeakerCard
        v-for="speaker in speakers"
        :key="speaker.name"
        :name="speaker.name"
        :title="speaker.title"
        :bio="speaker.bio"
        :socials="speaker.social"
        :img="`images/speakers/${speaker.img}`"
      />
    </div>
  </div>
</template>

<script>
import SpeakerCard from './SpeakerCard.vue'
export default {
  name: 'SpeakerSection',
  components: { SpeakerCard },
  data() {
    return {
      speakers: [
        {
          name: 'Guilherme Carvalho',
          title: 'Researcher @ INESC TEC',
          img: 'guilherme-carvalho.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'Daniel Granhão',
          title: 'Researcher @ INESC TEC',
          img: 'nuno.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'Eduardo Meca',
          title: 'Researcher @ INESC TEC',
          img: 'nuno.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'Isabel Rio Torto',
          title: 'Researcher @ INESC TEC',
          img: 'isabel-rio-torto.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'Luís Salgado',
          title: 'Researcher @ INESC TEC',
          img: 'nuno.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'Pedro Neto',
          title: 'Researcher @ INESC TEC',
          img: 'nuno.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'Tomé Albuquerque',
          title: 'Researcher @ INESC TEC',
          img: 'tome-albuquerque.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'Gilberto Bernardes',
          title: 'Researcher @ INESC TEC',
          img: 'gilberto-bernardes.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'André Coelho',
          title: 'Researcher @ INESC TEC',
          img: 'nuno.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'Sofia Inácio',
          title: 'Researcher @ INESC TEC',
          img: 'nuno.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
            },
          ],
        },
        {
          name: 'Joana Tavares',
          title: 'Researcher @ INESC TEC',
          img: 'joana-tavares.jpg',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
            {
              name: 'twitter',
              url: 'https://twitter.com',
            },
            {
              name: 'website',
              url: 'https://google.com',
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