<template>
  <div>
      <b-card
      title="Ethereum rate"
      img-src="https://cryptonaute.fr/wp-content/uploads/2020/08/ethereum-min-800x400.jpeg"
      img-alt="Image"
      img-top
      img-height="150px"
      img-width="200px"
      style="width: 20rem; heigth: 30rem;"
      tag="article"
      class="mb-2"
      bg-variant="dark"
      text-variant="white" 
    >
      <b-card-text>
        <div v-if="config.usd" >
          {{ ethereum_rate.usd }}
        </div>
        <div v-if="config.eur">
          {{ ethereum_rate.eur }}
        </div>
      </b-card-text>

      <b-button v-b-modal.modal-ethereumrate-config variant="primary">Configure</b-button>
      <b-modal id="modal-ethereumrate-config" title="Configure" hide-footer >
        <b-form-checkbox v-model="config.usd" >
          USD
        </b-form-checkbox>
        <b-form-checkbox v-model="config.eur" >
          EUR
        </b-form-checkbox>
        <b-row class="my-1">
          <b-col sm="5">
            <label for="input-refresh">Refresh rate:</label>
          </b-col>
          <b-col sm="7">
            <b-form-input type="number" id="input-refresh" v-model="config.refresh" />
          </b-col>
        </b-row>
      </b-modal>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'EthereumRate',
  props: {
  },
  components: {
  },
  created() {
    this.set_ethereum_current_rate();
  },
  data() {
    return {
      ethereum_rate: {
        usd: 'loading',
        eur: 'loading'
      },
      config: {
        refresh: 5000,
        usd: true,
        eur: false,
      }
    }
  },
  methods: {
    set_ethereum_current_rate() {
      if (this.config.usd) {
        this.axios
        .get('https://api.coinbase.com/v2/prices/ETH-USD/spot')
        .then(response => {
          const data = response.data.data
          this.ethereum_rate.usd = data.amount +" "+ data.currency
        })
      }
      if (this.config.eur) {
        this.axios
        .get('https://api.coinbase.com/v2/prices/ETH-EUR/spot')
        .then(response => {
          const data = response.data.data
          this.ethereum_rate.eur = data.amount +" "+ data.currency
        })
      }
      setTimeout(this.set_ethereum_current_rate, this.config.refresh);
    }
  }
}
</script>

<style scoped>
</style>
