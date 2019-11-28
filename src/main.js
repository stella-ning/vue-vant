import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';
import axiosFn from '@/api/axios'
import apiList from '@/api/apiList';

Vue.use(Vant);

Vue.config.productionTip = false;
Vue.prototype.request = axiosFn.request;
// 注册全局函数（包括api）
Object.keys(apiList).forEach(key => {
  Vue.prototype[key] = apiList[key]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
