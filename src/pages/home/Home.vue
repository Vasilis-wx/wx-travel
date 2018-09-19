<template>
  <div >
    <home-header ></home-header>
    <div ref='wrapper' class="list">
      <div>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
      </div>
    </div>
  </div>
</template>

<script>
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

import axios from 'axios'
import Bscroll from 'better-scroll'

import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader: () => import('./components/header'),
    HomeSwiper: () => import('./components/Swiper'),
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.currentCity)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    this.scroll = new Bscroll(this.$refs.wrapper)
    this.lastCity = this.currentCity
  },
  activated () {
    if (this.lastCity !== this.currentCity) {
      this.getHomeInfo()
      this.lastCity = this.currentCity
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
</script>
<style scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 0.91rem;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
