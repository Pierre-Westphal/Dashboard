<template>
  <div id="home">
    <Navbar
      :username="user.username"
      v-on:signout="signout"
    />
    <Sidebar v-on:set_service="setService" />
    <Content :service="service" />
  </div>
</template>

<script>
import Navbar from './home/Navbar.vue'
import Sidebar from './home/Sidebar.vue'
import Content from './home/Content.vue'

export default {
  name: 'Home',
  props: {
    user: Object
  },
  components: {
    Navbar,
    Sidebar,
    Content
  },
  data() {
    return {
      service: "crypto"
    }
  },
  methods: {
    setService(service) {
      this.service = service;
    },
    signout () {
      this.user.id = 0;
      this.user.username = '';
      this.user.mail = '';
      this.user.pass = '';
      this.$emit('alert', "success", "See you soon :)");
      this.$emit('set_user', this.user);
      this.$emit('set_state', "isLogin");
    }
  }
}
</script>

<style scoped>
#home {
  background-color: #999;
  min-height: 100vh;
}
</style>
