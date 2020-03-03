<template>
    <div class="index-box">
        <div class="data-row" v-for="item in list" :key="item.id" @click="_redirect(item)">
            <h1>{{item.gameName}}</h1>
            <div class="row-left"><img :src="item.gameLogo"></div>
            <div class="row-right">
                <div class="row-title"><strong>{{item.gameName}}</strong><span class="time-box">更新于:{{_getDateTime()}}</span></div>
                <div class="intro">{{item.intro}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import dateUtil from '@/components/public/dateUtil.js'
export default {
  name: 'index-page',
  metaInfo: {
    title: '【爱游戏网】一个专注于各类娱乐|传奇|仙侠|端游|页游等公服和私服游戏收集网站',
    meta: [{
      name: 'keywords',
      content: '爱游戏网,iyouxiwang.com,iyouxiwang,捕鱼,传奇,私服，月入百万,游戏,赚钱,手游,网游,游戏大全,优质游戏'
    }]
  },
  data () {
    return {
      list: [],
      pageRequest: {
        pageIndex: 1,
        pageNo: 0,
        pageSize: 10
      },
      total: 0,
      keyword: '',
      type: -1,
      isLoading: true
    }
  },
  methods: {
    _initData () {
      if (this.isLoading) {
        let param = `pageIndex=${this.pageRequest.pageIndex}&pageSize=${this.pageRequest.pageSize}` + (this.keyword === '' ? '' : `&keyword=${this.keyword}`) + (this.type === -1 ? '' : `&type=${this.type}`)
        axios.get(`/api/index/games?${param}`).then(res => {
          this.pageRequest.pageIndex = res.data.pageIndex
          this.pageRequest.pageNo = res.data.pageNo
          this.pageRequest.pageSize = res.data.pageSize
          this.total = res.data.total
          this.list = [...this.list, ...res.data.data]
          if (this.total < this.pageRequest.pageSize) this.isLoading = false
          if (res.data.data.length < this.pageRequest.pageSize || (this.pageRequest.pageNo + this.pageRequest.pageSize === this.total)) this.isLoading = false
          this.pageRequest.pageIndex = this.pageRequest.pageIndex + 1
          this._setTimeLoading()
        })
      }
    },
    _getDateTime () {
      return dateUtil.dateFormat('hh:mm', new Date())
    },
    // 定义 条件判断 函数
    _calcFuc () {
      // 获取内容真实高度
      let cententHeight = Math.max(document.body.offsetHeight, document.body.scrollHeight)

      // 获取浏览器可视高度
      let viewHeight = window.innerHeight ||
              document.body.clientHeight ||
              document.documentElement.clientHeight || 0

      // 获取滚动的高度
      let scrollHeight = document.body.scrollTop ||
              document.documentElement.scrollTop ||
              window.pageYOffset || 0

      // 获取底部隐藏的高度
      let bottomHiddenHeight = cententHeight - viewHeight - scrollHeight

      // 判断底部隐藏的高度是否小于某个值（这里设置为 10）
      return (bottomHiddenHeight < 10)
    },
    _loading () {
      if (!this._calcFuc()) {
        this._setTimeLoading()
      } else {
        setTimeout(this._initData, 500)
      }
    },
    _setTimeLoading () {
      setTimeout(this._loading, 700) // 时间自定义
    },
    _redirect (item) {
      axios.get(`/api/index/browselog/${item.id}`).then(res => {
        if (res.data.code === 200) {
          let viewWidth = window.innerWidth ||
                document.body.clientWidth ||
                document.documentElement.clientWidth || 0
          if (viewWidth > 500) {
            window.open(item.gameUrl, '_blank')
          } else window.location.href = item.gameUrl
        }
      })
    }
  },
  mounted () {
    this._loading()
  }
}
</script>

<style scoped>
    .web-style .index-box{max-width:800px;padding: 0px 15px;background: #fafafa;margin: auto;}
    .web-style .data-row{height: 70px;width:100%;margin: auto;clear: both;cursor: pointer;border-bottom: 1px dashed #aaa;}
    .web-style .data-row h1{display: none;}
    .web-style .data-row .row-left{height: 60px;width:60px;margin: 5px 15px 5px 0;float:left;border-radius: 10px;}
    .web-style .data-row .row-left img{width: 60px;height:60px;border-radius: 10px;}
    .web-style .data-row .row-right{height: 70px;width:calc(100% - 75px);float:left;}
    .web-style .data-row .row-right .intro,.web-style .data-row .row-right .row-title{
        height: 35px;
        line-height:35px;
        width:100%;
        white-space: nowrap;/* 内容过长显示两行，多余为省略号 */
        text-overflow:ellipsis;/*设置隐藏部分为省略号*/
        overflow: hidden;/*设置隐藏*/
        font-size: 14px;
    }
    .web-style .data-row .row-right .row-title strong{
        height:35px;line-height: 35px;font-size: 16px;
    }
    .web-style .data-row .row-right .time-box{float: right;color:red;}
</style>
