<template>
  <div class="topNav">
    <p class="great" @click="choice" :class="isactive?'active':''">精选</p>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide 
          v-for="(item,index) in list" 
          :class="item.active?'active':''" 
          :key="index"
          @click.native="change(item.id)">{{item.text}}</swiper-slide>
    </swiper>
    <van-icon name="wap-nav" />
  </div>
</template>

<script>
export default {
    name:"TopNav",
    data() {
      return {
        isactive:true,
        list:[
          {id:1,text:'美食',active:false},
          {id:2,text:'女装',active:false},
          {id:3,text:'美妆',active:false},
          {id:4,text:'居家日用',active:false},
          {id:5,text:'鞋品',active:false},
          {id:6,text:'数码家电',active:false},
          {id:7,text:'男装',active:false},
          {id:8,text:'内衣',active:false},
          {id:9,text:'母婴',active:false},
          {id:10,text:'家装家纺',active:false},
          {id:11,text:'文娱车品',active:false},
          {id:12,text:'配饰',active:false},
          {id:13,text:'箱包',active:false},
          {id:14,text:'户外运动',active:false},
        ],
        swiperOptions: {
            slidesPerView: 6,
            spaceBetween: 5,
            slidesPerView: "auto",
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        //console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(0, 1000, false)
    },
    methods:{
      // 菜单切换函数
      change(id){
        //console.log(id)
        this.isactive = false
        for(let i = 0;i<this.list.length;i++){
          this.list[i].active = false
          if(id == this.list[i].id){
            this.list[i].active = true
          }
        }
      },
      //精选选中函数
      choice(){
        for(let i = 0;i<this.list.length;i++){
          this.list[i].active = false
        }
        this.isactive = true
      }
    }
}
</script>

<style lang="scss" scoped>
.topNav{
    background: #de58b7;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    font-size: 12PX;
    color: #fff;
    height: 24px;
    line-height: 24px;
    margin-bottom: 5px;
    .swiper-slide{
        width: auto!important;
        font-size: 12PX;
        color: #fff;
        margin:0 10px;
        border-bottom: #de58b7 2px solid ;
        text-align: center;
        height: auto;
    }
    .great{
      width: 50px;
      border-bottom: #de58b7 2px solid ;
      text-align: center;
    }
    .active{
       border-bottom: #fff 2px solid ;
    }
    .van-icon{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      font-size: 18px;
    }
}
</style>