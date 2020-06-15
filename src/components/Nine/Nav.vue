<template>
<div class="box">
  <van-sticky>
    <div class="nine_nav">
      <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide 
            v-for="(item,index) in list" 
            :class="item.active?'active':''" 
            :key="index"
            @click.native="change(item.id)">{{item.text}}</swiper-slide>
      </swiper>   
    </div>
  </van-sticky>
</div>
</template>

<script>
export default {
    data() {
      return {
        isactive:true,
        list:[
          {id:-1,text:'精选',active:true},
          {id:1,text:'居家百货',active:false},
          {id:2,text:'美食',active:false},
          {id:3,text:'服饰',active:false},
          {id:4,text:'配饰',active:false},
          {id:5,text:'美妆',active:false},
          {id:6,text:'内衣',active:false},
          {id:7,text:'母婴',active:false},
          {id:8,text:'箱包',active:false},
          {id:9,text:'数码配件',active:false},
          {id:10,text:'文娱车品',active:false},
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
      change(id){
        console.log(id)
        for(let i = 0;i<this.list.length;i++){
          this.list[i].active = false
          if(id == this.list[i].id){
            this.list[i].active = true
          }
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.box{
  margin-top: 10px;
}
.nine_nav{
    background: #fff;
    height: 44px;
    line-height: 44px;
    border-bottom: #ccc 1px solid;
    .swiper-slide{
        width: auto!important;
        font-size: 12PX;
        margin: 0 6px;
        color: #000;
        // border-bottom: #fff 2px solid ;
        text-align: center;
        height: auto;
    }
    .active{
       border-bottom: #de58b7 2px solid ;
       color: #de58b7;
    }
}
    
</style>