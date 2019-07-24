<template>
  <div>
    <h6>{{post}}</h6>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import {Post, Post2} from '~/models/Post.ts'

@Component
export default class PostPreview extends Vue {
  @Prop() post!:Post2
}
</script>