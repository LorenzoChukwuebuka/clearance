<template>
  <main>
    <mainnav msg="Admin login" />
    <div class="container">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <div class=" bg-dark" v-if="errors.length">
              <span v-for="(err, index) in errors" :key="index">
                <b-alert show variant="danger" dismissible>
                  {{ err }}
                </b-alert>
              </span>
            </div>
            <div class="card px-5 py-5" id="form1">
              <div class="form-data">
                <div class="forms-inputs mb-4">
                  <span> Username</span>
                  <input
                    autocomplete="off"
                    type="text"
                    v-model="user"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': !validuser(user) && userBlured
                    }"
                    v-on:blur="userBlured = true"
                  />
                  <div class="invalid-feedback">A Username is required!</div>
                </div>
                <div class="forms-inputs mb-4">
                  <span>Password</span>
                  <input
                    autocomplete="off"
                    type="password"
                    v-model="password"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': !validPassword(password) && passwordBlured
                    }"
                    v-on:blur="passwordBlured = true"
                  />
                  <div class="invalid-feedback">
                    Password must be 5 character!
                  </div>
                </div>
                <div class="mb-3">
                  <button
                    @click.stop.prevent="submit"
                    class="btn btn-dark w-100"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import mainnav from '@/components/mainnav.vue'
export default {
  name: 'adminhome',
  components: {
    mainnav
  },
  data () {
    return {
      user: '',
      userBlured: false,
      valid: false,
      submitted: false,
      password: '',
      passwordBlured: false,
      errors: []
    }
  },
  methods: {
    validate () {
      this.userBlured = true
      this.passwordBlured = true
      if (this.validuser(this.user) && this.validPassword(this.password)) {
        this.valid = true
      }
    },

    validuser (user) {
      if (user.length >= 5) {
        return true
      }
    },

    validPassword (password) {
      if (password.length >= 5) {
        return true
      }
    },

    submit () {
      this.validate()
      if (this.valid) {
        this.submitted = true
        let data = new Object()
        data.username = this.user
        data.password = this.password

        this.$http
          .post(`${this.$PORT}adminlog`, data)
          .then(res => {
            if (
              res.data.message === 'user not found' ||
              res.data.message === 'Password do not match'
            ) {
              this.errors.push(res.data.message)
            } else if (res.data.message === 'login successful') {
              if (res.data.type === 0) {
                localStorage.setItem('Id', res.data.id)
                localStorage.setItem('name', res.data.username)
                this.$router.push('/admindash')
              } else {
                console.log('greater than zero for now')
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>
<style scoped>
body {
  background: #000;
}

.card {
  border: none;
  height: 320px;
}

.forms-inputs {
  position: relative;
}

.forms-inputs span {
  position: absolute;
  top: -18px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px;
}

.forms-inputs input {
  height: 50px;
  border: 2px solid #eee;
}

.forms-inputs input:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid #000;
}

.btn {
  height: 50px;
}

.success-data {
  display: flex;
  flex-direction: column;
}

.bxs-badge-check {
  font-size: 90px;
}
</style>
