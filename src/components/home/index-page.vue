<template>
    <div class="index-box">
        <div class="label-row">
            <div class="label-font">最新游戏:</div>
            <div class="label-right">
                <span class="label-box" v-for="(entity,index) in newList" :key="entity.id" @click="_redirect(entity)">
                    <span class="split-line" v-if="index!=0">|</span>
                    <span class="label-name">{{entity.gameName}}</span>
                </span>
            </div>
            <div class="clear"></div>
        </div>
        <div class="label-row">
            <div class="label-font red">热门游戏:</div>
            <div class="label-right">
                <span class="label-box" v-for="(entity,index) in hotList" :key="entity.id" @click="_redirect(entity)">
                    <span class="split-line" v-if="index!=0">|</span>
                    <span class="label-name">{{entity.gameName}}</span>
                </span>
            </div>
            <div class="clear"></div>
        </div>
        <div class="content-synthetical">
            <div class="content-sy-left">
                <div><strong>手游推荐</strong><a href="#" class="a-other">更多>></a></div>
                <div class="sy-left-cont">
                    <div v-for="entity in recommendList" :key="entity.id" class="rec-box" @click="_redirect(entity)">
                        <img :src="entity.gameLogo">
                        <div><strong>{{entity.gameName}}</strong></div>
                    </div>
                </div>
            </div>
            <div class="content-sy-right">
                <div><strong>游戏资讯</strong><a href="#" class="a-other">更多>></a></div>
                <div class="sy-right-cont">
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                    <div class="sy-right-cont-row"><a>【李逵捕鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="big-logo">
            <img src="/images/big-qiushenjindi.png">
        </div>
        <div class="margin-top10"><strong>游戏分类</strong><a href="#" class="a-other">更多>></a></div>
        <div class="content-type">
            <div class="con-type-title">
                <div>休闲棋牌</div>
                <div>传奇</div>
            </div>
            <div class="con-type-row">
                <div class="con-type-row-left" @click="_redirect(typeGame.qp)">
                    <div class="con-type-row-img-box float-left"><img class="game-log" width="60" height="60" :src="typeGame.qp.gameLogo"></div>
                    <div class="con-type-row-title-box float-left">
                        <div><strong>{{typeGame.qp.gameName}}</strong></div>
                        <div>{{typeGame.qp.intro}}</div>
                        <div>2020-05-19</div>
                    </div>
                </div>
                <div  class="con-type-row-right" @click="_redirect(typeGame.cq)">
                    <div class="con-type-row-img-box float-left"><img class="game-log float-left" width="60" height="60" :src="typeGame.cq.gameLogo"></div>
                    <div class="con-type-row-title-box float-left">
                        <div><strong>{{typeGame.cq.gameName}}</strong></div>
                        <div>{{typeGame.cq.intro}}</div>
                        <div>2020-05-19</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="external-link">
            <div class="el-row"><strong>友情链接>></strong></div>
            <div class="el-link-box">
                <a href="https://www.douyu.com/" target="_blank">斗鱼</a>
                <a href="https://www.bilibili.com/" target="_blank">哔哩哔哩</a>
                <a href="https://www.huya.com/" target="_blank">虎牙</a>
                <a href="https://weibo.com/" target="_blank">新浪微博</a>
                <a href="https://www.baidu.com/" target="_blank">百度</a>
                <a href="https://www.taobao.com/" target="_blank">淘宝</a>
                <a href="https://bbs.tianya.cn/" target="_blank">天涯社区</a>
                <a href="https://www.zhihu.com/" target="_blank">知乎</a>
                <a href="https://www.hupu.com/" target="_blank">虎扑</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import httpUtil from '@/components/public/httpUtil'
export default {
  name: 'index-page',
  data () {
    return {
      newList: [],
      hotList: [],
      recommendList: [],
      typeGame: {}
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
    },
    _getRecommendList () {
      axios.get('/api/home/recommend/games').then(res => {
        this.recommendList = res.data.data
      })
    },
    _getTypeGameList () {
      axios.get('/api/home/type/games').then(res => {
        this.typeGame = res.data.data
      })
    },
    _redirect (entity) {
      httpUtil.redirect(entity.id, entity.gameUrl)
    }
  },
  mounted () {
    this._getNewList()
    this._getHotList()
    this._getRecommendList()
    this._getTypeGameList()
  }
}
</script>
<style scoped>
.index-box{max-width:800px;margin:auto;padding:10px 15px 10px 15px;background: #fff;}
.label-row{clear: both;min-height:30px;}
.label-font{color:#ff8a00;float:left;width:75px;}
.label-right{width: calc(100% - 75px);float: right;}
.red{color:red;}
.label-box{color:#666;}
.split-line{margin: 0px 5px;color:#ccc;display: inline-block;}
.label-name{cursor: pointer;color:#999;display: inline-block;}
.label-box .label-name:hover{color:#09befe;}
.content-synthetical{min-height: 320px;padding-top:10px;border-top:1px solid #e5e5e5;clear: both;}
.content-sy-left{width:340px;min-height:320px;float: left;}
.sy-left-cont{width:100%;border:1px solid #e5e5e5;min-height:320px;margin-top:5px;}
.content-sy-right{width:438px;min-height:320px;float: right;}
.sy-right-cont{width:calc(100% - 20px);min-height:320px;padding: 0px 10px;border:1px solid #e5e5e5;margin-top:5px;}
.big-logo{width:100%;max-width: 800px;height:150px;margin-top:10px;clear: both;}
.big-logo img{width:100%;max-width:800px;height:150px;}
.content-type{clear: both;margin-top:10px;min-height:150px;border:1px solid #e5e5e5;}
.con-type-title{height:40px;line-height:40px;border-bottom: 1px solid #e5e5e5;}
.con-type-title div{width:calc(50%);float: left;text-indent: 1em;}
.con-type-title div:first-child{width:calc(50% - 1px);border-right:1px solid #e5e5e5;}
.con-type-row{height:120px;}
.con-type-row .con-type-row-left,.con-type-row .con-type-row-right{float: left;width:calc(50% - 10px);height:120px;margin-left:10px;cursor: pointer;}
.con-type-row .con-type-row-left:first-child{width:calc(50% - 11px);border-right:1px solid #e5e5e5;}
.con-type-row-img-box{margin-top:10px;width: 60px;height: 60px;}
.con-type-row-title-box{width:calc(100% - 85px);margin-left:10px;margin-top:5px;line-height:22px;}
.a-other{float: right;}
.external-link{margin-top:10px;padding-bottom:10px;}
.margin-top10{margin-top:10px;}
.sy-right-cont-row{width:100%;height:30px;line-height: 30px;border-bottom: 1px dashed #e5e5e5;}
.external-link .el-row{height:40px;line-height:40px;}
.el-link-box a{display: inline-block;margin: 0px 5px;}
.game-log{width:60px;height: 60px;border:1px solid #e5e5e5;border-radius: 10px;}
.rec-box{float:left;width:170px;height:130px;text-align: center;margin-top:15px;cursor: pointer;}
.rec-box img{width:100px;height:100px;border:1px solid #e5e5e5;border-radius: 12px;}
</style>
