<template>
  <div class="container mx-auto my-6">
      <h1 class="text-4xl uppercase mb-4">/Speakers</h1>
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
                    name: 'Gonçalo Marantes',
                    title: 'Student @ FEUP',
                    img: 'me.jpg',
                    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
                    social: [
                        {
                            name: 'linkedin',
                            url: ''
                        },
                        {
                            name: 'twitter',
                            url: ''
                        },
                        {
                            name: 'website',
                            url: ''
                        },
                    ]
                },
                {
                    name: 'Nuno Paulino',
                    title: 'Professor @ FEUP',
                    img: 'nuno.jpg',
                    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore officia ipsa dolorem ducimus dicta pariatur minima ea earum quas animi, laboriosam laborum? Quam dignissimos officiis nisi a tempore quisquam.',
                    social: [
                        {
                            name: 'linkedin',
                            url: ''
                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>