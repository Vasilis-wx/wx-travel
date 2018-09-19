<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img
                class="banner-img"
                src="//img1.qunarzz.com/sight/p0/1606/4a/4ae2bbafcc977a54e2.water.jpg_600x330_616ff41d.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                   {{ this.sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe60f;</span>
                    40
                  <!--{{this.gallaryImgs.length}}-->
                </div>
            </div>
        </div>
        <!--<fade-animation>-->
            <common-gallary
              :imgs="gallaryImgs"
              v-show="showGallary"
              @close="handleGallaryClick"
            >
            </common-gallary>
        <!--</fade-animation>-->
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
// import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  // props: {
  //   sightName: String,
  //   bannerImg: String,
  //   gallaryImgs: Array
  // },
  components: {
    CommonGallary
    // FadeAnimation
  },
  data () {
    return {
      showGallary: false,
      sightName: '打脸生涯海洋世界',
      gallaryImgs: ['http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
        'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    } ,
    handleGallaryClick () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner{
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img{
        width: 100%
    }
    .banner-info{
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        color: #fff
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title{
            flex: 1
            font-size: .32rem
            padding 0 .2rem
        }
        .banner-number{
            height: .32rem
            line-height: .32rem
            margin-top: .14rem
            padding: 0 .4rem
            border-radius: .2rem
            background: rgba(0, 0, 0, .8)
            font-size: .24rem
            .banner-icon{
                font-size: .24rem
            }
        }
    }
}
</style>
