import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./js"
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.use(VueVirtualScroller)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
