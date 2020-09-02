<template>
  <div>
    <!--/ Intro Skew Star /-->
    <div id="home" class="intro route bg-image">
      <div class="overlay-itro" />
      <div class="intro-content display-table">
        <div class="table-cell">
          <div class="container">
            <h1 class="intro-title mb-4">
              I am David Suwandi
            </h1>
            <p class="intro-subtitle">
              <client-only>
                <vue-typer
                  :text="typer"
                  :erase-delay="60"
                  erase-style="backspace"
                />
              </client-only>
            </p>
            <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
          </div>
        </div>
      </div>
    </div>
    <!--/ Intro Skew End /-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      typer: ['Frontend Developer', 'Backend Developer', 'Big Data Enthusiast']
    }
  }
}
</script>

<style scoped>
  .bg-image {
    background-image: url('~assets/img/intro-bg.webp');
  }
</style>
