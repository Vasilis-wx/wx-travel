<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header {
    display: flex;
    // ??
    line-height: $headerHeight
    background: $bgColor;
    // 字体颜色
    color: #fff;

    .header-left {
      width: 0.64rem;
      float: left;
      align: center;
      .back-icon {
        margin-left: 0.2rem
        text-align: center;
        font-size: 0.4rem;
      }
    }

    .header-input {
      flex: 1;
      height: 0.62rem;
      line-height: 0.62rem;
      margin-top: 0.12rem;
      margin-left: 0.2rem;
      padding-left: 0.2rem;
      background: #fff;
      border-radius: 0.1rem;
      color: #ccc;
    }

    .header-right {
      min-width: 1.04rem;
      padding: 0 .1rem
      float: right;
      text-align: center;
      color: #fff
      .arrow-icon {
        font-size: 0.24rem;
        margin-left: -0.04rem;
      }
    }
  }
</style>
