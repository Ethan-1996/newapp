<template>
  <div class="tabbar">
        <van-tabbar route active-color="#ed4947">
        <van-tabbar-item replace to="/" icon="wap-home">
            首页
        </van-tabbar-item>
        <van-tabbar-item replace to="/nine" icon="good-job">
            9.9包邮
        </van-tabbar-item>
        <van-tabbar-item replace to="/list" icon="cluster">
            分类
        </van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="manager">
            我的
        </van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>
export default {
    name:"Tabbar"
}
</script>

<style>

</style>