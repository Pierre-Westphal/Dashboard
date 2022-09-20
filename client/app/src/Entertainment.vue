<template>
  <div>
    <b-card-group deck>
      <ChuckNorris />
      <Bored />
    </b-card-group>
  </div>
</template>

<script>
import ChuckNorris from './ChuckNorris.vue'
import Bored from './Bored.vue'
export default {
  name: 'Entertainment',
  props: {
  },
  components: {
      ChuckNorris,
      Bored
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
