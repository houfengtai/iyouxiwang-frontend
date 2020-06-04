import axios from 'axios'
import dateUtil from '@/components/public/dateUtil.js'
import httpUtil from '@/components/public/httpUtil'
import NavPage from '@/components/public/nav-page'
export default {
  name: 'game-page',
  components: { NavPage },
  metaInfo: {
    title: '【爱游戏网】一个专注于各类娱乐|传奇|仙侠|端游|页游等公服和私服游戏收集网站',
    meta: [{
      name: 'keywords',
      content: '爱游戏网,iyouxiwang.com,iyouxiwang,捕鱼,传奇,私服,月入百万,游戏,赚钱,手游,网游,游戏大全,优质游戏'
    }]
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
      keyword: '',
      type: -1,
      isLoading: true,
      queryInfo: { c: null, t: null, k: null },
      columnType: [
        { id: 0, name: '手游' },
        { id: 1, name: '页游' },
        { id: 2, name: '端游' }
      ],
      gameTypes: [
        { id: 0, name: '休闲棋牌' },
        { id: 1, name: '传奇' },
        { id: 2, name: '仙侠' },
        { id: 3, name: '射击' },
        { id: 4, name: '竞技' },
        { id: 5, name: '益智' },
        { id: 6, name: '模拟' },
        { id: 7, name: '格斗' },
        { id: 8, name: '回合' },
        { id: 9, name: '策略' }
      ]
    }
  },
  methods: {
    _initData () {
      if (this.isLoading) {
        let param = `pageIndex=${this.pageRequest.pageIndex}&pageSize=${this.pageRequest.pageSize}` + (this.keyword === '' ? '' : `&k=${this.keyword}`) + (this.type === -1 ? '' : `&t=${this.type}`)
        axios.get(`/api/game/games?${param}`).then(res => {
          this.pageRequest.pageIndex = res.data.pageIndex
          this.pageRequest.pageNo = res.data.pageNo
          this.pageRequest.pageSize = res.data.pageSize
          this.total = res.data.total
          this.list = [...this.list, ...res.data.data]
          if (this.total < this.pageRequest.pageSize) this.isLoading = false
          if (res.data.data.length < this.pageRequest.pageSize || (this.pageRequest.pageNo + this.pageRequest.pageSize === this.total)) this.isLoading = false
          this.pageRequest.pageIndex = this.pageRequest.pageIndex + 1
          this._setTimeLoading()
        })
      }
    },
    _getDateTime () {
      return dateUtil.dateFormat('hh:mm', new Date())
    },
    // 定义 条件判断 函数
    _calcFuc () {
      // 获取内容真实高度
      let cententHeight = Math.max(document.body.offsetHeight, document.body.scrollHeight)

      // 获取浏览器可视高度
      let viewHeight = window.innerHeight ||
                document.body.clientHeight ||
                document.documentElement.clientHeight || 0

      // 获取滚动的高度
      let scrollHeight = document.body.scrollTop ||
                document.documentElement.scrollTop ||
                window.pageYOffset || 0

      // 获取底部隐藏的高度
      let bottomHiddenHeight = cententHeight - viewHeight - scrollHeight

      // 判断底部隐藏的高度是否小于某个值（这里设置为 10）
      return (bottomHiddenHeight < 10)
    },
    _loading () {
      if (!this._calcFuc()) {
        this._setTimeLoading()
      } else {
        setTimeout(this._initData, 500)
      }
    },
    _setTimeLoading () {
      setTimeout(this._loading, 700) // 时间自定义
    },
    _redirect (entity) {
      httpUtil.redirect(entity.id, entity.gameUrl)
    },
    _checkedColumnType (i) {

    },
    _checkedGameType (i) {

    }
  },
  mounted () {
    this._loading()
  }
}
