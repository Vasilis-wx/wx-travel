<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="isShow">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  props: ['list'],
  data () {
    return {
      swiperOption: {
        // 显示指示器
        pagination: '.swiper-pagination',
        // 支持轮播循环
        loop: true,
        // 自动轮播
        autoplay: 1500
      }
    }
  },
  computed: {
    isShow () {
      return this.list.length
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
