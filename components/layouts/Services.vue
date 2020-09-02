<template>
  <div>
    <!--/ Section Services Star /-->
    <section id="service" class="services-mf route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Services
              </h3>
              <p class="subtitle-a">
                Kategori skill yang diimplementasi
              </p>
              <div class="line-mf" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class="ion-code-working" /></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">
                  Backend
                </h2>
                <p class="s-description text-center">
                  Teknologi yang digunakan antara lain PHP (Laravel/CI), Nodejs (Express)
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class="ion-monitor" /></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">
                  Frontend
                </h2>
                <p class="s-description text-center">
                  Teknologi yang digunakan saat ini antara lain: Vue Dan React
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class="ion-filing" /></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">
                  Database
                </h2>
                <p class="s-description text-center">
                  RDMS: Mysql, Postgre, Oracle <br>
                  NoSql: MongoDb, HBase, Solr, Elasticsearch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Section Services End /-->

    <div class="section-counter paralax-mf bg-image counter-image">
      <div class="overlay-mf" />
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <div class="counter-box counter-box pt-4 pt-md-0">
              <div class="counter-ico">
                <span class="ico-circle"><i class="ion-checkmark-round" /></span>
              </div>
              <div class="counter-num">
                <p class="counter">
                  > 10
                </p>
                <span class="counter-text">WORKS COMPLETED</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-6">
            <div class="counter-box pt-4 pt-md-0">
              <div class="counter-ico">
                <span class="ico-circle"><i class="ion-ios-calendar-outline" /></span>
              </div>
              <div class="counter-num">
                <p class="counter">
                  > 13
                </p>
                <span class="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .counter-image {
    background-image: url('~assets/img/counters-bg.webp');
  }
</style>
