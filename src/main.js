import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueApexCharts from 'vue-apexcharts'
//import LoadScript from 'vue-plugin-load-script';
 
// Vue.use(LoadScript);

// Vue.loadScript("https://static.landbot.io/landbot-3/landbot-3.0.0.js")
//   .then(() => {
//     Vue.loadScript("bot.js")
//   })
//   .catch(() => {
//     // Failed to fetch script
// });

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
