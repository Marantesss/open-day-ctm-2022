const baseUrl = 'https://opendayctm.inesctec.pt';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Open Day CTM 2022',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Center for Telecommunications and Multimedia (CTM) is one of INESC TEC’s many research centers. This event, the CTM Open Day aims to showcase the variety and quality of the technical and scientific work undertaken by CTM and its collaborators.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@marantesss' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: baseUrl,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Open Day CTM 2022',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'The Center for Telecommunications and Multimedia (CTM) is one of INESC TEC’s many research centers. This event, the CTM Open Day aims to showcase the variety and quality of the technical and scientific work undertaken by CTM and its collaborators.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${baseUrl}/social-card.jpg`,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Open Day CTM 2022',
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Open Day CTM 2022',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseUrl,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Open Day CTM 2022',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'The Center for Telecommunications and Multimedia (CTM) is one of INESC TEC’s many research centers. This event, the CTM Open Day aims to showcase the variety and quality of the technical and scientific work undertaken by CTM and its collaborators.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${baseUrl}/social-card.jpg`,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${baseUrl}/social-card.jpg`,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Open Day CTM 2022',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
