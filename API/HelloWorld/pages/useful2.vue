<template>
    <div class="container">
        <div class="title">{{$t("sop")}}</div>
        <div v-for="(value,key,index) in SOP" :key="index" class="box">
            <div class="">{{value.cluster}}：{{value.specialty}}</div>
            <div>{{value.Category}}</div><div>{{value.Description}}</div>
            <div>等候時間：{{value.Value}}</div>
            
        </div>
    </div>
</template>
<script lang="ts">
import { Vue,Component } from "nuxt-property-decorator";
import axios from 'axios';
@Component
export default class Useful2Page extends Vue{
    // Length=0;
    async asyncData(){
        let [sop]=await Promise.all([
            axios.get('http://www.ha.org.hk/opendata/sop/sop-waiting-time-tc.json')
        ])
        return {
            SOP:sop.data,
            Length:sop.data.length
        }
    }
    get setPages(){
        return null;
    }
}
</script>
<style>
.title{
    font-weight: bold;
    margin-bottom: 1%;
}
.box{
    margin-bottom: 1%;
}
</style>
