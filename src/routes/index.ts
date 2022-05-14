import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"; 
import TarefasVue from '@/views/TarefasVue.vue'
import ProjetosVue from '@/views/ProjetosVue.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Tarefas', component: TarefasVue },
    { path: '/projetos', name: 'Projetos', component: ProjetosVue }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router