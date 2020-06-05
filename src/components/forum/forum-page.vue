<template>
    <div>
        <nav-page index="2"></nav-page>
        <div class="index-box">
            <div class="text-tips">产品正在加班设计中~</div>
        </div>
    </div>
</template>

<script>
import NavPage from '@/components/public/nav-page'
export default {
  name: 'forum-page',
  components: { NavPage }
}
</script>

<style scoped>
.text-tips{width:100%;height:300px;line-height:300px;text-align: center;}
</style>
