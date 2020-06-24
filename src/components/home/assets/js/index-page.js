import axios from 'axios'
import httpUtil from '@/components/public/httpUtil'
import NavPage from '@/components/public/nav-page'
export default {
  name: 'index-page',
  components: { NavPage },
  metaInfo: {
    title: '[爱游戏网]一个专注于各类娱乐、传奇、仙侠、端游、页游等公服和私服游戏收集网站',
    meta: [{
      name: 'keywords',
      content: '爱游戏网,iyouxiwang.com,棋牌,捕鱼,传奇,私服,月入百万,游戏,赚钱,手游,网游,游戏大全,优质游戏'
    },
    {
      name: 'description',
      content: '爱游戏网--一个专注于棋牌、传奇私服等游戏收集大全网站'
    }
    ]
  },
  data () {
    return {
      newList: [],
      hotList: [],
      recommendList: [],
      typeGame: {
        qp: { gameLogo: '', gameName: '', intro: '' },
        cq: { gameLogo: '', gameName: '', intro: '' }
      },
      views: {
        images: [],
        videos: []
      }
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
    _getGameViewsList () {
      axios.get('/api/home/games/view').then(res => {
        this.views = res.data.data
      })
    },
    _redirect (entity) {
      httpUtil.redirect(entity.id, entity.gameUrl)
    },
    _redirectById (id, gameUrl) {
      httpUtil.redirect(id, gameUrl)
    },
    _enlargement (i) {
      const honors = this.$refs.honor
      if (honors[i].width === 800) {
        honors[i].style.width = 'calc(100% / 3 - 7px)'
        if (i !== 0) honors[i].style.marginLeft = '10px'
      } else {
        honors[i].style.width = '100%'
        if (i !== 0) honors[i].style.marginLeft = '0px'
      }
    }
  },
  mounted () {
    this._getRecommendList()
    this._getNewList()
    this._getHotList()
    this._getTypeGameList()
    this._getGameViewsList()
  }
}
