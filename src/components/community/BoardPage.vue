<template>
    <div v-if="!write">
      <div>
        <button @click="write=!write">글쓰기 </button>
      </div>
      <div>
        <PostBox />
      </div>
        
    </div>
    <div v-if="write">
        <button @click="write=!write">X </button>
        <PostPage></PostPage>
    </div>
  </template>
  
  
  <script>
  
    import PostBox from './PostBox.vue'
    import PostPage from './PostPage.vue'
    export default {
        data(){
            return{
                write:false
            }
        },
      name: 'BoardPage',
      components: {
        PostBox,
        PostPage
      }
    }
  </script>