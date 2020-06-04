<template>
  <div class="navList">
      <div class="list">
        <div class="item" v-for="(item,index) in 10" :key="index">
            <img src="@/assets/images/fire.png" alt="">
            <p>疯狂爆款</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"NavList"
}
</script>

<style lang="scss" scoped>
.navList{
    background: #de58b7;
    height: 140px;
    padding: 0 10px;
    margin-top: 10px;
    padding-bottom: 10px;
    .list{
        background: #fff;
        border-radius: 4px;
        height: 140px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .item{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 60px;
            img{
                width: 37px;
                height: 40px;
            }
            p{
                font-size: 14px;
            }
        }
    }
}
</style>