<template>
  <div class="nine">
    <!-- 顶部部分 -->
    <Top/>
    <!-- nav切换部分 -->
    <Nav/>
    <!-- list -->
    <List/>
     <!-- tab切换 -->
    <Tabbar/>
  </div>
</template>

<script>
import Top from '@/components/Nine/NineTop.vue'
import Nav from '@/components/Nine/Nav.vue'
import List from '@/components/Nine/List.vue'
import Tabbar from '@/components/common/Tabbar.vue'
export default {
  name: 'Nine',
  components: {
    Tabbar,Top,Nav,List
  }
}
</script>
<style lang="scss" scoped>
.nine{
  width: 100%;
  height: 100%;
  background: #f8f8f8;
}
</style>