<template>
  <div id="content">
    <Crypto v-if="service == 'crypto'" />
    <Gouv v-if="service == 'gouv'" />
    <Entertainment v-if="service == 'entertainment'" />
  </div>
</template>

<script>
import Crypto from './services/crypto/Crypto.vue'
import Gouv from './services/gouv/Gouv.vue'
import Entertainment from './services/entertainment/Entertainment.vue'
export default {
  name: 'Content',
  props: {
    service: String
  },
  components: {
    Crypto,
    Gouv,
    Entertainment
  },
  methods: {
  }
}
</script>

<style scoped>
#content {
  margin-left: 350px;
  margin-top: 10px;
}
</style>