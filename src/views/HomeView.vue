<template>
  <div class="home">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2> 댄스첼린지 </h2>
    <div id="dance_challenge">
        
    </div>
    <h2> 공익성 첼린지 </h2>
    <div id="public_interest_challenge">
      
    </div>
    <h2> 유희성 첼린지 </h2>
    <div id="amusement_challenge">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
