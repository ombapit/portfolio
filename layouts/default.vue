<template>
  <div>
    <HeaderMenu :reduce="reduce" :is-home="isHome" />
    <Nuxt />
    <Footer :btop="bTop" />
  </div>
</template>

<script>
let pixelTop = 0

export default {
  data () {
    return {
      reduce: '',
      isHome: true,
      bTop: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll(), true)
  },
  methods: {
    handleScroll () {
      const xthis = this
      window.onscroll = function (e) {
        pixelTop = xthis.$global.handleReduce()
        xthis.reduce = pixelTop
        if (pixelTop === 'navbar-trans') {
          xthis.isHome = true
        } else {
          xthis.isHome = false
        }

        // handle button btop
        xthis.bTop = xthis.$global.handleBTop()
      }
    }
  },
  head () {
    return {
      title: 'Omba Site',
      meta: [
        { hid: 'og:url', name: 'og:url', content: 'https://davidsuwandi.xyz' },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: 'Welcome to Ombapit Site' },
        { hid: 'og:description', name: 'og:description', content: 'Website ini ditujukan untuk Portfolio dan Sharing pengalaman dari semua hal tentang gw' },
        { hid: 'og:image', name: 'og:image', content: 'http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg' }
      ],
      bodyAttrs: {
        id: 'page-top'
      }
    }
  }
}
</script>

<style>
</style>
