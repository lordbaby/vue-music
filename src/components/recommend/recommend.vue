<template>
    <div class="recommend">
        <div class="recommend-content">
          <div class="slider-wrapper"></div>
          <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul></ul>
          </div>
        </div>
    </div>
</template>
<script>
import { getRecommend } from '@/api/recommend'
export default {
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../common/less/variable';
.recommend {
  display: flex;
  width: 100%;
  top: 88px;
  bottom: 0;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {

    }
  }
}
</style>