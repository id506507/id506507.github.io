<template>
    <div class="container">
        <div class="part">
            <h5>Data</h5>
            Mutation Counter: {{counter}}<br>
            Action Counter: {{Acounter}}
        </div>
        <div class="part">
        <h5>Store</h5>
            
            <div class="">Mutation</div>
            <div>
                <button v-on:click="Add()">ADD</button>
                <button v-on:click="Del()">DEL</button>
            </div>
            <div>{{detail.name}}</div>
            <div>{{detail.self}}</div>
            <div class="">Action</div>
            <div>
                <button v-on:click="AddString()">ADD</button>
                <button v-on:click="DelString()">DEL</button>
            </div>
            <div>{{detail.intro}}</div>
            <div>{{detail.district}}</div>
        </div>
        <div class="part"><!--"key"="value"-->
            
            <h5>AsyncData</h5>
            <div v-for="(value,key,index) in Data" :key="index" class="card"> 
                <div class="title">{{$t("title")}}：{{value.名稱}}</div>
                <div>{{$t("self")}}：{{value.簡述}}</div>
                <div>{{$t("introduction")}}：</div>
                <div v-html="value.介紹"></div>
                <div>{{$t("area")}}：{{value.鄉鎮市區}}</div>
                <div>{{$t("address")}}：{{value.地址}}</div>
                <div v-if="value.電話!=''">{{$t("tel")}}：{{value.電話}}</div>
                <div v-if="value.大眾運輸!=''">{{$t("transport")}}：{{value.大眾運輸}}</div>
                <div v-if="value.門票資訊!=''">{{$t("ticket")}}：{{value.門票資訊}}</div>
                <div v-if="value.行車資訊!=''">{{$t("car")}}：{{value.行車資訊}}</div>
                <div v-if="value.停車資訊!=''">{{$t("parking")}}：{{value.停車資訊}}</div>
                <div v-if="value.旅遊叮嚀!=''">{{$t("remind")}}：{{value.旅遊叮嚀}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue,Component } from 'nuxt-property-decorator';
import { Info } from "~/types/InfoType";
import { InfoDetail } from "~/store/index2";
import axios from 'axios';
let detail=new InfoDetail();
@Component
export default class IndexPage extends Vue{
    counter:number=0;//data
    Acounter:number=0;
    NewInfo=new Info;

    get detail(){
        return detail.getInfo(this.$store);
    }
    
    async asyncData({query,error}){//在其他page按Index2都會重跑，重整也會重跑，在同一個page就不會
        // let title=await axios.get('https://api.myjson.com/bins/fy0j5')
        // let data=await axios.get('https://api.myjson.com/bins/eemjt')
        console.log('This is index2 asyncData')
        let [title,data]=await Promise.all([
            axios.get('https://api.myjson.com/bins/fy0j5'),
            axios.get('https://api.myjson.com/bins/eemjt')
        ])
        return{
            titleData:title.data,
            Data:data.data.RECORD
        }
    }
    async AddString(){
        await detail.AddString(this.$store);
        this.Acounter++;
    }
    async DelString(){
        await detail.DelString(this.$store);
        this.Acounter--;
    }
    Add(){
        detail.plusOne(this.$store,'1000');
        this.counter++;
    }
    Del(){
        detail.delOne(this.$store);
        this.counter--;
    }
    
}

</script>
<style>
.part{
    margin-block-start: 0.5%;
    /*border-style:dashed;*/
}
.part>h5{
    color: red;
}
/* .subtitle{
    color: blue;
    margin-top: 1%;
} */
.card{
    width: 100%;
    border:none;
    margin-bottom: 1%;
    box-shadow: 0 1px 3px 0;
}
.card>div{
  margin-bottom: 0.5%;
}
.title{
  font-weight: bold;
  color:darkolivegreen;
}
</style>

