<template>
  <div class="topNav">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in 12" :key="index">Slide 1</swiper-slide>
        
        
    </swiper>
  </div>
</template>

<script>
export default {
    name:"TopNav",
    data() {
      return {
        swiperOptions: {
            slidesPerView: 7,
            spaceBetween: 30,
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
        console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style lang="scss" scoped>
.topNav{
    background: #de58b7;
    padding: 0 10px;
    .swiper-slide{
        font-size: 12PX;
        color: #fff;
    }
}
</style>