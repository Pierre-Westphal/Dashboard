import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

function getUrl() {
  var url = window.location.host;
  const index = url.lastIndexOf(":");
  var ret;
  if (index != -1) {
      ret = url.substring(0, index);
  } else {
      ret = url
  }
  return ret;
}

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.dashboard_api = "http://"+getUrl()+":8080"

new Vue({
  render: h => h(App),
}).$mount('#app')
