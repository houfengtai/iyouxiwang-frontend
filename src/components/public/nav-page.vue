<template>
    <div>
        <div class="nav-box">
            <div class="nav-content">
                <div class="web-logo">
                    <div class="size-big">爱游戏网</div>
                    <span class="size-normal">iyouxiwang.com</span>
                </div>
                <div class="nav-list">
                    <div v-for="(entity, i) in urls" :key="entity.id" :class="{'is-selected':index==i}" @click="_goUrl(i)">{{entity.label}}</div>
                </div>
            </div>
        </div>
        <div class="clear-back"></div>
    </div>
</template>

<script>
export default {
  name: 'nav-page',
  data () {
    return {
      isSelected: 'is-selected',
      urls: [
        { label: '首页', url: '/index', img: '' },
        { label: '游戏', url: '/games', img: '' },
        { label: '论坛', url: '/forum', img: '' },
        { label: '商务合作', url: '/cooperation', img: '' }
      ]
    }
  },
  props: ['url', 'index'],
  methods: {
    _goUrl (n) {
      location.href = this.urls[n].url
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
    .web-style .nav-box{height:60px;width:100%;border-bottom: 1px solid #e5e5e5;
        background: #4a4a4a; /*5cb85c*/
        color:#fff;
        /*! autoprefixer: off */
        background: -webkit-linear-gradient(top, #ffdd00 0%, #ff8a00 100%) ;
        /* autoprefixer: on */
        background:-moz-linear-gradient(top, #ffdd00 0%, #ffaa00 100%);
        background:-o-linear-gradient(top, #ffdd00 0%, #ff8a00 100%);
        background:linear-gradient(top, #ffdd00 0%, #ff8a00 100%);
    }
    .clear-back{height:10px;}
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
        width:120px;
        float:left;
        left:-15px;
    }
    .size-normal{
        font-size: 14px;
    }
    .size-big{
        margin-top:5px;
        font-size: 25px;
    }
    .nav-list{float: left;font-size:16px;}
    .nav-list div{
        float: left;
        padding: 0px 15px;
        line-height: 60px;
        height: 60px;
    }
    .nav-list div:hover{background: #ff8a00;cursor: pointer;color: #fff;}
    .is-selected{background: #ff8a00;}
</style>
