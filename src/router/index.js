
import { createRouter, createWebHistory } from 'vue-router'
import JouJou from '../Pages/Joujou.vue'
import MangasPage from '../Pages/MangasPage.vue'
import JeuxVideo from '../Pages/JeuxVideo.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'JouJou',
      component: JouJou
    },
    {
        path: '/mangaspage',
        name: 'MangasPage',
        component: MangasPage
      },
    {
      path: '/jeuxvideo',
      name: 'JeuxVideo',
 
      component: JeuxVideo
    }
  ]
})

export default router