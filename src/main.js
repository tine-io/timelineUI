import Vue from 'vue'
import App from './App.vue'
import router from './router'
import authentication from "@/plugins/authentication"
import vuetify from './plugins/vuetify'
import 'leaflet/dist/leaflet.css';
Vue.config.productionTip = false
Vue.use(authentication)

Vue.$keycloak
  .init({ checkLoginIframe: false })
  .then(() => {
    new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  })