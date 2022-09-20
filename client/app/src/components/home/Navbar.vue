<template>
  <div>
    <b-navbar id="navbar" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <img alt="Dashboard logo" id="little_logo" src="../../assets/dashboard-icon.png"/>
      </b-navbar-brand>
      <b-navbar-brand>Dashboard</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>{{ username }}</em>
            </template>
            <b-dropdown-item @click="signout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    username: String
  },
  methods: {
    signout() {
      this.$emit('signout');
    }
  }
}
</script>

<style>
#navbar {
  z-index: 11;
}
#little_logo {
  width: 50px;
  height: 50px;
}
</style>