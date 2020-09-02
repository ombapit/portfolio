<template>
  <div>
    <nuxt-link to="/">
      Back
    </nuxt-link>
    <BlogDetail />
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  layout: 'single_page'
}
</script>

<style>
</style>
