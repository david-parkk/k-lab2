import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./api/store.js";



createApp(App).use(router,store).mount('#app');

