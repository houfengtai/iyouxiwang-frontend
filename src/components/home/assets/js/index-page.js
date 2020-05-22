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
    this._getRecommendList()
    this._getNewList()
    this._getHotList()
    this._getTypeGameList()
  }
}
