<template>
  <div>
    <b-card-group deck>
      <BitcoinRate />
      <EthereumRate />
    </b-card-group>
  </div>
</template>

<script>
import BitcoinRate from './widgets/BitcoinRate.vue'
import EthereumRate from './widgets/EthereumRate.vue'
export default {
  name: 'Crypto',
  props: {
  },
  components: {
      BitcoinRate,
      EthereumRate
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
