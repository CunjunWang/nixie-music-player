<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <!-- 添加v-if: 因为recommends是异步获取数据, 确保recommends有数据后再执行后续操作.
       最明显的坑就是在slider.vue的mounted方法中, 由于recommends没数据而遍历先结束了,
       导致添加的css效果出不来 -->
        <div v-if="recommends.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="(item, index) in recommends" :key="index">
                <a :href="item.linkUrl">
                  <img @load="loadImage" :src="item.picUrl"/>
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li @click="selectItem(item)" v-for="(item, index) in discList" class="item" :key="index">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imageUrl"/>
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creatorName"></h2>
                <p class="desc" v-html="item.discName"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from '../../base/loading/loading'
  import {getRecommend, getDiscList} from '../../api/recommend'
  import {STATUS_OK} from '../../api/config'
  import Slider from '../../base/slider/slider'
  import Scroll from '../../base/scroll/scroll'
  import {playListMixin} from '../../common/js/mixin'
  import {mapMutations} from 'vuex'

  export default {
    mixins: [playListMixin],
    data () {
      return {
        recommends: [],
        discList: []
      }
    },
    created () {
      this._getRecommend()
      this._getDiscList()
    },
    activated () {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    methods: {
      handlePlayList (playList) {
        const bottom = playList.length > 0 ? '60px' : ''
        this.$refs.recommend.style.bottom = bottom
        this.$refs.scroll.refresh()
      },
      loadImage () {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      },
      selectItem (item) {
        this.$router.push({
          path: `/recommend/${item.discId}`
        })
        this.setDisc(item)
      },
      _getRecommend () {
        getRecommend().then((res) => {
          console.log(res)
          if (res.status === STATUS_OK) {
            this.recommends = res.data
          }
        })
      },
      _getDiscList () {
        getDiscList().then((res) => {
          if (res.status === STATUS_OK) {
            this.discList = res.data
          }
        })
      },
      ...mapMutations({
        setDisc: 'SET_DISC'
      })
    },
    components: {
      Slider,
      Scroll,
      Loading
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width 100%
    top: 88px
    bottom 0

    .recommend-content
      height 100%
      overflow: hidden

      .slider-wrapper
        position: relative
        width 100%
        overflow hidden

      .recommend-list
        .list-title
          height 65px
          line-height 65px
          text-align center
          font-size $font-size-medium
          color: $color-theme

        .item
          display: flex
          box-sizing border-box
          align-items center
          padding 0 20px 20px 20px

          .icon
            flex 0 0 60px
            width 60px
            padding-right 20px

          .text
            display flex
            flex-direction column
            justify-content center
            flex 1
            line-height 20px
            overflow hidden
            font-size $font-size-medium

            .name
              margin-bottom 10px
              color: $color-text

            .desc
              color: $color-text-d

      .loading-container
        position: absolute
        width 100%
        top 50%
        transform translateY(-50%)
</style>
