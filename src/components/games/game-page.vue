<template>
    <div>
        <h1>爱游戏网--棋牌、传奇、捕鱼等游戏列表</h1>
        <nav-page index="1"></nav-page>
        <div class="index-box">
                <div v-if="isOpen">
                    <div class="m-top"></div>
                    <div class="label-row">
                        <div class="label-font"><img src="./assets/images/classify.svg">分类<span>：</span></div>
                        <div class="label-right">
                            <span class="label-box" v-for="(e, i) in columnType" :key="i">
                                <label :class="{'checked':e.id === queryInfo.c}" @click="_checkedColumnType(i)">{{e.name}}</label>
                            </span>
                            <div class="search-box">
                                <div>
                                    <input v-model="queryInfo.k" placeholder="搜索你喜欢的游戏">
                                    <span class="search-but" title="查询" @click="_query()"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="label-row">
                        <div class="label-font"><img src="./assets/images/label.svg">标签<span>：</span></div>
                        <div class="label-right">
                        <span class="label-box" v-for="(e, i) in gameTypes" :key="i">
                            <label :class="{'checked':e.id === queryInfo.t}" @click="_checkedGameType(i)">{{e.name}}</label>
                        </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div v-if="isOpen" class="but-box" @click="isOpen=!isOpen">
                        <img src="./assets/images/up.svg">
                    </div>
                    <div v-if="!isOpen" class="but-box" @click="isOpen=!isOpen">
                        <img src="./assets/images/down.svg">
                    </div>
                </div>
            <div class="split-line"></div>
            <div class="data-row" v-for="item in list" :key="item.id" @click="_redirect(item)">
                <div class="row-left"><img :src="item.gameLogo" :alt="item.gameName"></div>
                <div class="row-right">
                    <div class="row-title"><strong>{{item.gameName}}</strong><span class="time-box"></span></div>
                    <div class="intro">{{item.intro}}</div>
                </div>
            </div>
            <div v-if="isLoading" class="more-box" @click="_onload()">
                <div class="more">查看更多<img src="./assets/images/more.svg" /></div>
            </div>
            <div v-if="!isLoading" class="foot-tips">-- 到底啦 --</div>
        </div>
    </div>
</template>

<script src="./assets/js/game-page.js"></script>
<style scoped>
    @import "./assets/css/game-page.scss";
</style>
