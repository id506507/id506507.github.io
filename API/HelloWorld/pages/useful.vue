<template>
    <div class="container">
        <div class="title">{{$t("waiting")}}</div>
        <div v-for="(value,key,index) in Waiting.waitTime" :key="index">
            <div class="wait">{{value.hospName}}：{{value.topWait}}</div>
            
        </div>
        <div class="wait">更新時間：{{Waiting.updateTime}}</div>
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
@Component
export default class UsefulPage extends Vue{
    // Length=0;
    async asyncData(Length:number){
        let [waiting]=await Promise.all([
            axios.get('http://www.ha.org.hk/opendata/aed/aedwtdata-tc.json'),
        ])
        return {
            Waiting:waiting.data,
        }
    }
}
</script>
<style>
.title{
    font-weight: bold;
}
.wait{
    
    margin-top: 1%;
}
</style>
