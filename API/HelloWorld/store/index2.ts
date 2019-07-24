import { info } from "~/models/form";
import { Counter } from "~/models/feed";
import { MutationTree,ActionTree,GetterTree } from "vuex";
import axios from 'axios'

export const state=():info=>({
    name:'This is Name',
    self:'This is Self',
    intro:'This is Intro',
    district:'This is District',
    address:'This is Address',
    tel:'This is Tel',
    transport:'This is Transport',
    ticket:'This is Ticket',
    car:'This is Car',
    parking:'This is Parking',
    remind:'This is Remind',
})

export class InfoDetail{
    plusOne(store:any,word:string){
        store.commit("index2/PlusOne",word,{root:true});
    }
    delOne(store:any){//mutation
        store.commit("index2/DelOne",{root:true});
    }
    ActionPlusOne(store:any,word:string){
        store.commit("index2/ActionPlusOne",word,{root:true});
    }
    ActionDelOne(store:any,no:number){
        store.commit("index2/ActionDelOne",no,{root:true});
    }
    getInfo(store:any):info{
        return store.getters["index2/GetDetail"];
    }
    async AddString(store:any){//action
        await store.dispatch("index2/AddString",{root:true})
    }
    async DelString(store:any){//action
        await store.dispatch("index2/DelString",{root:true})
    }
}
let detail=new InfoDetail();
export const mutations:MutationTree<info>={
    PlusOne(state:info,word:string):void{ //state:info：傳入parameter，void：return type
        state.name=state.name+" "+word;
        state.self=state.self+" "+word;
        console.log('PlusOne');
    },
    ActionPlusOne(state:info,word:string):void{ //state:info：傳入parameter，void：return type
        state.intro=state.intro+" "+word;
        state.district=state.district+" "+word;
        console.log('Mutate ActionPlusOne')
    },
    ActionDelOne(state:info,no:number):void{ //state:info：傳入parameter，void：return type
        state.intro=state.intro.slice(0,state.intro.length-no);
        state.district=state.district.slice(0,state.district.length-no);
        console.log('Mutate ActionDelOne')
    },
    DelOne(state:info):void{
        state.name=state.name.slice(0,state.name.length-5);
        state.self=state.self.slice(0,state.self.length-5);
        console.log('DelOne')
    },
}
export const actions:ActionTree<info,any>={
    async NewString(state:any){
        let words=await axios.get('https://api.myjson.com/bins/12mqm5')
        console.log('ActionNewString')
    },
    async AddString(state:any){
        let words=await axios.get('https://api.myjson.com/bins/fy0j5');
        detail.ActionPlusOne(state,words.data.title);
        console.log('ActionPlusOne');
    },
    async DelString(state:any){
        let words=await axios.get('https://api.myjson.com/bins/fy0j5');
        detail.ActionDelOne(state,words.data.title.length+1);
        console.log('ActionDelOne');
    }
}
export const getters:GetterTree<info,any>={//在整個網頁一開始的時候就跑
    GetDetail(state:info):info{
        console.log('GetDetail');
        return state;
        
    }
}

