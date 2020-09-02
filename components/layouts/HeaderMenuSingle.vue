<template>
  <div>
    <!--/ Nav Star /-->
    <nav id="mainNav" class="navbar navbar-b navbar-trans navbar-expand-md fixed-top navbar-reduce">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">
          Omba's Journey
        </nuxt-link>
        <button
          class="navbar-toggler"
          :class="togglerCollapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggler"
        >
          <span />
          <span />
          <span />
        </button>
        <transition name="fade">
          <div id="navbarDefault" class="navbar-collapse justify-content-end collapse" :class="togglerShow">
            <scrollactive
              class="my-nav"
              active-class="active"
              :offset="offset"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link">
                    Home
                  </nuxt-link>
                </li>
              </ul>
            </scrollactive>
          </div>
        </transition>
      </div>
    </nav>
    <!--/ Nav End /-->
  </div>
</template>

<script>
export default {
  props: {
    isHome: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      offset: 80,
      togglerCollapsed: 'collapsed',
      togglerShow: ''
    }
  },
  watch: {
  },
  methods: {
    toggler () {
      if (this.togglerCollapsed === 'collapsed') {
        this.togglerCollapsed = ''
        this.togglerShow = 'show'
      } else {
        this.togglerCollapsed = 'collapsed'
        this.togglerShow = ''
      }
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
    height: 240px;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    height: 0;
    opacity: 0;
  }
</style>
