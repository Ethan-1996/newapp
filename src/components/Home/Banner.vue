<template>
  <div class="bannerBox">
      <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in 6" :key="index">
                    <img src="http://img3.imgtn.bdimg.com/it/u=560807029,1822922774&fm=15&gp=0.jpg" class="itemImg" alt="">
                </van-swipe-item>
            </van-swipe>
      </div>
  </div>
</template>

<script>
export default {
    name:"Banner"
}
</script>

<style lang="scss" scoped>
.bannerBox{
    padding: 0 10px;
    background: #de58b7;
    .banner{
        border-radius: 4px;
        overflow: hidden;
        .itemImg{
            height:140px;
            width:100%
        }
    }

}
</style>