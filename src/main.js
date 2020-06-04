import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入重置样式文件
import './stylesheets/reset.css';


//设置基准值lib-flexinle
import 'amfe-flexible'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
