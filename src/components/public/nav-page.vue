<template>
    <div>
        <div class="nav-box">
            <div class="nav-content">
                <div class="web-logo" @click="_goHome">
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
        { label: '游戏', url: '/games', img: '' }
        // { label: '论坛', url: '/forum', img: '' },
        // { label: '商务合作', url: '/cooperation', img: '' }
      ]
    }
  },
  props: ['url', 'index'],
  methods: {
    _goUrl (n) {
      location.href = this.urls[n].url
    },
    _goHome () {
      location.href = '/index'
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
    .nav-box{height:60px;width:100%;border-bottom: 1px solid #e5e5e5;
        background: #4a4a4a; /*5cb85c*/
        color:#fff;
        /*! autoprefixer: off */
        background: -webkit-linear-gradient(top, #ffdd00 0%, #ff8a00 100%) ;
        /* autoprefixer: on */
        background:-moz-linear-gradient(top, #ffdd00 0%, #ffaa00 100%);
        background:-o-linear-gradient(top, #ffdd00 0%, #ff8a00 100%);
        background:linear-gradient(top, #ffdd00 0%, #ff8a00 100%);
    }
    .clear-back{height:0px;}
    .nav-box .nav-content{height: 60px;max-width: 800px;margin: auto;padding:0px 15px;}
    .web-style .web-logo{ width:120px; float:left; left:-15px; cursor: pointer; }
    .m-style .web-logo{ width:0px; float:left; left:-15px; display: none;}
    .size-normal{ font-size: 14px; }
    .size-big{ margin-top:5px; font-size: 25px; }
    .nav-list{float: left;font-size:16px;}
    .web-style .nav-list div{ float: left; padding: 0px 15px; line-height: 60px; height: 60px; }
    .m-style .nav-list div{ float: left; padding: 0px 10px; line-height: 60px; height: 60px; }
    .web-style .nav-list div:hover{background: #ff8a00;cursor: pointer;color: #fff;}
    .is-selected{background: #ff8a00;}
</style>
