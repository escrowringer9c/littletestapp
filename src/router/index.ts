import { createRouter, createWebHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import WeatherView from '../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/journal', component: JournalView },
    { path: '/weather', component: WeatherView },
  ],
})

export default router