<template>
  <div id="speakers" class="container mx-auto my-6 px-2">
    <h1 class="text-4xl uppercase mb-4 text-ctm-dark-blue font-section-title">
      /Speakers
    </h1>
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-5
      "
    >
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

  data() {
    return {
      speakers: [
        {
          name: 'Eduardo Almeida',
          title: 'Research Assitant @ INESC TEC',
          img: 'blank-user.jpg',
          bio: 'Eduardo Nuno Almeida is an R&D Engineer at INESC TEC and a PhD candidate in the Doctoral Programme in Telecommunications (MAP-tele) at Faculdade de Engenharia, Universidade do Porto (FEUP). Since 2021, he is also an invited Teaching Assistant at FEUP, lecturing courses on telecommunications and informatics. Currently, he is pursuing his PhD research on traffic-aware UAV placement for aerial wireless networks, using artificial intelligence techniques. Additionally, he is an active contributor of the network simulator ns-3 open-source project.',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/',
            },
          ],
        },
        {
          name: 'Rúben Queirós',
          title: 'Research Assitant @ INESC TEC',
          img: 'ruben-queiros.jpg',
          bio: 'Rúben Queirós has received the MSc degree in Electrical and Computer Engineering in 2020 and is currently pursuing a PhD in the Doctoral Programme in Electrical and Computer Engineering (PDEEC), both at the Faculty of Engineering of the University of Porto (FEUP). Currently working as a research assistant in Wireless Networks (WiN) group from the Centre of Telecommunications and Multimedia (CTM) at INESC TEC, his main research interests include Wi-Fi Link Adaptation, Deep Reinforcement Learning.',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/rubenqueiros/',
            },
          ],
        },
        {
          name: 'João Loureiro',
          title: 'Research Assitant @ INESC TEC',
          img: 'joao-loureiro.jpg',
          bio: 'João Pedro Loureiro received a MSc degree in Electrical and Computer Engineering from the University of Porto (FEUP). He is currently pursuing a PhD in Electrical and Computer Engineering and working as a Researcher in the Wireless Networks research group (WiN) from the Centre for Telecommunications and Multimedia (CTM) at INESC TEC. His research interests include underwater communications and multimodal wireless networks.',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/jp-loureiro/',
            },
          ],
        },
        {
          name: 'Tomé Albuquerque',
          title: 'Research Assistant @ INESC TEC',
          img: 'tome-albuquerque.jpg',
          bio: 'Tomé Albuquerque received a B.Sc. degree in biochemistry from University of Aveiro and a M.S degree in biomedical engineering from the Faculty of Engineering of the University of Porto. He is currently pursuing the Ph.D. degree also with University of Porto. He is also a Researcher at INESC TEC since 2019. His main research interests include machine learning, computer vision and medical imaging diagnonsis in decision support systems.',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/tom%C3%A9-albuquerque-ba087170/',
            },
          ],
        },
        {
          name: 'Eduardo Castro',
          title: 'Research Assistant @ INESC TEC',
          img: 'eduardo-castro.jpg',
          bio: 'Eduardo Castro is a PhD student at the Faculty of Engeneering of the University of Porto. His research work is conducted in the Visual Computing & Machine Intelligence (VCMI) group, at INESC TEC. His research interests include machine learning, computer vision, automatic breast cancer screening systems and fingerprint biometrics',
          social: [
            {
              name: 'website',
              url: 'https://eduardo-castro.github.io/',
            },
          ],
        },
        {
          name: 'Pedro Neto',
          title: 'Researcher @ INESC TEC',
          img: 'pedro-neto.jpg',
          bio: 'Pedro Neto is a second-year PhD candidate in Electrical and Computer Engineering at Faculdade de Engenharia da Universidade do Porto (FEUP) and a researcher at Instituto de Engenharia, Sistemas e Computadores, Tecnologia e Ciência (INESC TEC). His PhD, “Explainable Artificial Intelligence for Fair and Transparent Biometrics”, is directed towards the problems exhibited by current biometric systems, such as, race and gender biased in face recognition. Pedro also conducts research for the CADPath.AI project, which aims to build a deep learning method for automated diagnosis of colorectal cancer from whole slide images. Pedro holds a MSc degree with honors in Computer Science awarded by Aalto University, Finland, and a BSc degree with honors in Software/Informatics Engineering awarded by the Instituto Superior de Engenharia do Porto (ISEP)',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/pedro-neto-a94862106/',
            },
            {
              name: 'website',
              url: 'https://netopedro.github.io/',
            },
          ],
        },
        {
          name: 'Isabel Rio-Torto',
          title: 'Research Assistant @ INESC TEC',
          img: 'isabel-rio-torto.jpg',
          bio: 'Isabel Rio-Torto is a second-year PhD candidate in Computer Science at Faculdade de Ciências da Universidade do Porto (FCUP) and a researcher at Instituto de Engenharia, Sistemas e Computadores, Tecnologia e Ciência (INESC TEC). Her PhD, “Self-explanatory computer-aided diagnosis with limited supervision”, focuses on tackling the two main issues that prevent deep learning models from being deployed to the clinics: the need for large amounts of labelled data and lack of explainability. She is also an invited teaching assistant at Faculdade de Engenharia da Universidade do Porto (FEUP). Isabel previously studied Electrical and Computers Engineering at FEUP, where she developed her master thesis “Producing Decisions and Explanations: A Joint Approach Towards Explainable CNNs”, which won her the 1st place of the 2020 Fraunhofer Portugal Challenge (MSc category) and the Best 2020 Master Thesis Award by Associação Portuguesa de Reconhecimento de Padrões (APRP).',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com',
            },
          ],
        },
        {
          name: 'Luís Teixeira',
          title: 'Senior Researcher @ INESC TEC',
          img: 'luis-teixeira.jpg',
          bio: 'Luís F. Teixeira is an Assistant Professor at the Department of Informatics Engineering, Faculdade de Engenharia da Universidade do Porto (FEUP) and a Senior Researcher of the Visual Computing and Machine Intelligence (VCMI) research group from the Center for Telecommunications and Multimedia at INESC TEC. Previously he was a Senior Scientist at Fraunhofer AICOS and the President of the APRP, the Portuguese Association for Pattern Recognition. His main research topics are computer vision, machine learning and human-centered computing.',
          social: [
            {
              name: 'linkedin',
              url: 'https://linkedin.com/in/luisfteixeira',
            },
          ],
        },
        {
          name: 'Luís Vilaça',
          title: 'Research Assistant @ INESC TEC',
          img: 'luis-vilaca.jpg',
          bio: 'Luís Vilaça is a research assistant at INESC TEC and conducts his research at the Multimedia and Communications Technologies group. Currently, he is also in the 1st year of the PhD in Electrical and Computer Engineering at FEUP. His research interests include computer vision and multimodal machine learning for multimedia content recommendation.',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/luis-vilaca/',
            },
          ],
        },
        {
          name: 'Tiago Gonçalves',
          title: 'Researcher @ INESC TEC',
          img: 'tiago-goncalves.jpg',
          bio: 'Tiago Gonçalves received his MSc in Bioengineering (Biomedical Engineering) from Faculdade de Engenharia da Universidade do Porto (FEUP) in 2019. Currently, he is a PhD Candidate in Electrical and Computer Engineering at FEUP and a research assistant at the Centre for Telecommunications and Multimedia of INESC TEC with the Visual Computing & Machine Intelligence (VCMI) Research Group. His research interests include machine learning, explainable artificial intelligence (in-model approaches), computer vision, medical decision support systems, and machine learning deployment',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/tiagofilipegoncalves/',
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
          title: 'Associate Director @ INESC TEC',
          img: 'manuel-ricardo.jpg',
          bio: 'Manuel Alberto Pereira Ricardo has Licenciatura, M.Sc. and PhD (2000) degrees in Electrical and Computer Engineering (EEC), major of Telecommunications, from the Faculty of Engineering of the University of Porto (FEUP). Manuel Ricardo is currently a full professor at FEUP where he teaches courses on Mobile Communications and Computer Networks at FEUP.',
          social: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/manuel-ricardo-211523/',
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
              url: 'https://www.linkedin.com/in/luis-pessoa-310ab314/',
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
              url: 'https://www.linkedin.com/in/joanatavar/',
            },
          ],
        },
      ],
    }
  },

  computed: {
    orderedSpeakers() {
      return [...this.speakers].sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    },
  },
}
</script>

<style>
</style>