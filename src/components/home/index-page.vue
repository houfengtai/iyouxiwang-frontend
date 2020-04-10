<template>
    <div class="index-box">
        <div class="label-row">
            <div class="label-font">最新游戏:</div>
            <div class="label-right">
                <span class="label-box" v-for="(entity,index) in newList" :key="entity.id">
                    <span class="split-line" v-if="index!=0">|</span>
                    <span class="label-name">{{entity.gameName}}</span>
                </span>
            </div>
        </div>
        <div class="label-row">
            <div class="label-font red">热门游戏:</div>
            <div class="label-right">
                <span class="label-box" v-for="(entity,index) in hotList" :key="entity.id">
                    <span class="split-line" v-if="index!=0">|</span>
                    <span class="label-name">{{entity.gameName}}</span>
                </span>
            </div>
        </div>
        <div class="content-synthetical">
            <div class="content">
                <strong>手游推荐</strong>
            </div>
            <div>
                <strong>游戏资讯</strong>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index-page',
  data () {
    return {
      newList: [],
      hotList: []
    }
  },
  methods: {
    _getNewList () {
      axios.get('/api/home/new/games').then(res => {
        this.newList = res.data.data
      })
    },
    _getHotList () {
      axios.get('/api/home/hot/games').then(res => {
        this.hotList = res.data.data
      })
    }
  },
  mounted () {
    this._getNewList()
    this._getHotList()
  }
}
</script>
<style scoped>
.index-box{max-width:800px;margin:auto;padding:10px 15px 10px 15px;background: #fff;}
.label-row{clear: both;min-height:40px;}
    .label-font{color:#ff8a00;float:left;width:75px;}
    .label-right{width: calc(100% - 75px);float: right;}
    .red{color:red;}
    .label-box{color:#666;}
    .split-line{margin: 0px 5px;color:#ccc;display: inline-block;}
    .label-name{cursor: pointer;color:#999;display: inline-block;}
    .label-box .label-name:hover{color:#09befe;}
    .content-synthetical{min-height: 400px;}
</style>
