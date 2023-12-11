import { createRouter, createWebHistory } from 'vue-router'

// 1. Define route components.
// These can be imported from other files
import Joujou from '../Pages/Joujou.vue'


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { 
        name: "Joujou",
        path: '/', 
        component: Joujou
    },
    { 
        name: "CheeseList",
        path: '/cheeses', 
        component: CheeseListPage,
    },
    { 
        name: "CheeseDetail",
        path: '/cheeses/:id', 
        component: CheeseDetailPage,
    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(import.meta.env.BASE_URL),
    routes // short for `routes: routes`

})

export default router