import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"; 
import TarefasVue from '@/views/TarefasVue.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', component: TarefasVue }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router