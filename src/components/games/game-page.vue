<template>
    <div>
        <nav-page index="1"></nav-page>
        <div class="index-box">
            <div class="label-row">
                <div class="label-font">分类：</div>
                <div class="label-right">
                    <span>
                        <label>手游</label>
                        <label>端游</label>
                        <label>页游</label>
                    </span>
                    <div class="search-box">
                        <input :value="queryInfo.k" placeholder="搜索你喜欢的游戏">
                        <span class="search-but" title="查询"></span>
                    </div>
                </div>
            </div>
            <div class="label-row">
                <div class="label-font">标签：</div>
                <div class="label-right">
                    <span>
                        <label>休闲棋牌</label>
                        <label>传奇</label>
                        <label>仙侠</label>
                        <label>射击</label>
                        <label>竞技</label>
                        <label>益智</label>
                    </span>
                </div>
            </div>
            <div class="data-row" v-for="item in list" :key="item.id" @click="_redirect(item)">
                <h1>{{item.gameName}}</h1>
                <div class="row-left"><img :src="item.gameLogo"></div>
                <div class="row-right">
                    <div class="row-title"><strong>{{item.gameName}}</strong><span class="time-box">更新于:{{_getDateTime()}}</span></div>
                    <div class="intro">{{item.intro}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./assets/js/game-page.js"></script>
<style scoped>
    @import "./assets/css/game-page.scss";
</style>
