<template>
  <div class="post">
    <h1>Post</h1>
    <div class="p">{{ $route.params.id }}</div>
    <div class="p">{{ $route.query.title }}</div>
    <div class="p">{{ $route.query.content }}</div>
    <div class="p">{{ $route.query.comment }}</div>
    <div class="p">{{ $route.query.update_date }}</div>
    <hr>

    
    <div v-if="!writeComment">
      <div>
        <button @click="writeComment=!writeComment">댓글 달기 </button>
      </div>
      <hr>
      <div>
        <CommentBox :board_id="$route.params.id"/>
      </div>
    </div>

    <div v-if="writeComment">
        <button @click="writeComment=!writeComment">X </button>
        <child_compo v-model="writeComment"/>
        <PostCommentPage :board_id="$route.params.id"/>
    </div>
    
  </div>
</template>
  
  
<script>
  // @ is an alias to /src
import CommentBox from '../components/community/CommentBox.vue'
import PostCommentPage from '../components/community/PostCommentPage.vue'
  export default {
    name: 'PostView',
    components: {
      CommentBox,
      PostCommentPage
    },
    data() {
        return {
            board_id: null,
            writeComment: false
        };
    },
    created() {
        this.board_id = this.$route.params.id;
     // 나머지 컴포넌트 초기화 작업
    },
  }
</script>

<style>
.p{
  text-align: left;
  background-color: aquamarine;
}
</style>