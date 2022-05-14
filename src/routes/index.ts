import { createRouter, createWebHashHistory } from "vue-router"; 
import TarefasVue from '@/views/TarefasVue.vue'
import ProjetosVue from '@/views/ProjetosVue.vue'

export const routes = [
    { path: '/', name: 'Tarefas', component: TarefasVue, icon: 'fa-solid fa-list-check' },
    { path: '/projetos', name: 'Projetos', component: ProjetosVue, icon: 'fa-solid fa-folder-plus' }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router