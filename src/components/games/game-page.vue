<template>
    <div>
        <nav-page index="1"></nav-page>
        <div class="index-box">
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
