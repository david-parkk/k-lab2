<template>
    <div class="community">
      <h1>board</h1>
      <BoardPage />
      
    </div>
    
</template>
  
  
<script>
  // @ is an alias to /src
  import BoardPage from '../components/community/BoardPage.vue'
  
  export default {
    name: 'CommuView',
    components: {
      BoardPage,
    }
  }
</script>

<style>
@import "../assets/css/CommuView.css";
</style>