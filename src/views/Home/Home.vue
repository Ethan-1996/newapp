<template>
  <div class="home">
    <!-- 搜索部分 -->
    <Search/>


    <!-- tab切换 -->
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Search from '@/components/common/Search.vue'
export default {
  name: 'Home',
  components: {
    Tabbar,Search
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>