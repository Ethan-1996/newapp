import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',   //首页
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/Home.vue')
  },
  {
    path: '/nine',
    name: 'Nine',         // 9.9包邮
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nine/Nine.vue')
  },
  {
    path: '/list',
    name: 'List',          //分类
    component: () => import( '../views/List/List.vue')
  },
  {
    path: '/mine',
    name: 'Mine',           //我的
    component: () => import( '../views/Mine/Mine.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
