<template>
  <div>
    <b-card-group deck>
      <Holidays />
      <Communes />
    </b-card-group>
  </div>
</template>

<script>
import Holidays from './Holidays.vue'
import Communes from './Communes.vue'
export default {
  name: 'Gouv',
  props: {
  },
  components: {
      Holidays,
      Communes
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
