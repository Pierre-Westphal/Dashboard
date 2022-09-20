<template>
  <div>
    <h1>Register</h1>
    <b-form id="form" >
      <!-- USERNAME -->
      <b-form-group
        id="input-group-username"
        label="Username:"
        label-for="input-username"
        description=""
      >
        <b-form-input v-model="user.username" type="text" id="input-username" placeholder="Enter your username"></b-form-input>
      </b-form-group>

      <!-- MAIL -->
      <b-form-group
        id="input-group-mail"
        label="Mail:"
        label-for="input-mail"
        description=""
      >
        <b-form-input v-model="user.mail" type="email" id="input-mail" placeholder="Enter your e-mail"></b-form-input>
      </b-form-group>

      <!-- PASSWORD -->
      <b-form-group
        id="input-group-password"
        label="Password:"
        label-for="input-password"
        description=""
      >
        <b-form-input v-model="user.pass" type="password" id="input-password" placeholder="Enter your password"></b-form-input>
      </b-form-group>

      <!-- REPEAT PASSWORD -->
      <b-form-group
        id="input-group-rep-password"
        label="Repeate password:"
        label-for="input-rep-password"
        description=""
      >
        <b-form-input v-model="repeatePass" type="password" id="input-rep-password" placeholder="Repeat previous password"></b-form-input>
      </b-form-group>

      <!-- SUBMIT -->
      <b-button id="signin-btn" @click="toSignin" variant="outline-success">Sign in</b-button>
      <b-button id="signup-btn" @click="submit" variant="primary">Sign up</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      user: {
          id: 0,
          username: '',
          mail: '',
          pass: '',
      },
      repeatePass: ''
    }
  },
  methods: {
    submit() {
      if (this.user.username == "") {
        this.$emit('alert', "danger", "Username is missing");
        return;
      }
      if (this.user.mail == "") {
        this.$emit('alert', "danger", "Mail is missing");
        return;
      }
      if (this.user.pass == "") {
        this.$emit('alert', "danger", "Password is missing");
        return;
      }
      if (this.user.pass != this.repeatePass) {
        this.$emit('alert', "danger", "Passwords mismatch");
        return;
      }
      this.axios
      .post(this.dashboard_api + '/users/create', this.user)
      .then(response => {
        var res = JSON.parse(JSON.stringify(response.data));
        if (res.code == 200) {
          this.user.id = res.content[0].id
          this.user.username = res.content[0].username
          this.user.mail = res.content[0].mail
          this.user.pass = res.content[0].pass
          this.$emit('alert', "success", "Welcome !");
          this.$emit('set_user', this.user);
          this.$emit('set_state', "isLogged");
        } else {
          this.$emit('alert', "danger", res.message);
        }
      })
      .catch(error => {
        this.$emit('alert', "danger", error);
      })
      this.clearForm();
    },
    toSignin() {
      this.$emit('set_state', "isLogin");
    },
    clearForm() {
      this.user.id = 0;
      this.user.username = '';
      this.user.mail = '';
      this.user.pass = '';
      this.repeatePass = '';
    }
  }
}
</script>

<style scoped>
  #form {
    width: 500px;
    margin: auto;
    margin-top: 50px;
  }
  #signin-btn {
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 100px;
  }
  #signup-btn {
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 100px;
  }
</style>
