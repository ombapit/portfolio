<template>
  <!--/ Section Blog Star /-->
  <section id="blog" class="blog-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">
              Blog
            </h3>
            <p class="subtitle-a">
              Pengalaman adalah guru yang berharga
            </p>
            <div class="line-mf" />
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="list in lists" :key="list.id" class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <nuxt-link :to="'/blog/' + list.slug">
                <img :src="list.image_url" :alt="list.title" class="img-fluid">
              </nuxt-link>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">
                    {{ list.category_name }}
                  </h6>
                </div>
              </div>
              <h3 class="card-title">
                <nuxt-link :to="'/blog/' + list.slug">
                  {{ list.title }}
                </nuxt-link>
              </h3>
              <p class="card-description" v-html="$global.trimHtml(list.content, { limit: 200 }).html" />
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img src="~assets/img/testimonial-2.webp" alt="" class="avatar rounded-circle">
                  <span class="author">David Suwandi</span>
                </a>
              </div>
              <div class="post-date">
                <span class="ion-ios-clock-outline" /> {{ list.duration_read }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/ Section Blog End /-->
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('blogs', {
      lists: state => state.list
    })
  }
}
</script>

<style>

</style>
