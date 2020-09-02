<template>
  <section class="sect-pt4">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="box-shadow-full">
            <h1>{{ list.title }}</h1>
            <div class="author">
              <div>
                <img src="~assets/img/testimonial-2.webp" alt="" class="avatar rounded-circle">
              </div>
              <div>
                <div>
                  <span class="author">David Suwandi</span>
                </div>
                <span>
                  {{ this.$global.dateIndo(list.created_at) }} - {{ list.duration_read }} read
                </span>
              </div>
            </div>
            <div class="content">
              <img :src="list.image_url" :alt="list.title" class="img-fluid">
              <p class="p" v-html="list.content" />
              Catetory: {{ list.category_name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      slug: this.$route.params.slug,
      list: {}
    }
  },
  created () {
    const lists = this.$store.state.blogs.list
    const list = lists.find(el => el.slug === this.slug)
    this.list = list
  },
  head () {
    return {
      title: 'Blog - ' + this.list.title
    }
  }
}
</script>

<style scoped>
  .box-shadow-full {
    padding-top: 2rem;
  }
  .author {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .author img {
    width: 45px;
    height: 45px;
  }
  .content {
    width: 70%;
    margin: auto;
  }
  .content img {
    display: block;
    margin: auto;
  }
  .content .p {
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    .content {
      width: 100%;
    }
  }
</style>
