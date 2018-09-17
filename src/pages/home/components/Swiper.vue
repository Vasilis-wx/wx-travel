<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="//ad.qunarzz.com/ad/picture/ba5b0338-ee54-4fa5-a225-3e3c354420b8_%E5%9B%BD%E5%86%85%E8%88%AA%E7%BA%BF.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="//ad.qunarzz.com/ad/picture/a13bf52f-a4d0-403a-9661-2abb173e0259_912-170.jpg" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 显示指示器
        pagination: '.swiper-pagination',
        // 支持轮播循环
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  // style穿透 不受scoped限制
  .wrapper >>> .swiper-pagination-bullet-active {
    background: #fff !important;
  }

  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%
    background: #eee;

    .swiper-img {
      width: 100%;
    }
  }
</style>
