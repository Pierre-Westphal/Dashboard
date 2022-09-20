<template>
  <div>
      <b-card
      title="Communes"
      img-src="https://barisisauxbois.fr/wp-content/uploads/2020/09/Commune-de-Barisis-aux-Bois-_-Album-fleurs-dete-0184.jpg"
      img-alt="Image"
      img-top
      img-height="200px"
      img-width="200px"
      style="width: 20rem; heigth: 30rem;"
      tag="article"
      class="mb-2"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>
        {{ cur_commune }}
        <br>
        {{ population }}
      </b-card-text>

      <b-button v-b-modal.modal-communes-config variant="primary">Configure</b-button>
      <b-modal id="modal-communes-config" title="Configure" hide-footer >
        <b-row class="my-1">
          <b-col sm="5">
            <label for="input-refresh">Refresh rate:</label>
          </b-col>
          <b-col sm="7">
            <b-form-input type="number" id="input-refresh" v-model="config.refresh" />
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="5">
            <label for="input-refresh">Scroll speed:</label>
          </b-col>
          <b-col sm="7">
            <b-form-input type="number" id="input-refresh" v-model="config.scrollspeed" />
          </b-col>
        </b-row>
      </b-modal>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Communes',
  props: {
  },
  components: {
  },
  created() {
    this.load_communes();
    this.walkthrought();
  },
  data() {
    return {
      index: 0,
      cur_commune: 'loading',
      population: 'loading',
      config: {
        refresh: 10000,
        scrollspeed: 1000
      }
    }
  },
  methods: {
    load_communes() {
      this.axios
        .get('https://geo.api.gouv.fr/communes')
        .then(response => {
          const data = response.data
          this.list = data
        })
      setTimeout(this.load_communes, this.config.refresh);
    },
    walkthrought() {
      if (this.list == undefined) {
        this.cur_commune = 'loading';
      } else {
        if (this.index >= this.list.length) {
          this.index = 0;
        }
        const commune = this.list[this.index]
        this.cur_commune = '('+commune.codeRegion+') '+commune.nom;
        this.population = 'pop: '+ commune.population;
        this.index++
      }
      setTimeout(this.walkthrought, this.config.scrollspeed);
    }
  }
}
</script>

<style scoped>
</style>
