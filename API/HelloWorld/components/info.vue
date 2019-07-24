<template>
    <div>
        <h6>{{info}}</h6>
    </div>
</template>

<script lang="ts">
import { Component,Vue,Prop } from "nuxt-property-decorator";
import { info } from "~/models/form";
@Component
export default class Info extends Vue{
    @Prop({type:Object,required:true}) info!:info
}
</script>
