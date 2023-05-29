<template>
  <div id="app">
    <nav id="app_nav">
      <div class="router_div"><router-link to="/">Home</router-link></div>
      <div class="router_div"><router-link to="/">Rank</router-link></div>
      <div class="router_div"><router-link to="/community">BOARD</router-link></div>
      <div class="router_div"><router-link to="/Profile">PROFILE</router-link></div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@import "./assets/css/App.css";


</style>
