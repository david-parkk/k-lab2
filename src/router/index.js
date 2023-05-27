import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import CommuView from '../views/CommuView.vue'
import CategoryView from '../views/CategoryView.vue'
import ChallengeView from '../views/ChallengeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView

  },
  {
    path: '/community',
    name: 'community',
    component: CommuView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/challenge',
    name: 'challenge',
    component: ChallengeView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
