<template>
  <div id="app">
    <div v-if="checkIsLogin()">
      <img alt="Dashboard logo" class="logo" src="./assets/dashboard-icon.png"/>
      <login-form
        v-on:alert="showAlert"
        v-on:set_user="setUser"
        v-on:set_state="setState"
      ></login-form>
    </div>
    <div v-if="checkIsRegister()">
      <img alt="Dashboard logo" class="logo" src="./assets/dashboard-icon.png"/>
      <register-form
        v-on:alert="showAlert"
        v-on:set_user="setUser"
        v-on:set_state="setState"
      ></register-form>
    </div>
    <div v-if="checkIsLogged()">
      <p>
        <home
          v-on:alert="showAlert"
          v-on:set_user="setUser"
          v-on:set_state="setState"
          :user="user"
        ></home>
      </p>
    </div>
    <!-- ALERT -->
    <b-alert
      id="alert"
      :show="dismissCountDown"
      dismissible
      :variant="variant"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{ alert_msg }}</p>
      <b-progress
        :variant="variant"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import Home from './components/Home.vue'

const State = Object.freeze({ isLogin: 1, isRegister: 2, isLogged: 3});
export default {
  name: 'App',
  created() {
    document.title = "Dashboard"
  },
  components: {
    LoginForm,
    RegisterForm,
    Home
  },
  data() {
    return {
      user: {
          id: 0,
          username: 'test',
          mail: 'tast',
          pass: 'tost',
      },
      state: State.isLogin,
      variant: 'warning',
      alert_msg: 'alert',
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    setState(value) {
      if (value == "isLogged") {
        this.state = State.isLogged
      } else if (value == "isRegister") {
        this.state = State.isRegister
      } else {
        this.state = State.isLogin
      }
    },
    setUser(new_user) {
      this.user.id = new_user.id
      this.user.username = new_user.username
      this.user.mail = new_user.mail
      this.user.pass = new_user.pass
    },
    checkIsLogin() {
      return this.state == State.isLogin;
    },
    checkIsRegister() {
      return this.state == State.isRegister;
    },
    checkIsLogged() {
      return this.state == State.isLogged;
    },
    showAlert(variant, msg) {
      this.alert_msg = msg
      this.variant = variant
      this.dismissCountDown = this.dismissSecs
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
  }
}
</script>

<style>
.logo {
  width: 200px;
  height: 200px;
  margin-top: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#alert {
  z-index: 20;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
