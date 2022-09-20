<template>
  <div>
      <b-card
      title="Bitcoin rate"
      img-src="https://pic.clubic.com/v1/images/1826389/raw?fit=max&width=1200&hash=d3910999a3ead5771023c496f299183f96b25805"
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
          {{ bitcoins_rate.usd }}
        </div>
        <div v-if="config.eur">
          {{ bitcoins_rate.eur }}
        </div>
      </b-card-text>

      <b-button v-b-modal.modal-bitcoinrate-config variant="primary">Configure</b-button>
      <b-modal id="modal-bitcoinrate-config" title="Configure" hide-footer >
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
  name: 'BitcoinRate',
  props: {
  },
  components: {
  },
  created() {
    this.set_bitcoins_current_rate();
  },
  data() {
    return {
      bitcoins_rate: {
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
    set_bitcoins_current_rate() {
      this.axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          const usd = response.data.bpi.USD
          const eur = response.data.bpi.EUR
          this.bitcoins_rate.usd = usd.rate +" "+ usd.code
          this.bitcoins_rate.eur = eur.rate +" "+ eur.code
          setTimeout(this.set_bitcoins_current_rate, this.config.refresh);
        })
    }
  }
}
</script>

<style scoped>
</style>
