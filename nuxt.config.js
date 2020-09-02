
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/bootstrap/css/bootstrap.min.css',
    '~/assets/css/font-awesome/css/font-awesome.min.css',
    '~/assets/css/animate/animate.min.css',
    '~/assets/css/ionicons/css/ionicons.min.css',
    '~/assets/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~/plugins/global.js' },
    { src: '~/plugins/vue-typer', ssr: false },
    { src: '~/plugins/scrollactive'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    '@nuxtjs/pwa'
    // Doc: https://github.com/nuxt/content
    // '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL
    // proxy: true
  },
  // proxy: {
  //   '/api': {
  //     target: process.env.BASE_URL,
  //     pathRewrite: {
  //       '^/api' : '/'
  //       }
  //     }
  // },
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  // content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true
  }
}
