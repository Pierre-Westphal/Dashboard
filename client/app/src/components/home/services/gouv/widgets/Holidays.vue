<template>
  <div>
      <b-card
      title="Holidays"
      img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VKRvGj5rz5thuhmoTypB41F5Vbf8ZhWUYQ&usqp=CAU"
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
        {{ cur_holliday }}
      </b-card-text>

      <b-button v-b-modal.modal-holidays-config variant="primary">Configure</b-button>
      <b-modal id="modal-holidays-config" title="Configure" hide-footer >
          <p>
            <b>Location:</b> alsace-moselle, guadeloupe, guyane, la-reunion, martinique, mayotte, metropole, nouvelle-caledonie, polynesie-francaise, saint-barthelemy, saint-martin, saint-pierre-et-miquelon, wallis-et-futuna
          </p>
        <b-row class="my-1">
          <b-col sm="5">
            <label for="input-location">Location:</label>
          </b-col>
          <b-col sm="7">
            <b-form-input type="text" id="input-location" v-model="config.location" />
          </b-col>
        </b-row>
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
  name: 'EthereumRate',
  props: {
  },
  components: {
  },
  created() {
    this.load_holidays();
    this.walkthrought();
  },
  data() {
    return {
      index: 0,
      cur_holliday: 'loading',
      config: {
        refresh: 5000,
        scrollspeed: 1000,
        location: 'metropole'
      }
    }
  },
  methods: {
    load_holidays() {
      this.axios
        .get('https://calendrier.api.gouv.fr/jours-feries/'+this.config.location+'.json')
        .then(response => {
          const data = response.data
          this.list = Object.keys(data).map((key) => [String(key), data[key]]);
        })
      setTimeout(this.load_holidays, this.config.refresh);
    },
    walkthrought() {
      if (this.list == undefined) {
        this.cur_holliday = 'loading';
      } else {
        if (this.index >= this.list.length) {
          this.index = 0;
        }
        this.cur_holliday = this.list[this.index][0] +' : '+ this.list[this.index][1];
        this.index++
      }
      setTimeout(this.walkthrought, this.config.scrollspeed);
    }
  }
}
</script>

<style scoped>
</style>
