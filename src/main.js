import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入重置样式文件
import './stylesheets/reset.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// import style
import 'swiper/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

//设置基准值lib-flexinle
import 'amfe-flexible'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

  
Vue.prototype.datainfo = {
    version:'v1.1.0',// API接口版本号
    appKey:'5db29d7f3e2b7',// 应用分配的appKey
};

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
