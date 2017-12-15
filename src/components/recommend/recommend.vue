<template>
  <div class="recommend">
    <scroll class="recommend-content" :data="songList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="(item, index) in recommends" :key="item.id" >
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in songList" :key="item.id" class="item">
              <div class="icon">
                <img width="60" height="60" :src="item.picUrl" alt="">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.songListAuthor"></h2>
                <p class="desc" v-html="item.songListDesc" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from '@/base/scroll/scroll'
import Slider from '@/base/slider/slider'
import { getRecommend } from '@/api/recommend'
export default {
  data () {
    return {
      recommends: [],
      songList: []
    }
  },
  created () {
    this._getRecommend()
  },
  components: {
    Slider,
    Scroll
  },
  methods: {
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === 0) {
          this.recommends = res.data.slider
          this.songList = res.data.songList
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/variable";
.recommend {
  position: fixed;
  width: 100%;
  top: 44px;
  bottom: 0;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      width: 100%;
      overflow: hidden;
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: @font-size-medium;
        color: @color-theme
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;
        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          text-align: left;
          font-size: @font-size-medium;
          .name {
            margin-bottom: 10px;
            color: @color-text;
          }
          .desc {
            color: rgba(255, 255, 255, .3);
          }
        }
      }
    }
  }
}
</style>