<template>
    <div>
        <nav-page index="0"></nav-page>
        <div class="index-box">
            <div class="label-row">
                <div class="label-font"><img src="./assets/images/new.svg">最新:</div>
                <div class="label-right">
                <span class="label-box" v-for="(entity,index) in newList" :key="entity.id" @click="_redirect(entity)">
                    <span class="split-line" v-if="index!=0">|</span>
                    <span class="label-name">{{entity.gameName}}</span>
                </span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="label-row">
                <div class="label-font red"><img src="./assets/images/hot.svg">热门:</div>
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
                    <div class="col-title"><img class="rec" src="./assets/images/rec.svg"><strong>手游推荐</strong><a href="#" class="a-other">更多>></a></div>
                    <div class="sy-left-cont">
                        <div v-for="entity in recommendList" :key="entity.id" class="rec-box" @click="_redirect(entity)">
                            <img :src="entity.gameLogo">
                            <div><strong>{{entity.gameName}}</strong></div>
                        </div>
                    </div>
                </div>
                <div class="content-sy-right">
                    <div class="col-title"><img class="rec" src="./assets/images/info.svg"><strong>游戏资讯</strong><a href="#" class="a-other">更多>></a></div>
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
            <div class="margin-top10 col-title"><img class="rec" src="./assets/images/classify.svg"><strong>游戏分类</strong><a href="/games" class="a-other">更多>></a></div>
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
                    <div class="clear"></div>
                </div>
            </div>
            <div class="margin-top10 col-title">
                <img class="rec" src="./assets/images/img.svg">
                <strong>荣誉墙</strong>
            </div>
            <div class="margin-top10 col-title">
                <img class="rec" src="./assets/images/video.svg">
                <strong>高光操作</strong>
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
    </div>
</template>

<script src="./assets/js/index-page.js"></script>
<style scoped>
@import "./assets/css/index-page.scss";
</style>
