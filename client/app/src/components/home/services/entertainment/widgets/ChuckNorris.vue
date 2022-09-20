<template>
  <div>
      <b-card
      title="Chuck Norris Facts"
      img-src="https://2.bp.blogspot.com/-lBzYgD_Az_s/VDJ7m7r6CXI/AAAAAAAABoc/A5QsRHumocw/s1600/chuck-norris-facts-les-meilleurs.jpg"
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
        {{ fact }}
      </b-card-text>

      <b-button v-b-modal.modal-chuck-norris-config variant="primary">Configure</b-button>
      <b-modal id="modal-chuck-norris-config" title="Configure" hide-footer >
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
  name: 'ChuckNorris',
  props: {
  },
  components: {
  },
  created() {
    this.load_facts();
  },
  data() {
    return {
      index: 0,
      fact: 'loading',
      config: {
        refresh: 8000
      }
    }
  },
  methods: {
    load_facts() {
      this.axios
        .get('https://api.chucknorris.io/jokes/random')
        .then(response => {
          const data = response.data
          this.fact = data.value
        })
      setTimeout(this.load_facts, this.config.refresh);
    }
  }
}
</script>

<style scoped>
</style>
