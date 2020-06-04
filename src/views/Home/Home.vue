<template>
  <div class="home">
    <!-- 搜索部分 -->
    <Search/>

    <!-- banner -->
    <Banner/>
    <!-- 10个 导航 -->
    <NavList/>
    <!-- tab切换 -->
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Search from '@/components/common/Search.vue'
import Banner from '@/components/Home/Banner.vue'
import NavList from '@/components/Home/NavList.vue'
export default {
  name: 'Home',
  components: {
    Tabbar,Search,Banner,NavList
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