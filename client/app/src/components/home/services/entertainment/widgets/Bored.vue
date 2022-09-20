<template>
  <div>
      <b-card
      title="Bored"
      img-src="https://images.theconversation.com/files/138670/original/image-20160921-21723-zvi9hu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
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

      <b-button v-b-modal.modal-bored-config variant="primary">Configure</b-button>
      <b-modal id="modal-bored-config" title="Configure" hide-footer >
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
  name: 'Bored',
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
        refresh: 3000
      }
    }
  },
  methods: {
    load_facts() {
      this.axios
        .get('https://www.boredapi.com/api/activity')
        .then(response => {
          const data = response.data
          this.fact = data.type +' : '+ data.activity
        })
      setTimeout(this.load_facts, this.config.refresh);
    }
  }
}
</script>

<style scoped>
</style>
