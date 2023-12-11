
import { createRouter, createWebHistory } from 'vue-router'
import JouJouView from '../Pages/JoujouView.vue'
import MangasPage from '../Pages/MangasPage.vue'
import JeuxVideoView from '../Pages/JeuxVideoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'JouJouView',
      component: JouJouView
    },
    {
        path: '/mangaspage',
        name: 'MangasPage',
        component: MangasPage
      },
    {
      path: '/jeuxvideo',
      name: 'JeuxVideoView',
      component: JeuxVideoView
    }
  ]
})

export default router