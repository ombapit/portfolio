<template>
  <div>
    <HeaderMenuSingle :is-home="isHome" />
    <Nuxt />
    <FooterSingle />
  </div>
</template>

<script>
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
        { hid: 'og:title', name: 'og:title', content: 'Blog' },
        { hid: 'og:description', name: 'og:description', content: 'Bagian Website ini ditujukan untuk Sharing pengalaman dari semua hal tentang gw' },
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
