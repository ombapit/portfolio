<template>
  <div class="contact-mf">
    <div id="contact" class="box-shadow-full">
      <div class="row">
        <div class="col-md-6">
          <div class="title-box-2">
            <h6 class="title-left">
              Send Message
            </h6>
          </div>
          <div>
            <form action="" method="post" role="form" class="contactForm" @submit.prevent="submitForm">
              <div v-show="successMessage" id="sendmessage">
                Your message has been sent. Thank you!
              </div>
              <div v-show="errorMessage" id="errormessage">
                Your message has not been sent. Contact me Further..
              </div>
              <div class="row">
                <div class="col-md-12 mb-3">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    >
                    <div v-show="form.name == ''" class="validation">
                      {{ error.name }}
                    </div>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="text"
                      class="form-control"
                      name="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    >
                    <div v-show="form.email === '' || error.email !== ''" class="validation">
                      {{ error.email }}
                    </div>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-group">
                    <label for="subject">Subject</label>
                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    >
                    <div v-show="form.subject == ''" class="validation">
                      {{ error.subject }}
                    </div>
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      name="message"
                      class="form-control"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    />
                    <div v-show="form.message == ''" class="validation">
                      {{ error.message }}
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <button
                    type="submit"
                    class="button button-a button-big button-rouded"
                    :disabled="btLoading.disabled == 1"
                    v-html="btLoading.text"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="title-box-2 pt-4 pt-md-0">
            <h6 class="title-left">
              Get in Touch
            </h6>
          </div>
          <div class="more-info">
            <p class="lead">
              Jika ada Keperluan, silahkan kontak saya di Whatsapp/Facebook
            </p>
            <ul class="list-ico">
              <li><span class="ion-ios-location" /> Kabupaten Bogor</li>
              <li><span class="ion-ios-telephone" /> +62 85959584514</li>
              <li><span class="ion-email" /> davidsuwandi@gmail.com</li>
            </ul>
          </div>
          <div class="socials">
            <ul>
              <li><a href="https://facebook.com/ombapit"><span class="ico-circle"><i class="ion-social-facebook" /></span></a></li>
              <li><a href="https://instagram.com"><span class="ico-circle"><i class="ion-social-instagram" /></span></a></li>
              <li><a href="https://twitter.com"><span class="ico-circle"><i class="ion-social-twitter" /></span></a></li>
              <li><a href="https://pinteres.com"><span class="ico-circle"><i class="ion-social-pinterest" /></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      btLoading: {
        text: 'Send Message',
        disabled: 0
      },
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      successMessage: false,
      errorMessage: false
    }
  },
  watch: {
    'form.email' (newEmail, oldEmail) {
      if (this.form.email !== '' && !this.validEmail(newEmail)) {
        this.error.email = 'Valid Email is required.'
      } else {
        this.error.email = ''
      }
    }
  },
  methods: {
    async submitForm () {
      this.successMessage = false
      this.errorMessage = false
      this.error.name = ''
      this.error.subject = ''
      this.error.message = ''
      if (this.form.name === '') {
        this.error.name = 'Name is required.'
      }

      if (this.form.email === '') {
        this.error.email = 'Email is required.'
      }

      if (this.form.subject === '') {
        this.error.subject = 'Subject is required.'
      }

      if (this.form.message === '') {
        this.error.message = 'Message is required.'
      }

      if (this.error.name === '' && this.error.email === '' && this.error.subject === '' && this.error.message === '') {
        // kirim email
        this.btLoading.disabled = 1
        this.btLoading.text = 'Send Message <i class="fa fa-spinner fa-spin" />'

        try {
          const resp = await this.$axios.$post('/sendmail', this.form)
          if (resp.status === true) {
            this.successMessage = true
            this.resetForm()
          }
          // console.log('succ' + resp)
        } catch (error) {
          this.errorMessage = true
          // Error
          /* if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            console.log(error.request)
          } else {
            Something happened in setting up the request and triggered an Error
            console.log('Error', error.message)
          } */
        }
        this.btLoading.disabled = 0
        this.btLoading.text = 'Send Message'
      }
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    resetForm () {
      this.form.name = ''
      this.form.email = ''
      this.form.subject = ''
      this.form.message = ''
    }
  }
}
</script>

<style scoped>
  .form-group, label {
    margin-bottom: 0px;
  }
</style>
