<template>
  <div class="home">
    <!-- 搜索部分 -->
    <Search/>
    <!-- 顶部导航条部份 -->
    <TopNav/>
    <!-- banner -->
    <Banner/>
    <!-- 10个 导航 -->
    <NavList/>
    <!-- 商品列表部分 -->
    <GoodsList/>
    <!-- tab切换 -->
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Search from '@/components/common/Search.vue'
import Banner from '@/components/Home/Banner.vue'
import NavList from '@/components/Home/NavList.vue'
import TopNav from '@/components/Home/TopNav.vue'
import GoodsList from '@/components/Home/GoodsList.vue'
export default {
  name: 'Home',
  components: {
    Tabbar,Search,Banner,NavList,TopNav,GoodsList
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  background: #de58b7;
}
</style>