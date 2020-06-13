<template>
  <div class="nine_nav">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide 
          v-for="(item,index) in list" 
          :class="item.active?'active':''" 
          :key="index"
          @click.native="change(item.id)">{{item.text}}</swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isactive:true,
        list:[
          {id:1,text:'美食',active:true},
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
}
</script>

<style lang="scss" scoped>
.nine_nav{
    background: #fff;
    height: 44px;
    line-height: 44px;
    margin-top: 10px;
    border-bottom: #ccc 1px solid;
    .swiper-slide{
        width: auto!important;
        font-size: 12PX;
        margin-left: 10px;
        color: #000;
        // border-bottom: #fff 2px solid ;
        text-align: center;
        height: auto;
    }
    .active{
       border-bottom: #de58b7 2px solid ;
    }
}
    
</style>