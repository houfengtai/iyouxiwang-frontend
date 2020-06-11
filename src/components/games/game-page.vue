<template>
    <div>
        <nav-page index="1"></nav-page>
        <div class="index-box">
            <div class="label-row">
                <div class="label-font"><img src="./assets/images/classify.svg">分类<span>：</span></div>
                <div class="label-right">
                    <span class="label-box" v-for="(e, i) in columnType" :key="e.id">
                        <label :class="{'checked':e.id === queryInfo.c}" @click="_checkedColumnType(i)">{{e.name}}</label>
                    </span>
                    <div class="search-box">
                        <div>
                            <input v-model="queryInfo.k" placeholder="搜索你喜欢的游戏">
                            <span class="search-but" title="查询"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="label-row">
                <div class="label-font"><img src="./assets/images/label.svg">标签<span>：</span></div>
                <div class="label-right">
                    <span class="label-box" v-for="(e, i) in gameTypes" :key="e.id">
                        <label :class="{'checked':e.id === queryInfo.t}" @click="_checkedGameType(i)">{{e.name}}</label>
                    </span>
                </div>
            </div>
            <div class="split-line"></div>
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
