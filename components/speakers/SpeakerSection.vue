<template>
  <div id="speakers" class="container mx-auto my-6 px-2">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">
      /Speakers
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <SpeakerCard
        v-for="speaker in orderedSpeakers"
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

  computed: {
    orderedSpeakers() {
      return [...this.speakers].sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    },
  },

  data() {
    return {
      speakers: [
        {
          name: 'Luís Teixeira',
          title: 'Senior Researcher @ INESC TEC',
          img: 'luis-teixeira.jpg',
          bio: 'Luis F. Teixeira holds a Ph.D. in Electrical and Computer Engineering from Universidade do Porto in the area of computer vision (2009). Currently he is an Assistant Professor at the Department of Informatics Engineering, Faculdade de Engenharia da Universidade do Porto, and a researcher at INESC TEC. Previously he was a researcher at INESC Porto (2001-2008), Visiting Researcher at the University of Victoria (2006), and Senior Scientist at Fraunhofer AICOS (2008-2013)',
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
          name: 'Luís Vilaça',
          title: 'Researcher @ INESC TEC',
          img: 'luis-vilaca.jpg',
          bio: ' Research Assistant at INESC Technology and Science - Associate Laboratory',
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
          name: 'Tiago Gonçalves',
          title: 'Researcher @ INESC TEC',
          img: 'tiago-goncalves.jpg',
          bio: 'Tiago Gonçalves received his MSc in Bioengineering (Biomedical Engineering) from Faculdade de Engenharia da Universidade do Porto (FEUP) in 2019. Currently, he is a PhD Candidate in Electrical and Computer Engineering at FEUP and a research assistant at the Centre for Telecommunications and Multimedia of INESC TEC with the Visual Computing & Machine Intelligence (VCMI) Research Group.',
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
          name: 'Guilherme Carvalho',
          title: 'Researcher @ INESC TEC',
          img: 'guilherme-carvalho.jpg',
          bio: 'Invited Assistant Professor at Faculdade de Engenharia da Universidade do Porto',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/guilherme-luis-carvalho/',
            },
          ],
        },
        {
          name: 'Daniel Granhão',
          title: 'Researcher @ INESC TEC',
          img: 'daniel-granhao.png',
          bio: 'Currently pursuing a Ph.D. degree, which I expect to finish by 2023. Working on the development of efficient hardware architectures for neural network training and inference in embedded contexts. Interested in computing, FPGA-based acceleration, neural networks, and technology in general.',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/danielgranhao/',
            },
          ],
        },
        {
          name: 'Paula Viana',
          title: 'Researcher @ INESC TEC',
          img: 'paula-viana.jpg',
          bio: 'Coordinator Professor at the Polytechnic of Porto and a Researcher at INESC TEC, where I lead the Multimedia Communications Technology Area. I  obtained my PhD from University of Porto in the area of multimedia content management. I have been responsible for the participation of INESC TEC in several national and European projects, involving universities and media industries.',
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
          bio: 'Gilberto Bernardes has a multifaceted activity as a musician, professor, and researcher in sound and music computing. He holds a Ph.D. in digital media from the University of Porto and a Master of Music, cum laude, from the Amsterdamse Hogeschool voor de Kunsten. His research agenda focuses on sampling-based synthesis techniques and pitch spaces, whose findings have been reported in over 60 scientific publications. His artistic activity counts with regular concerts in venues with recognized merit,',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
          ],
        },
        {
          name: 'André Coelho',
          title: 'Researcher @ INESC TEC',
          img: 'andre-coelho.png',
          bio: 'André Coelho has an MSc degree in Electrical and Computers Engineering from University of Porto, Portugal, in 2016. He is currently a PhD student in Telecommunications at University of Porto and a researcher in the Wireless Networks (WiN) research group of the Centre for Telecommunications and Multimedia at INESC TEC. His research interests include emerging wireless networks, with a special focus on flying networks composed of Unmanned Aerial Vehicles (UAVs), and beyond 5G networks.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
          ],
        },
        {
          name: 'Manuel Ricardo',
          title: 'Senior Researcher @ INESC TEC',
          img: 'manuel-ricardo.jpg',
          bio: 'Manuel Alberto Pereira Ricardo has Licenciatura, M.Sc. and PhD (2000) degrees in Electrical and Computer Engineering (EEC), major of Telecommunications, from the Faculty of Engineering of the University of Porto (FEUP). Manuel Ricardo is currently a full professor at FEUP where he teaches courses on Mobile Communications and Computer Networks at FEUP.',
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
          name: 'Luís Pessoa',
          title: 'Senior Researcher @ INESC TEC',
          img: 'luis-pessoa.jpg',
          bio: 'Luís Pessoa is a Senior Researcher and Manager of the Optical and Electronic Technologies (OET) group from the Centre of Telecommunications and Multimedia at INESC TEC. He has research interests in reconfigurability of antenna arrays, thin and flexible substrates and 2D materials for antenna design up to sub-THz, localization with wireless signals and underwater optical wireless communications.',
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
          img: 'sofia-inacio.jpg',
          bio: 'Sofia Inácio received the Licenciatura degree in Electronics and Telecommunications Engineering from the University of Madeira in 2013 and the Master’s degree, in Electrical and Computers Engineering with specialization in Telecommunications from the Faculty of Engineering of the University of Porto (FEUP) in 2016. Since 2020 she has been working towards the Doctoral Programme in Telecommunications at FEUP and at the Optical and Electronic Technologies (OET) group from the Centre of Telecommunications and Multimedia (CTM) at INESC TEC. Her current research interest is the design and analysis of antennas and antenna arrays with new materials.',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/sofia-in%C3%A1cio-a1002064/',
            },
          ],
        },
        {
          name: 'Joana Tavares',
          title: 'Researcher @ INESC TEC',
          img: 'joana-tavares.jpg',
          bio: 'Joana Tavares completed the Master Course in Electrical and Computer Engineering in 2012 and the Doctoral Programme in Telecommunications (MAP-tele) in 2021, both at the Faculty of Engineering of the University of Porto (FEUP). She has been a research fellow since 2014 in the Optical and Electronic Technologies (OET) group from the Centre of Telecommunications and Multimedia (CTM) at INESC TEC. Her main research interests include optical fiber communication systems and smart antenna arrays.',
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
        /*
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
        */
      ],
    }
  },
}
</script>

<style>
</style>