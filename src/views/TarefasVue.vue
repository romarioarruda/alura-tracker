<template>
    <div class="box">
        <div class="columns">
            <div style="display: flex;" class="column is-8" role="form"
                aria-label="Formulário para criação de nova tarefa">
                <input v-model="task" type="text" class="input"
                    placeholder="Insira uma nova tarefa e aperte Enter ou clique no botão ao lado"
                    @keydown.enter="addTask" />
                <button class="button is-info ml-1" @click="addTask">Adicionar</button>
            </div>
        </div>
    </div>
    <div class="box">
        <TasksList :tasks="tarefas" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import TasksList from '@/components/TasksList.vue'
import { INotificacao, TipoNotificacao } from '@/interfaces/INotificacao'

export default defineComponent({
    name: 'TarefasVue',
    components: {
        TasksList
    },
    data() {
        return {
            task: ''
        }
    },
    methods: {
        async addTask(): Promise<void> {
            this.store.dispatch('addTarefa', this.task)
                .then(() => {
                    this.task = ''
                    this.notificacao('Sucesso', 'Tarefa criada com sucesso!', TipoNotificacao.SUCESSO)
                })
                .catch(error => {
                    this.notificacao('Falha', error, TipoNotificacao.FALHA)
                })
        },

        notificacao(titulo: string, texto: string, tipo: TipoNotificacao): void {
            this.store.commit('ADD_NOTIFICACAO', {
                titulo,
                texto,
                tipo
            } as INotificacao)
        }
    },
    setup() {
        const store = useStore(key)

        return {
            store,
            tarefas: computed(() => store.state.tarefas)
        }
    }
})
</script>
