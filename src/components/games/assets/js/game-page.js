import axios from 'axios'
import dateUtil from '@/components/public/dateUtil.js'
import httpUtil from '@/components/public/httpUtil'
import NavPage from '@/components/public/nav-page'
export default {
  name: 'game-page',
  components: { NavPage },
  metaInfo: {
    title: '[爱游戏网]--捕鱼、棋牌、传奇等游戏列表',
    meta: [{
      name: 'keywords',
      content: '爱游戏网,iyouxiwang.com,棋牌,捕鱼,传奇,私服,月入百万,游戏,赚钱,手游,网游,游戏大全,优质游戏'
    },
    {
      name: 'description',
      content: '爱游戏网,iyouxiwang.com,棋牌,捕鱼,传奇,私服,月入百万,游戏,赚钱,手游,网游,游戏大全,优质游戏'
    }
    ]
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
      isLoading: true,
      queryInfo: { c: null, t: null, k: null },
      columnType: [
        { id: 0, name: '手游' },
        { id: 1, name: '页游' },
        { id: 2, name: '端游' }
      ],
      gameTypes: [
        { id: 0, name: '棋牌' },
        { id: 1, name: '传奇' },
        { id: 2, name: '仙侠' },
        { id: 3, name: '射击' },
        { id: 4, name: '竞技' },
        { id: 5, name: '益智' },
        { id: 6, name: '模拟' },
        { id: 7, name: '格斗' },
        { id: 8, name: '回合' },
        { id: 9, name: '策略' }
      ],
      isOpen: true
    }
  },
  methods: {
    _initData () {
      if (this.isLoading) {
        let param = `pageIndex=${this.pageRequest.pageIndex}&pageSize=${this.pageRequest.pageSize}` +
            (this.queryInfo.c == null ? '' : `&c=${this.queryInfo.c}`) +
            (this.queryInfo.t == null ? '' : `&t=${this.queryInfo.t}`) +
            (this.queryInfo.k == null ? '' : `&k=${this.queryInfo.k}`)
        axios.get(`/api/game/games?${param}`).then(res => {
          this.pageRequest.pageIndex = res.data.pageIndex
          this.pageRequest.pageNo = res.data.pageNo
          this.pageRequest.pageSize = res.data.pageSize
          this.total = res.data.total
          this.list = [...this.list, ...res.data.data]
          if (this.total < this.pageRequest.pageSize) this.isLoading = false
          if (res.data.data.length < this.pageRequest.pageSize || (this.pageRequest.pageNo + this.pageRequest.pageSize === this.total)) this.isLoading = false
        })
      }
    },
    _getDateTime () {
      return dateUtil.dateFormat('hh:mm', new Date())
    },
    _redirect (entity) {
      httpUtil.redirect(entity.id, entity.gameUrl)
    },
    _checkedColumnType (i) {
      if (this.queryInfo.c !== i) {
        this.queryInfo.c = i
      } else this.queryInfo.c = null
      this._resetQuery()
      this._initData()
    },
    _checkedGameType (i) {
      if (this.queryInfo.t !== i) {
        this.queryInfo.t = i
      } else this.queryInfo.t = null
      this._resetQuery()
      this._initData()
    },
    _onload () {
      this.pageRequest.pageIndex += 1
      this._initData()
    },
    _resetQuery () {
      this.isLoading = true
      this.pageRequest = { pageIndex: 1, pageNo: 0, pageSize: 10 }
      this.list = []
    },
    _query () {
      this._resetQuery()
      this._initData()
    }
  },
  mounted () {
    this._initData()
  }
}
