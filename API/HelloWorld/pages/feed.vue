<template>
  <div class="container">
    <PostPreview v-for="post in posts" :key="post.id" :post="post"/>
    <!-- <PostPreview/> -->
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue,Prop } from 'nuxt-property-decorator'
import {Post, Post2} from '~/models/Post.ts'
import PostPreview from '~/components/PostPreview.vue'

@Component({
  components: {
    PostPreview
  },
  async asyncData () {
    let { data } = await axios.get('https://api.myjson.com/bins/gyg9d')
    //let {data}=await axios.get('https://api.myjson.com/bins/fy0j5')
    return {posts: data}
  }
})

export default class FeedPage extends Vue {
  posts: Post2[]=[]
  
}
</script>