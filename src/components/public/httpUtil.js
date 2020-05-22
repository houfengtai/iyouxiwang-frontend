import axios from 'axios'

/**
 * Created by Hou on 2018/7/24.
 */
export default {
  redirect (id, gameUrl) {
    axios.get(`/api/game/browselog/${id}`).then(res => {
      if (res.data.code === 200) {
        let viewWidth = window.innerWidth ||
                    document.body.clientWidth ||
                    document.documentElement.clientWidth || 0
        if (viewWidth > 500) {
          window.open(gameUrl, '_blank')
        } else window.location.href = gameUrl
      }
    })
  }
}
