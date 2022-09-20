<template>
  <div>
    <b-sidebar
    visible="true"
    shadow
    sidebar-class="border-right border-dark"
    bg-variant="secondary"
    text-variant="light"
    no-header
    z-index=10
    >
      <div id="sidebar-content" class="px-3 py-2">
        <b-button-group id="sidebar-btngroup" vertical size=lg>
          <b-button @click="crypto" variant="dark">Crypto</b-button>
          <b-button @click="gouv" variant="dark">France</b-button>
          <b-button @click="entertainment" variant="dark">Entertainment</b-button>
        </b-button-group>
      </div>
    </b-sidebar>
    <div>
</div>

  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
  },
  methods: {
    crypto() {
      this.$emit('set_service', "crypto");
    },
    gouv() {
      this.$emit('set_service', "gouv");
    },
    entertainment() {
      this.$emit('set_service', "entertainment");
    }
  }
}
</script>

<style>
#sidebar-content {
    margin-top: 100px;
}
#sidebar-btngroup {
  width: 100%;
}
</style>