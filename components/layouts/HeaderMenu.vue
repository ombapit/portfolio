<template>
  <div>
    <!--/ Nav Star /-->
    <nav id="mainNav" class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" :class="reduceClass">
      <div class="container">
        <a class="navbar-brand js-scroll" href="http://davidsuwandi.tk" @click.prevent="">Omba's Journey</a>
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
                  <a class="nav-link js-scroll scrollactive-item" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll scrollactive-item" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll scrollactive-item" href="#service">Services</a>
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link js-scroll scrollactive-item" href="#work">Work</a>
                </li> -->
                <li class="nav-item">
                  <a class="nav-link js-scroll scrollactive-item" href="#blog">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll scrollactive-item" href="#contact">Contact</a>
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
    reduce: {
      type: String,
      default: null
    },
    isHome: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      offset: 80,
      reduceClass: '',
      togglerCollapsed: 'collapsed',
      togglerShow: ''
    }
  },
  watch: {
    // whenever question changes, this function will run
    reduce () {
      this.reduceClass = this.reduce
    }
  },
  methods: {
    toggler () {
      if (this.togglerCollapsed === 'collapsed') {
        this.reduceClass = 'navbar-reduce'
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
