import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'lib-flexible/flexible'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css';
import "@/style/index.scss"
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(ElementUI);
Vue.use(Vant);
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.filter('year', function (time) {
  let data = moment(time).format('YYYY-MM-DD  HH:mm:SS')
  return data
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
