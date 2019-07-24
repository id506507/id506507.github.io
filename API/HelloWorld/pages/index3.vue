<template><!--"key"="value"-->
  <div class="container">
    <div class="searchingbox">
      <input type="text" v-model="search" placeholder="輸入名稱">
    </div>
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
</template>

<script lang="ts">
import axios from 'axios';
import { Vue,Component, Model } from "nuxt-property-decorator";
import { Info } from "~/types/InfoType";
@Component
export default class IndexPage extends Vue{
  search:string= ''
  Data:string[]=[]
  async asyncData(search:string){
        // let title=await axios.get('https://api.myjson.com/bins/fy0j5')
        // let data=await axios.get('https://api.myjson.com/bins/eemjt')
        let [data/*,info*/]=await Promise.all([
            axios.get('https://api.myjson.com/bins/eemjt'),
            //axios.get('http://datacenter.taichung.gov.tw/swagger/OpenData/8d85a5fb-74b5-40ea-9dce-878f1dad272a'),
        ])
        return{
            Data:data.data.RECORD.filter(Data=>Data.名稱.includes(search='')),
            // Info:info.data,
        }   
    }

//  get filterView(){
//    return this.Data.filter((view)=>{
//         return view.match(this.search)
//       })
//  }

}
</script>


<style>
/*.container {
  margin: 0 auto;
  display: flex;
}*/
.key{
  color: deeppink;
}
.title{
  font-weight: bold;
  color:darkolivegreen;
}
.searchingbox{
  margin-bottom: 0.5%;
}
.card{
    width: 100%;
    border:none;
    /*border-style:dashed;
    border-style:dashed;*/
    margin-bottom: 1%;
    box-shadow: 0 1px 3px 0;
}
.card>div{
  margin-bottom: 0.5%;
}

/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
} */

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
