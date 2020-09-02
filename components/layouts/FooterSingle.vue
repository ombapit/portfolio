<template>
  <div>
    <!--/ Section Contact-Footer Star /-->
    <section class="paralax-mf footer-paralax bg-image sect-mt4 route footer-image">
      <div class="overlay-mf" />
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="copyright-box">
                <p class="copyright">
                  &copy; Copyright <strong>Ombapit</strong>. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>

    <scrollactive
      class="my-nav"
      active-class="active"
      :offset="offset"
    >
      <transition name="fade">
        <a v-if="btop" href="#home" class="back-to-top scrollactive-item"><i class="fa fa-chevron-up" /></a>
      </transition>
    </scrollactive>
    <!--<div id="preloader"></div>-->
  </div>
</template>

<script>
export default {
  props: {
    btop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      offset: 20
    }
  }
}
</script>

<style scoped>
  .footer-image {
    background-image: url('~assets/img/overlay-bg.webp');
  }

  .fade-enter-active {
    transition: all .2s ease;
    opacity: 0;
  }
  .fade-leave-active {
    transition: all .7s ease;
    opacity: 0;
  }
</style>
