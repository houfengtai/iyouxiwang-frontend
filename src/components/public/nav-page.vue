<template>
    <div>
        <div class="nav-box">
            <div class="nav-content">
                <div class="web-logo">
                    <div class="size-big">爱游戏网</div>
                    <span class="size-normal">iyouxiwang.com</span>
                </div>
            </div>
            <!--<div>
                <div>首页</div>
                <div>更多</div>
            </div>
            <div>
                <input placeholder="请输入要查询的游戏名称">
                <span>查询</span>
            </div>-->
        </div>
        <div class="clear-back"></div>
        <div class="tips">
            <span class="header-marquee-item">免责声明：本站所有的游戏均来源于网友投稿，如出现侵权，请联系我们进行删除；对于是否下载请自行选择，如出现损失，本站概不负责！</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'nav-page'
}
</script>

<style scoped>
    .web-style .nav-box{height:60px;width:100%;border-bottom: 1px solid #e5e5e5;background: #00c1dc;position: fixed;}
    .clear-back{height:60px;}
    .web-style .tips{
        height:30px;line-height: 30px;
        max-width:800px;
        overflow: hidden;
        animation: marquee 15s linear infinite;
        margin: auto;
        position: relative;
        padding:0px 15px;
        background: #fafafa;
        z-index: -1;
    }
    .web-style .nav-box .nav-content{height: 50px;max-width: 800px;margin: auto;padding:0px 15px;}
    .web-style .tips:hover{
        animation-play-state: paused;
    }
    .web-style .tips .header-marquee-item {
        position: absolute;
        top: 0;
        left: 0;
        white-space: nowrap;
    }
    /* Make it move */
    @keyframes marquee {
        0% {
            text-indent: 27.5em;
        }
        100% {
            text-indent: -105em;
        }
    }
    .web-logo{
        width:150px;
        float:left;
        left:-15px;
    }
    .size-normal{
        font-size: 14px;
    }
    .size-big{
        font-size: 25px;
    }
</style>
