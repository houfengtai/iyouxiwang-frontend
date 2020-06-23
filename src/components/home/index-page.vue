<template>
    <div>
        <h1>爱游戏网--首页</h1>
        <nav-page index="0"></nav-page>
        <div class="index-box">
            <div class="label-row">
                <div class="label-font"><img src="./assets/images/new.svg">最新<span>:</span></div>
                <div class="label-right">
                <span class="label-box" v-for="entity in newList" :key="entity.id" @click="_redirect(entity)">
                    <span class="label-name">{{entity.gameName}}</span>
                </span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="label-row">
                <div class="label-font red"><img src="./assets/images/hot.svg">热门<span>:</span></div>
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
                            <img :src="entity.gameLogo" :alt="entity.gameName">
                            <div><strong>{{entity.gameName}}</strong></div>
                        </div>
                    </div>
                </div>
                <div class="content-sy-right">
                    <div class="col-title"><img class="rec" src="./assets/images/info.svg"><strong>游戏资讯</strong><a href="#" class="a-other">更多>></a></div>
                    <div class="sy-right-cont">
                        <div class="sy-right-cont-row"><a title="【李逵劈鱼攻略】快速打死李逵，抢全屏炸弹">【李逵劈鱼攻略】快速打死李逵，抢全屏炸弹</a></div>
                        <div class="sy-right-cont-row"><a title="【金蟾捕鱼攻略】如何才能打死金蟾？注意这几项就可以了">【金蟾捕鱼攻略】如何才能打死金蟾？注意这几项就可以了</a></div>
                        <div class="sy-right-cont-row"><a title="【大闹天宫攻略】教你如何打悟空，抢仙桃">【大闹天宫攻略】教你如何打悟空，抢仙桃</a></div>
                        <div class="sy-right-cont-row"><a title="【财神捕鱼攻略】怎么才能打到红包，财神如何命中？稳住才能赢">【财神捕鱼攻略】怎么才能打到红包，财神如何命中？稳住才能赢</a></div>
                        <div class="sy-right-cont-row"><a title="【五龙捕鱼攻略】算准时间，一发打中金龙王">【五龙捕鱼攻略】算准时间，一发打中金龙王</a></div>
                        <div class="sy-right-cont-row"><a title="【疯狂捕鱼攻略】教你打金龙鱼，炸弹海马炸全屏">【疯狂捕鱼攻略】教你打金龙鱼，炸弹海马炸全屏</a></div>
                        <div class="sy-right-cont-row"><a title="【3D捕鱼攻略】鱼怎么都打不死？一招教你轻松上分">【3D捕鱼攻略】鱼怎么都打不死？一招教你轻松上分</a></div>
                        <div class="sy-right-cont-row"><a title="【大圣捕鱼攻略】大圣压不住？如来神掌灭全屏">【大圣捕鱼攻略】大圣压不住？如来神掌灭全屏</a></div>
                        <div class="sy-right-cont-row"><a title="【美人捕鱼攻略】如何低成本打到巨型美人鱼与黄金龙">【美人捕鱼攻略】如何低成本打到巨型美人鱼与黄金龙</a></div>
                        <div class="sy-right-cont-row"><a title="【天天捕鱼攻略】轻松命中大头鱼，上分不是梦">【天天捕鱼攻略】轻松命中大头鱼，上分不是梦</a></div>
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
                    <div title="休闲棋牌">休闲棋牌</div>
                    <div title="传奇">传奇</div>
                </div>
                <div class="con-type-row">
                    <div class="con-type-row-left" @click="_redirect(typeGame.qp)">
                        <div class="con-type-row-img-box float-left"><img class="game-log" width="60" height="60" :src="typeGame.qp.gameLogo" :alt="typeGame.qp.gameName"></div>
                        <div class="con-type-row-title-box float-left">
                            <div><strong>{{typeGame.qp.gameName}}</strong></div>
                            <div>{{typeGame.qp.intro}}</div>
                        </div>
                    </div>
                    <div  class="con-type-row-right" @click="_redirect(typeGame.cq)">
                        <div class="con-type-row-img-box float-left"><img class="game-log float-left" width="60" height="60" :src="typeGame.cq.gameLogo" :alt="typeGame.cq.gameName"></div>
                        <div class="con-type-row-title-box float-left">
                            <div><strong>{{typeGame.cq.gameName}}</strong></div>
                            <div>{{typeGame.cq.intro}}</div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="margin-top10 col-title">
                <img class="rec" src="./assets/images/img.svg">
                <strong>荣誉墙</strong>
            </div>
            <div class="game-img-box">
                <img v-for="(e,i) in views.images" :key="e.id" :src="e.resourceUrl" :alt="e.remark" :title="e.remark" ref="honor" @click="_enlargement(i)">
            </div>
            <div class="margin-top10 col-title">
                <img class="rec" src="./assets/images/video.svg">
                <strong>高光操作</strong>
            </div>
            <div class="video-box">
                <video v-for="e in views.videos" :key="e.id" :title="e.remark" controls controlslist="nodownload noremoteplayback" ref="video" disablePictureInPicture="true">
                    <source :src="e.resourceUrl" type="video/mp4">
                </video>
            </div>
            <div class="external-link">
                <div class="el-row"><strong>友情链接>></strong></div>
                <div class="el-link-box">
                    <a href="https://www.douyu.com/" title="斗鱼" target="_blank">斗鱼</a>
                    <a href="https://www.bilibili.com/" title="哔哩哔哩" target="_blank">哔哩哔哩</a>
                    <a href="https://www.huya.com/" title="虎牙" target="_blank">虎牙</a>
                    <a href="https://weibo.com/" title="新浪微博" target="_blank">新浪微博</a>
                    <a href="https://www.baidu.com/" title="百度" target="_blank">百度</a>
                    <a href="https://www.taobao.com/" title="淘宝" target="_blank">淘宝</a>
                    <a href="https://bbs.tianya.cn/" title="天涯社区" target="_blank">天涯社区</a>
                    <a href="https://www.zhihu.com/" title="知乎" target="_blank">知乎</a>
                    <a href="https://www.hupu.com/" title="虎扑" target="_blank">虎扑</a>
                    <a href="https://www.douyin.com/" title="抖音" target="_blank">抖音</a>
                    <a href="https://www.9game.cn/" title="九游社区" target="_blank">九游社区</a>
                    <a href="http://www.kugou.com/" title="酷狗音乐" target="_blank">酷狗音乐</a>
                    <a href="http://www.4399.cn/" title="4399网" target="_blank">4399网</a>
                    <a href="https://dl.pconline.com.cn/" title="太平洋下载" target="_blank">太平洋下载</a>
                    <a href="http://xiazai.zol.com.cn/" title="ZOL下载频道" target="_blank">ZOL下载频道</a>
                    <a href="https://www.uc.cn/" title="UC浏览器" target="_blank">UC浏览器</a>
                    <a href="https://www.biubiu001.com/" title="加速器" target="_blank">加速器</a>
                    <a href="https://www.crsky.com/default.html" title="非凡软件" target="_blank">非凡软件</a>
                    <a href="https://www.37.com/" title="37玩" target="_blank">37玩</a>
                    <a href="https://www.duowan.com/" title="多玩" target="_blank">多玩</a>
                    <a href="https://www.ithome.com/" title="IT之家" target="_blank">IT之家</a>
                    <a href="https://www.admin5.com/" title="创业网" target="_blank">创业网</a>
                    <a href="http://games.sina.com.cn/web/" title="新浪页游" target="_blank">新浪页游</a>
                    <a href="http://www.liuxue86.com/" title="出国留学网" target="_blank">出国留学网</a>
                    <a href="https://www.chinaz.com/" title="站长之家" target="_blank">站长之家</a>
                    <a href="https://win10.ithome.com/windows10master/" title="Win10优化大师" target="_blank">Win10优化大师</a>
                    <a href="https://www.25pp.com/" title="PP助手" target="_blank">PP助手</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./assets/js/index-page.js"></script>
<style scoped>
@import "./assets/css/index-page.scss";
</style>
